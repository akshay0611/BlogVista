import sendEmail from "../../lib/sendEmail";
import Subscribe from "../../models/Subscribe";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed." });
  }

  const { subject, content } = req.body;

  if (!subject || !content) {
    return res.status(400).json({ message: "Please provide both subject and content." });
  }

  try {
    const subscribers = await Subscribe.find({}, { email: 1 });

    if (subscribers.length === 0) {
      return res.status(404).json({ message: "No subscribers found." });
    }

    const emails = subscribers.map(subscriber => subscriber.email);

    await sendEmail(
      emails,
      subject,
      content
    );

    return res.status(200).json({ message: "Newsletter sent successfully!" });
  } catch (error) {
    console.error("Error sending newsletter:", error);
    return res.status(500).json({ message: "An error occurred while sending the newsletter." });
  }
}