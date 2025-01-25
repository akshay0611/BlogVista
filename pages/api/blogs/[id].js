import dbConnect from '@/lib/dbConnect';
import Blog from '@/models/Blog';

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;

  await dbConnect();

  switch (method) {
    case 'GET': // Fetch a single blog post
      try {
        const blog = await Blog.findById(id);
        if (!blog) {
          return res.status(404).json({ success: false, error: 'Post not found' });
        }
        res.status(200).json({ success: true, data: blog });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case 'PUT': // Update a blog post
      try {
        const {
          title,
          description,
          content,
          slug,
          author,
          publishedAt,
          thumbnail, 
          category,
          status,
        } = req.body;

        const updatedBlog = await Blog.findByIdAndUpdate(
          id,
          {
            title,
            description, // Add this
            content,
            slug,
            author,
            publishedAt,
            thumbnail, 
            category,
            status,
          },
          { new: true } // Return the updated document
        );

        if (!updatedBlog) {
          return res.status(404).json({ success: false, error: 'Post not found' });
        }
        res.status(200).json({ success: true, data: updatedBlog });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case 'DELETE': // Delete a blog post
      try {
        const deletedBlog = await Blog.findByIdAndDelete(id);
        if (!deletedBlog) {
          return res.status(404).json({ success: false, error: 'Post not found' });
        }
        res.status(200).json({ success: true, data: deletedBlog });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).json({ success: false, error: `Method ${method} Not Allowed` });
      break;
  }
}