import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const user = process.env.EMAIL;
const password = process.env.PASSWORD;

export async function POST(req: Request) {
    try {
        const {fullName, email, message} = await req.json();

        const transporter = nodemailer.createTransport({
            host: 'mail.gmx.net',
            port: 587,
            secure: false,
            auth: {
                user,
                pass: password
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const mailOptions = {
            from: user,
            to: user,
            subject: `Neue Nachricht von ${fullName}.`,
            html: `
                <p>Sie haben eine neue Nachricht über das Kontaktformular Ihrer Website erhalten.</p>
                <h3>Details der Nachricht:</h3>
                    <ul>
                        <li><strong>Name:</strong> ${fullName}</li>
                        <li><strong>E-Mail:</strong> <a href="mailto:${email}">${email}</a></li>
                    </ul>
                <h3>Nachricht:</h3>
                <p>${message.replace(/\n/g, '<br>')}</p>
                <br>
                <p>Mit freundlichen Grüßen,</p>
                <p><strong>${fullName}</strong></p>
                <hr>
                <p style="font-size: 0.9em; color: #555;">Diese E-Mail wurde automatisch über das Kontaktformular Ihrer Website generiert.<br>
                Bitte antworten Sie nicht direkt auf diese E-Mail.</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            {message: "Message sent successfully"},
            {status: 200},
        );
    } catch (error) {
        console.log(error);
        return new NextResponse("Failed to send message", {status: 500})
    }
}