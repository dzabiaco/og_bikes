import {NextRequest, NextResponse} from "next/server";
const nodemailer = require('nodemailer');
// import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {

    const { name, email, message} = await req.json();

    console.log({ name, email, message});

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.NEXT_PUBLIC_PERSONAL_EMAIL,
                pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.NODEMAILER_EMAIL,
            to: email,
            subject: `From ${name}`,
            text: message,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({message: "Email Sent Successfully"}, {status: 200});
    }
    catch (e: any) {
        return NextResponse.json({message: "Failed To Sent Email"}, {status: 500});
    }
}