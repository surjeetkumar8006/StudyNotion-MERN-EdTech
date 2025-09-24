const nodemailer = require('nodemailer');

const mailSender = async (email, title, body) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,  // smtp.gmail.com
            port: 465,                    // SSL port
            secure: true,                 // true for 465, false for 587
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const info = await transporter.sendMail({
            from: `"StudyNotion" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: title,
            html: body
        });

        console.log("Mail sent successfully:", info.response);
        return info;
    }
    catch (error) {
        console.log('Error while sending mail (mailSender) - ', email);
        console.error(error);  // full error print karo for debugging
    }
}

module.exports = mailSender;
