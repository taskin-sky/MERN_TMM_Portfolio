import { model, Schema } from 'mongoose';

const serviceSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
    },
    img: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Service = model('Service', serviceSchema);

export default Service;
