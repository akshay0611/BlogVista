import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
  },
  content: {
    type: String,
    required: [true, 'Content is required'],
  },
  author: {
    type: String,
    default: 'Anonymous',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
  thumbnail: {
    type: String,
    default: '/placeholder.svg', // Default image URL
  },
});

// Check if the model already exists to avoid overwriting during hot reloading
export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema);