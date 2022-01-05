let getMessagesFromRedis = async (query = '*') => {
    let messages = await redisClient.ft.search('chat_idx', query, {
        LIMIT: {from: 0, size: 1000},
        SORTBY: {BY: 'created_at', DIRECTION: 'ASC'}
    });
    return messages?.documents.map(d => d.value) || [];
};

let generateFtSearchQuery = ({from_id, to_id, user_id}) => {
    let redisQuery = '*';
    from_id = from_id || user_id;
    if (from_id) {
        redisQuery = `@from_id:[${from_id} ${from_id}]|@to_id:[${from_id} ${from_id}]`;
        if (to_id) {
            redisQuery = `(@from_id:[${from_id} ${from_id}] @to_id:[${to_id} ${to_id}])|(@from_id:[${to_id} ${to_id}] @to_id:[${from_id} ${from_id}])`;
        }
    }

    return redisQuery;
};

module.exports = {
    getMessagesFromRedis,
    generateFtSearchQuery
};