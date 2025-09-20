import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, phone, website, service, industry, message } = body;

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "aleenagomez25@gmail.com", // 👈 apna Gmail/Outlook dalna
      subject: "New Contact Form Submission",
      html: `
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Website:</strong> ${website}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Industry:</strong> ${industry}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API KEY:", process.env.RESEND_API_KEY);

    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
