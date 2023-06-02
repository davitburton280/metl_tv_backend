const db = require('../models');
const sequelize = require('sequelize');
const { getPagination } = require('../services/query');
const fsPromises = require('fs/promises');
const path = require('path');
const Blogs = db.blogs;

exports.create = async (req, res) => {
  const data = req.body;
  if (!req.body.title || !req.body.content) {
    return res.status(400).json({
      error: 'Missing some required parameters',
    });
  }

  if (req.file) {
    data.image = req.file.filename;
  }

  try {
    const blog = await Blogs.create({
      ...data,
      author_id: req.decoded.id,
    });
    res.status(201).json({
      message: 'Blog created',
      data: {
        blog
      }
    })
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: 'Internal server error'
    })
  }
}

exports.list = async (req, res) => {
  try {
    const { skip, limit } = getPagination(req.query);
    const { count, rows } = await Blogs.findAndCountAll({
      limit: limit === 0 ? undefined : limit,
      offset: skip === 0 ? undefined : skip,
      order: [['created_at', 'DESC']]
    });
    res.json({
      message: 'Blogs',
      data: {
        totalCount: count,
        blogs: rows,
      }
    })
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: 'Internal server error'
    })
  }
}

exports.read = async (req, res) => {
  try {
    const blog = await Blogs.findOne({
      where: {
        id: Number(req.params.id),
      },
    });
    if (!blog) {
      return res.status(404).json({
        error: "Blog not found"
      })
    }
    res.json({
      message: 'Blog',
      data: blog,
    })
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: 'Internal server error'
    })
  }
}

exports.update = async (req, res) => {
  try {
    const blog = await Blogs.findOne({
      where: {
        id: Number(req.params.id),
      },
    });
    if (!blog) {
      return res.status(404).json({
        error: "Blog not found"
      })
    }
    if (blog.author_id !== req.decoded.id) {
      return res.status(403).json({
        error: "Forbidden operation"
      })
    }

    if (req.file && blog.image) {
      const filePath = path.join(__dirname, '../public/uploads/images/', blog.image);
      await fsPromises.unlink(filePath);
      blog.image = req.file.filename;
    }

    if (req.body.title) {
      blog.title = req.body.title;
    }
    if (req.body.content) {
      blog.content = req.body.content;
    }
    
    await blog.save();

    res.json({
      message: 'Blog updated',
      data: blog,
    })
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: 'Internal server error'
    })
  }
}

exports.delete = async (req, res) => {
  try {
    const blog = await Blogs.findOne({
      where: {
        id: Number(req.params.id),
      },
    });
    if (!blog) {
      return res.status(404).json({
        error: "Blog not found"
      })
    }
    await blog.destroy();
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: 'Internal server error'
    })
  }
}