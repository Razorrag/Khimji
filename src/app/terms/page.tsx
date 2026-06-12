import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Khemji Wire',
  description: 'Terms of service and industrial supply agreements for Khemji Wire & Wire Pvt. Ltd., Jaipur, Rajasthan.',
  alternates: { canonical: 'https://www.khemjiwire.in/terms' },
};

export default function TermsPage() {
  return (
    <div className="relative min-h-screen bg-transparent">
      <div className="pt-36 pb-10 bg-transparent">
        <div className="max-w-[800px] mx-auto px-[5vw]">
          <nav className="mb-8">
            <ol className="flex items-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-widest text-steel">
              <li><a href="/" className="hover:text-amber transition-colors">Home</a></li>
              <li style={{ color: "rgba(249,115,22,0.4)" }}>/</li>
              <li className="text-cream">Terms of Service</li>
            </ol>
          </nav>
          <h1 className="font-bebas text-[clamp(48px,6vw,80px)] leading-[0.85] text-cream mb-8 uppercase tracking-wider">Terms of Service</h1>
        </div>
      </div>
      <div className="pb-20 max-w-[800px] mx-auto px-[5vw] text-steel/80 font-sans font-light leading-relaxed">

      <p className="mb-6">
        This website provides its service to you, subject to the following Terms of Service (&ldquo;TOS&rdquo;), which may be updated by us from time to time without any notice to you. By using this site, you signify your agreement to these terms of service. If you do not agree to these terms of service, you may not use the site.
      </p>

      <h2 className="font-bebas text-3xl text-cream mt-12 mb-6 uppercase tracking-wider">1. Use of Website</h2>
      <p className="mb-6">
        All contents of this website (text, design, graphics, and files) are the properties of Khemji Wire & Wire Pvt. Ltd. and are protected by applicable intellectual property laws. You may not copy, reproduce, or republish content without written permission. This site is protected under copyright laws. The images, source code &amp; scripts, programming language and overall &ldquo;look and feel&rdquo; are the intellectual property of the company.
      </p>

      <h2 className="font-bebas text-3xl text-cream mt-12 mb-6 uppercase tracking-wider">2. Product Specifications</h2>
      <p className="mb-6">
        Our products are manufactured according to Indian Standards (including IS 280 and IS 3975). Specific technical parameters, tolerances, and configurations will be finalized in individual purchase orders. The information on this website is provided as a service by Khemji Wire & Wire Pvt. Ltd. While every effort is made to keep this information as accurate as possible, we disclaim any implied warranty or representation about its accuracy, completeness or appropriateness for a particular purpose.
      </p>

      <h2 className="font-bebas text-3xl text-cream mt-12 mb-6 uppercase tracking-wider">3. Supply &amp; Delivery Terms</h2>
      <p className="mb-6">
        Delivery schedules, payment parameters, and supply terms are governed by standard industrial supply contracts signed between Khemji Wire & Wire Pvt. Ltd. and our clients. Standard terms of transport, transit insurance, and freight charges are specified in each proforma invoice.
      </p>

      <h2 className="font-bebas text-3xl text-cream mt-12 mb-6 uppercase tracking-wider">4. Limitation of Liability</h2>
      <p className="mb-6">
        Those persons who access this information assume full responsibility for the use of the information and understand and agree that the company is not responsible or liable for any claim, loss or damage arising from the use of this information. Reference to specific products, processes or services does NOT constitute or imply recommendation or endorsement by the company. The company is not responsible for the results of any defects that may be found to exist in the program or programs used in the display or creation of this site, or any lost profits or other consequential damages that may result from such defects.
      </p>

      <h2 className="font-bebas text-3xl text-cream mt-12 mb-6 uppercase tracking-wider">5. Third-Party Links</h2>
      <p className="mb-6">
        We do not make any representations about third party websites that may be linked to the website. The linked sites are not under our control and we are not responsible for the contents of any linked site or any link contained in a linked site, or any changes or updates to such sites. We are providing these links to you only as a convenience, and the inclusion of any link does not imply endorsement by us of the site.
      </p>

      <h2 className="font-bebas text-3xl text-cream mt-12 mb-6 uppercase tracking-wider">6. Privacy</h2>
      <p className="mb-6">
        Any personal information gathered via the pages within this site will not be shared with or sold to any third party without prior consent. All reasonable efforts are made to protect the privacy of any person divulging personal information within this site. We do not store sensitive information of any kind. For further details, please visit our <a href="/privacy-policy" className="text-amber hover:underline">Privacy Policy</a>.
      </p>

      <h2 className="font-bebas text-3xl text-cream mt-12 mb-6 uppercase tracking-wider">7. Governing Law &amp; Jurisdiction</h2>
      <p className="mb-6">
        This website is the sole property of Khemji Wire & Wire Pvt. Ltd., Jaipur, India. The company considers itself and intends to be subject to the jurisdiction only of the courts at Jaipur, Rajasthan, India.
      </p>

      <h2 className="font-bebas text-3xl text-cream mt-12 mb-6 uppercase tracking-wider">8. Contact Information</h2>
      <p>
        If you have any questions about these Terms, please contact us at:<br/>
        <strong>Email:</strong> info@khemjiwire.in<br/>
        <strong>Address:</strong> F-153, Sarna Doongar, RIICO Industrial Area, Jaipur, Rajasthan (302012)<br/>
        <strong>Phone:</strong> +91-9829277869
      </p>
    </div>
    </div>
  );
}
