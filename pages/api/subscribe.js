import sendEmail from "../../lib/sendEmail";
import Subscribe from "../../models/Subscribe"; // Import the Mongoose model

export default async function handler(req, res) {
  const { email } = req.body;

  // Validate email for POST and DELETE requests
  if ((req.method === "POST" || req.method === "DELETE") && (!email || !/\S+@\S+\.\S+/.test(email))) {
    return res.status(400).json({ message: "Please provide a valid email address." });
  }

  try {
    switch (req.method) {
      case "POST":
        // Check if the email is already subscribed
        const existingSubscriber = await Subscribe.findOne({ email });
        if (existingSubscriber) {
          return res.status(400).json({ message: "This email is already subscribed." });
        }

        // Create a new subscriber
        const newSubscriber = new Subscribe({ email });
        await newSubscriber.save();

        // Send a welcome email to the subscriber
        await sendEmail(
          email,
          "Welcome to My Blog!",
          `
            <div style="font-family: Arial, sans-serif; color: #333;">
              <h1 style="color: #2563eb;">Welcome to Blog Vista!</h1>
              <p>Hi there,</p>
              <p>Thank you for subscribing to my Blog Vista! I'm so excited to have you here as part of my journey.</p>
              <p>This blog is a personal space where I share my thoughts, experiences, and ideas on topics that matter to me. From technology and productivity to lifestyle and personal growth, I hope my posts inspire, entertain, and resonate with you.</p>
              <p>Here’s what you can look forward to:</p>
              <ul>
                <li><strong>Personal stories:</strong> Dive into my experiences and reflections on life.</li>
                <li><strong>Creative insights:</strong> Explore my creative process and projects.</li>
                <li><strong>Thoughtful discussions:</strong> Join me in exploring ideas and perspectives.</li>
              </ul>
              <p>To get started, why not check out some of my recent posts?</p>
              <a href="https://blog-vista-iota.vercel.app/posts" style="display: inline-block; padding: 10px 20px; background-color: #2563eb; color: #fff; text-decoration: none; border-radius: 5px;">Explore My Blog</a>
              <p>If you ever have any thoughts, questions, or just want to say hi, feel free to reply to this email. I'd love to hear from you!</p>
              <p>Thanks again for subscribing. I can't wait to share my journey with you.</p>
              <p>Warm regards,</p>
              <p><strong>Akshay Kumar</strong></p>
              <hr style="border: 0; border-top: 1px solid #ddd;">
              <p style="font-size: 0.9em; color: #777;">You're receiving this email because you subscribed to my Blog Vista. </a>.</p>
            </div>
          `
        );

        // Return a success response
        return res.status(200).json({ message: "Subscription successful! Please check your email." });

        case "GET":
          // Fetch all subscribers from the database
          const subscribers = await Subscribe.find({}, { email: 1, _id: 1, createdAt: 1 }); // Return email, _id, and createdAt
          return res.status(200).json({ success: true, data: subscribers }); // Use `data` key

      case "DELETE":
        // Remove the email from the subscribers collection
        const deletedSubscriber = await Subscribe.findOneAndDelete({ email });
        if (!deletedSubscriber) {
          return res.status(404).json({ message: "Email not found." });
        }
        return res.status(200).json({ message: "Unsubscribed successfully." });

      default:
        // Handle non-POST/GET/DELETE requests
        return res.status(405).json({ message: "Method not allowed." });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "An error occurred. Please try again later." });
  }
}