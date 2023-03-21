import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    service: 'naver',
    host: 'smtp.naver.com',
    port: 587,
    auth: {
        user: process.env.MAIL_ID,
        pass: process.env.MAIL_PW,
    },
});
