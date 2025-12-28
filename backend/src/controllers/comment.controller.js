import Comment from '../models/comment.model.js';

const addComment = async (req, res) => {
  try {
    const { blogID, name, email, comment } = req.body;

    const commenting = await Comment.create({
      blogID,
      name,
      email,
      comment,
    });

    res.status(201).json({
      success: true,
      message: 'COMMENT ADDED SUCCESSFULLY',
      data: commenting,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'FAILED TO ADD COMMENT',
      error: error.message,
    });
  }
};

const showAllComments = async (req, res) => {
  try {
    const comments = await Comment.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      message: 'COMMENTS FETCHED SUCCESSFULLY',
      data: comments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'FAILED TO FETCH COMMENTS',
      error: error.message,
    });
  }
};

const CommentController = {
  addComment,
  showAllComments,
};

export default CommentController;
