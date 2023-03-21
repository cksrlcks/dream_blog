import { transporter } from '@/service/mail';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const res = await request.json();
    const { email, subject, content } = res;
    const result = await transporter.sendMail({
        from: process.env.MAIL_ADDRESS,
        to: process.env.MAIL_ADDRESS,
        subject: subject,
        text: content,
    });
    return NextResponse.json({ result });
}
