import { NextResponse } from "next/server";

const API_KEY = process.env.GEMINI_API_KEY!;

const API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" +
  API_KEY;

const SYSTEM_PROMPT = `
You are Team Infinity's official AI Assistant.

About Team Infinity:
- Team Infinity is a global digital agency with offices in London (UK) and Karachi (Pakistan).
- We provide Web Development, Shopify Development, Digital Marketing, SEO, UI/UX Design, Graphic Design, Video Editing, and AI Automation services.
- We have helped 500+ local and 64+ international clients.
- We offer premium-quality services at up to 30% lower rates.
- We focus on transparency, performance, and long-term growth.

Rules:
- Be professional, friendly, and concise
- Do NOT provide fake links
- Do NOT mention competitors
- Ask only ONE follow-up question
- Use clear, simple English
- Represent Team Infinity accurately
`;

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [
              {
                text: `${SYSTEM_PROMPT}\n\nUser question: ${message}`,
              },
            ],
          },
        ],
      }),
    });

    const data = await response.json();

    console.log("Gemini raw response:", JSON.stringify(data, null, 2));

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text;

    return NextResponse.json({
      reply:
        reply ||
        "Hi 👋 Welcome to Team Infinity! How can we help you grow your business today?",
    });
  } catch (error) {
    console.error("Gemini Error:", error);
    return NextResponse.json({
      reply: "Something went wrong. Please try again.",
    });
  }
}
