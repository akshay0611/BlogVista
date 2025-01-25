// models/Blog.js

import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
  },

  description: {  // Changed from content to description
    type: String,
    required: [true, 'Description is required'],
  },
  content: { // Added content field
    type: String,
    required: [true, 'Content is required'], // Content is required for the blog post
  },
  author: {
    type: String,
    default: 'Anonymous',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['Technology', 'Lifestyle', 'Productivity'], // Allow only these categories
  },
  thumbnail: {
    type: String,
    default: '/placeholder.svg', // Default image URL
  },
});

// Check if the model already exists to avoid overwriting during hot reloading
export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema); 