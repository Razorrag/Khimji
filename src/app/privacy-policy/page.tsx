import type { Metadata } from 'next';
import Link from 'next/link';
import { generateBreadcrumbs } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Privacy Policy | Khemji Wire',
  description: 'Privacy Policy for Khemji Wire & Wire Pvt. Ltd. detailing our collection, usage, and protection of user information.',
  alternates: { canonical: 'https://www.khemjiwire.in/privacy-policy' },
  openGraph: {
    title: 'Privacy Policy | Khemji Wire & Wire Pvt. Ltd.',
    description: 'Privacy Policy for Khemji Wire & Wire Pvt. Ltd. detailing our collection, usage, and protection of user information.',
    url: 'https://www.khemjiwire.in/privacy-policy',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Khemji Wire Privacy Policy' }]
  },
  twitter: {
    title: 'Privacy Policy | Khemji Wire',
    description: 'Privacy Policy for Khemji Wire & Wire Pvt. Ltd.',
    images: ['/logo.png']
  }
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbs([{ name: 'Privacy Policy', href: '/privacy-policy' }])) }} />
      <div className="relative min-h-screen bg-transparent">
      <div className="pt-36 pb-10 bg-transparent">
        <div className="max-w-[800px] mx-auto px-[5vw]">
          <nav className="mb-8">
            <ol className="flex items-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-widest text-steel">
              <li><Link href="/" className="hover:text-amber transition-colors">Home</Link></li>
              <li style={{ color: "rgba(249,115,22,0.4)" }}>/</li>
              <li className="text-cream">Privacy Policy</li>
            </ol>
          </nav>
          <h1 className="font-bebas text-[clamp(48px,6vw,80px)] leading-[0.85] text-cream mb-8 uppercase tracking-wider">Privacy Policy</h1>
        </div>
      </div>
      <div className="pb-20 max-w-[800px] mx-auto px-[5vw] text-steel/80 font-sans font-light leading-relaxed">

      <p className="mb-6">
        This website is the sole property of <strong>Khemji Wire & Wire Pvt. Ltd.</strong>, Jaipur, India (&ldquo;We&rdquo;, &ldquo;our&rdquo; and &ldquo;us&rdquo; in this Privacy Policy). By using this website, you agree to the Privacy Policy of www.khemjiwire.in (&ldquo;the website&rdquo;), which is set out below. The Privacy Policy relates to the collection and use of personal information you may supply to us through your communication on the website. We reserve the right, at our discretion, to modify or remove portions of this Privacy Policy at any time. This Privacy Policy is in addition to all other terms and conditions applicable to www.khemjiwire.in website.
      </p>

      <p className="mb-6">
        We recognize the importance of protecting the privacy of information collected about visitors to our site, in particular information that is capable of identifying an individual (&ldquo;personal information&rdquo;). This Privacy Policy governs the manner in which your personal information, obtained through the website, will be dealt with. This Privacy Policy should be reviewed periodically so that you are updated on any changes.
      </p>

      <h2 className="font-bebas text-3xl text-cream mt-12 mb-6 uppercase tracking-wider">Personal Information</h2>
      <p className="mb-6">
        Personal information about visitors to our site is collected only when knowingly and voluntarily submitted. We may need to collect such information to provide you with further services or to answer or forward any requests or enquiries. It is our intention that this policy will protect your personal information from being dealt with in any way that is inconsistent with applicable privacy laws in India.
      </p>

      <h2 className="font-bebas text-3xl text-cream mt-12 mb-6 uppercase tracking-wider">Use of Information</h2>
      <p className="mb-6">
        Personal information that visitors submit to our site is used only for the purpose for which it is submitted or for such other secondary purposes that are related to the primary purpose, unless we disclose other uses in this Privacy Policy or at the time of collection. Copies of correspondence sent from the website, that may contain personal information, are stored as archives for record-keeping and back-up purposes only.
      </p>

      <h2 className="font-bebas text-3xl text-cream mt-12 mb-6 uppercase tracking-wider">Disclosure</h2>
      <p className="mb-6">
        Apart from where you have consented or disclosure is necessary to achieve the purpose for which it was submitted, personal information may be disclosed in special situations where we have reason to believe that doing so is necessary to identify, contact or bring legal action against anyone damaging, injuring, or interfering (intentionally or unintentionally) with our rights or property, users, or anyone else who could be harmed by such activities. Also, we may disclose personal information when we believe in good faith that the law requires disclosure.
      </p>

      <h2 className="font-bebas text-3xl text-cream mt-12 mb-6 uppercase tracking-wider">Security</h2>
      <p className="mb-6">
        We strive to ensure the security, integrity and privacy of personal information submitted to our site, and we review and update our security measures in light of current technologies. Unfortunately, no data transmission over the Internet can be guaranteed to be totally secure. However, we will endeavor to take all reasonable steps to protect the personal information you may transmit to us. Once we do receive your transmission, we will also make our best efforts to ensure its security on our systems. In addition, our employees and the contractors who provide services related to our information systems are obliged to respect the confidentiality of any personal information held by us. However, we will not be held responsible for events arising from unauthorized access to your personal information.
      </p>

      <h2 className="font-bebas text-3xl text-cream mt-12 mb-6 uppercase tracking-wider">Access to Information</h2>
      <p className="mb-6">
        We will endeavor to take all reasonable steps to keep secure any information which we hold about you, and to keep this information accurate and up to date. If, at any time, you discover that information held about you is incorrect, you may contact us to have the information corrected. In addition, our employees and the contractors who provide services related to our information systems are obliged to respect the confidentiality of any personal information held by us.
      </p>

      <h2 className="font-bebas text-3xl text-cream mt-12 mb-6 uppercase tracking-wider">Links to Other Sites</h2>
      <p className="mb-6">
        We may provide links to websites outside of our website, as well as to third party websites. These linked sites are not under our control, and we cannot accept responsibility for the conduct of companies linked to our website. Before disclosing your personal information on any other website, we advise you to examine the terms and conditions of using that website and its privacy statement.
      </p>

      <h2 className="font-bebas text-3xl text-cream mt-12 mb-6 uppercase tracking-wider">Problems or Questions</h2>
      <p className="mb-6">
        If we become aware of any ongoing concerns or problems with our website, we will take these issues seriously and work to address these concerns. If you have any further queries relating to our Privacy Policy, or you have a problem or complaint, please contact us.
      </p>

      <h2 className="font-bebas text-3xl text-cream mt-12 mb-6 uppercase tracking-wider">Contact Information</h2>
      <p>
        To ask questions or comment about this privacy policy and our privacy practices, contact us at:<br/>
        <strong>Email:</strong> info@khemjiwire.in<br/>
        <strong>Address:</strong> F-153, Sarna Doongar, RIICO Industrial Area, Jaipur, Rajasthan (302012)<br/>
        <strong>Phone:</strong> +91-9829277869
      </p>
    </div>
    </div>
    </>
  );
}
