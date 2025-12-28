import { model, Schema } from 'mongoose';
import Blog from './blog.model.js';

const commentSchema = new Schema(
  {
    blogID: {
      type: Schema.Types.ObjectId,
      ref: 'Blog',
      required: true,
      validate: {
        validator: async function (value) {
          return await Blog.exists({ _id: value });
        },
        message: 'Invalid Blog ID',
      },
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      lowercase: true,
      trim: true,
    },
    comment: {
      type: String,
      required: [true, 'Comment is required'],
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Comment = model('Comment', commentSchema);
export default Comment;
