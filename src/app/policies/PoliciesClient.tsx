// app/policies/PoliciesClient.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const policies = [
  {
    title: "Privacy Policy",
    icon: "/images/privacy.svg",
    content: [
      "At Team Infinity, we value your privacy and are committed to safeguarding your personal information. We collect only the data necessary to provide our services such as web development, digital marketing, SEO, and IT solutions. This may include your name, email, phone number, and project-related details.",
      "We never sell or trade your information with third parties. Data is stored securely and used solely to improve your experience, deliver services, and communicate effectively. By using our website and services, you consent to our data practices in accordance with this Privacy Policy.",
      "If you have questions about how we handle your data, please contact us at info@teaminfinity.uk.",
    ],
  },
  {
    title: "Terms of Service",
    icon: "/images/terms.svg",
    content: [
      "By engaging with Team Infinity, you agree to our terms of service. All services—including website design, development, SEO, and digital marketing—are provided on a professional basis with clear project scopes and timelines. Payments must be made as per the agreed terms before or during project delivery.",
      "Unauthorized use of our content, branding, or digital assets is prohibited. Clients are responsible for providing accurate project requirements and timely feedback. Delays in communication may impact project timelines.",
      "Team Infinity reserves the right to decline or discontinue services if terms are violated. These terms are designed to ensure fairness, professionalism, and successful project delivery.",
    ],
  },
  {
    title: "Refund Policy",
    icon: "/images/refund.svg",
    content: [
      "Team Infinity is dedicated to delivering high-quality digital services. Refunds are available only under specific circumstances, such as failure to deliver agreed-upon work. Once a project has been initiated and substantial progress has been made, refunds may not be possible due to invested resources.",
      "For subscription-based services (e.g., SEO campaigns or monthly social media management), cancellation requests must be submitted at least 7 days before the next billing cycle. Refunds are not available for completed work or services already delivered.",
      "We aim to resolve disputes amicably. Clients can reach out to our support team to discuss any issues regarding payments or refunds.",
    ],
  },
  {
    title: "Cookie Policy",
    icon: "/images/cookie.svg",
    content: [
      "Our website uses cookies to enhance your browsing experience, analyze traffic, and deliver personalized content. Cookies help us understand user behavior, improve website performance, and offer relevant digital marketing insights.",
      "By continuing to browse our site, you agree to our use of cookies. You may disable cookies through your browser settings, but please note that certain features of our website may not function properly without them.",
      "These practices allow us to provide a smoother, faster, and more secure experience for our clients across all our services.",
    ],
  },
];

export default function PoliciesClient() {
  return (
    <div>
      {policies.map((policy, idx) => (
        <motion.article
          key={policy.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <header className="flex items-center gap-3 mb-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src={policy.icon}
                alt={policy.title}
                width={40}
                height={40}
              />
            </motion.div>
            <h2 className="text-2xl font-semibold text-gray-900">
              {policy.title}
            </h2>
          </header>
          {policy.content.map((para, i) => (
            <p key={i} className="text-gray-700 mb-4">
              {para}
            </p>
          ))}
        </motion.article>
      ))}
    </div>
  );
}
