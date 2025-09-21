import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Policies | Team Infinity",
  description:
    "Review Team Infinity’s Privacy Policy, Terms of Service, Refund Policy, and Cookie Policy. Learn how we protect your data, your rights, and our service guidelines.",
};

export default function PoliciesPage() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white to-cyan-50 pt-32 pb-20 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-40 -left-10 w-72 h-72 bg-[#00B7CD] rounded-full blur-3xl opacity-20" />
      <div className="absolute top-40 -right-10 w-72 h-72 bg-[#00B7CD] rounded-full blur-3xl opacity-20" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Policies
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Transparency and trust are at the core of Team Infinity. Please
            review our policies below to understand how we operate, protect your
            data, and maintain ethical business practices.
          </p>
        </div>

        {/* Privacy Policy */}
        <article className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/images/privacy.svg"
              alt="Privacy Policy"
              width={40}
              height={40}
            />
            <h2 className="text-2xl font-semibold text-gray-900">
              Privacy Policy
            </h2>
          </div>
          <p className="text-gray-700 mb-4">
            At Team Infinity, we value your privacy and are committed to
            safeguarding your personal information. We collect only the data
            necessary to provide our services such as web development, digital
            marketing, SEO, and IT solutions. This may include your name, email,
            phone number, and project-related details.
          </p>
          <p className="text-gray-700 mb-4">
            We never sell or trade your information with third parties. Data is
            stored securely and used solely to improve your experience, deliver
            services, and communicate effectively. By using our website and
            services, you consent to our data practices in accordance with this
            Privacy Policy.
          </p>
          <p className="text-gray-700">
            If you have questions about how we handle your data, please contact
            us at <span className="font-medium">info@teaminfinity.uk</span>.
          </p>
        </article>

        {/* Terms of Service */}
        <article className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/images/terms.svg"
              alt="Terms of Service"
              width={40}
              height={40}
            />
            <h2 className="text-2xl font-semibold text-gray-900">
              Terms of Service
            </h2>
          </div>
          <p className="text-gray-700 mb-4">
            By engaging with Team Infinity, you agree to our terms of service.
            All services—including website design, development, SEO, and digital
            marketing—are provided on a professional basis with clear project
            scopes and timelines. Payments must be made as per the agreed terms
            before or during project delivery.
          </p>
          <p className="text-gray-700 mb-4">
            Unauthorized use of our content, branding, or digital assets is
            prohibited. Clients are responsible for providing accurate project
            requirements and timely feedback. Delays in communication may impact
            project timelines.
          </p>
          <p className="text-gray-700">
            Team Infinity reserves the right to decline or discontinue services
            if terms are violated. These terms are designed to ensure fairness,
            professionalism, and successful project delivery.
          </p>
        </article>

        {/* Refund Policy */}
        <article className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/images/refund.svg"
              alt="Refund Policy"
              width={40}
              height={40}
            />
            <h2 className="text-2xl font-semibold text-gray-900">
              Refund Policy
            </h2>
          </div>
          <p className="text-gray-700 mb-4">
            Team Infinity is dedicated to delivering high-quality digital
            services. Refunds are available only under specific circumstances,
            such as failure to deliver agreed-upon work. Once a project has been
            initiated and substantial progress has been made, refunds may not be
            possible due to invested resources.
          </p>
          <p className="text-gray-700 mb-4">
            For subscription-based services (e.g., SEO campaigns or monthly
            social media management), cancellation requests must be submitted at
            least 7 days before the next billing cycle. Refunds are not
            available for completed work or services already delivered.
          </p>
          <p className="text-gray-700">
            We aim to resolve disputes amicably. Clients can reach out to our
            support team to discuss any issues regarding payments or refunds.
          </p>
        </article>

        {/* Cookie Policy */}
        <article>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/images/cookie.svg"
              alt="Cookie Policy"
              width={40}
              height={40}
            />
            <h2 className="text-2xl font-semibold text-gray-900">
              Cookie Policy
            </h2>
          </div>
          <p className="text-gray-700 mb-4">
            Our website uses cookies to enhance your browsing experience,
            analyze traffic, and deliver personalized content. Cookies help us
            understand user behavior, improve website performance, and offer
            relevant digital marketing insights.
          </p>
          <p className="text-gray-700 mb-4">
            By continuing to browse our site, you agree to our use of cookies.
            You may disable cookies through your browser settings, but please
            note that certain features of our website may not function properly
            without them.
          </p>
          <p className="text-gray-700">
            These practices allow us to provide a smoother, faster, and more
            secure experience for our clients across all our services.
          </p>
        </article>
      </div>
    </section>
  );
}
