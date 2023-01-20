const messages_controller = require('../controllers/messagesController')
const sequelize = require('sequelize');
const db = require('../models');
const notifications = db.notifications;
const { NOTIFICATION_TYPES } = require('../constants')
const SocketHandlerService = require('../services/socketHandlerService')
const FileType = require('file-type');
const fsPromises = require('fs/promises');
const path = require('path');

async function saveConversationFiles(conversationId, files) {
  const jobs = [];
  const filenames = [];

  for (const file of files) {
    const type = await FileType.fromBuffer(file);
    const uniqueFilename = `conversation_file_${conversationId}_${Date.now()}.${type.ext}`;
    filenames.push(uniqueFilename);
    const filePath = path.join(__dirname, '..', 'public', 'uploads', 'conversation_files', uniqueFilename);
    jobs.push(fsPromises.writeFile(filePath, file));
  }
  
  await Promise.all(jobs);

  return filenames;
}

exports.createMessage = async (data, socket) => {
  const user = socket.decoded
  if (data.files.length > 0) {
    const filenames = await saveConversationFiles(data.id, data.files);
    data.files = filenames;
  }
  const result = await messages_controller.createForSocket(data, user)
  
  if (result.success) {
    console.log('success ----------')
    // console.log(result.data);

    const room = `conversation_room_${result.data.conversation}`;
    console.log(room);

    socket.to(room).emit('createMessage_success', result.data);
  }
}

exports.deleteMessage = async (data, socket, io) => {
  const failureEvent = 'deleteMessage_failure';
  const successEvent = 'deleteMessage_success';
  const user = socket.decoded;
  if (!data.messageId) {
    return socket.emit(failureEvent, 'id required');
  }

  const result = await messages_controller.deleteForSocket(data.messageId, user);

  if (!result.success) {
    return socket.emit(failureEvent, result.message);
  }

  const room = `conversation_room_${data.conversationId}`;

  console.log('deleteMessage success -----');
  io.to(room).emit(successEvent, data.messageId);
}