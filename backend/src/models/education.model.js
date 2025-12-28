import { model, Schema } from 'mongoose';

const educationSchema = new Schema(
  {
    title: {
      type: String,
      unique: true,
      required: [true, 'Title is required'],
    },
    institution: {
      type: String,
      required: [true, 'Institution is required'],
    },
    startYear: {
      type: Number,
      required: [true, 'Start year is required'],
    },
    endYear: {
      type: Number,
    },
    grade: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// 🔒 Compound unique constraint
educationSchema.index(
  { title: 1, institution: 1, startYear: 1 },
  { unique: true }
);

const Education = model('Education', educationSchema);

export default Education;
