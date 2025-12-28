import express from 'express';
import CommentController from '../controllers/comment.controller.js';

const router = express.Router();

router.post('/comment', CommentController.addComment);
router.get('/comment', CommentController.showAllComments);

export default router;
