import ChatClient from "./ChatClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live AI Chat | Team Infinity – Business Growth Assistant",
  description:
    "Chat live with Team Infinity AI Assistant for marketing, web development, AI automation, and business growth solutions.",
  keywords: [
    "AI Chat",
    "Business Growth",
    "Marketing Agency",
    "Web Development",
    "AI Automation",
    "Team Infinity",
  ],
  openGraph: {
    title: "Team Infinity AI Chat Assistant",
    description:
      "Get instant help with marketing, development, and AI automation.",
    type: "website",
  },
};

export default function LiveChatPage() {
  return (
    <main className="h-full w-full flex">
      <ChatClient />
    </main>
  );
}


