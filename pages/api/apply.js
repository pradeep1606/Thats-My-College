import { transporter, mailOption } from "@/config/nodemailer";

const emailContent = (data) => {
  try {
    const parsedData = JSON.parse(data);
    return {
      text: `New Message\n\nCollege Name: ${parsedData.collegeName}\nName: ${parsedData.name}\nEmail: ${parsedData.email}\nMobile: ${parsedData.mobile}\nCity: ${parsedData.city}\nInterested Course: ${parsedData.course}`,
      html: `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Email Inbox</title></head><body><table><tbody><tr><td style="font-size:16px">Apply Form from TMC <br><br></td></tr><br><tr><td>College Name: ${parsedData.collegeName}<br><br>Name: ${parsedData.name}<br><br>Email: ${parsedData.email}<br><br>Mobile: ${parsedData.mobile}<br><br>City: ${parsedData.city}<br><br>Interested Course: ${parsedData.course}</td></tr></tbody></table></body></html>`
    }
  } catch (error) {
    console.error("Error parsing data:", error);
    return {
      text: "Error parsing data",
      html: "Error parsing data"
    };
  }
}

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    try {
      transporter.sendMail({
        ...mailOption,
        ...emailContent(data),
        subject: "TMC Apply Form",
      })
      return res.status(200).json({ success: true })
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: error.message })
    }
  }
  return res.status(400).json({ message: 'Bad request' })
}

export default handler;


