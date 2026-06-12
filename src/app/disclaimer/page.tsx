import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer | Khemji Wire',
  description: 'Disclaimer and limitation of liability for Khemji Wire & Wire Pvt. Ltd., Jaipur, Rajasthan.',
  alternates: { canonical: 'https://www.khemjiwire.in/disclaimer' },
};

export default function DisclaimerPage() {
  return (
    <div className="relative min-h-screen bg-transparent">
      <div className="pt-36 pb-10 bg-transparent">
        <div className="max-w-[800px] mx-auto px-[5vw]">
          <nav className="mb-8">
            <ol className="flex items-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-widest text-steel">
              <li><a href="/" className="hover:text-amber transition-colors">Home</a></li>
              <li style={{ color: "rgba(249,115,22,0.4)" }}>/</li>
              <li className="text-cream">Disclaimer</li>
            </ol>
          </nav>
          <h1 className="font-bebas text-[clamp(48px,6vw,80px)] leading-[0.85] text-cream mb-8 uppercase tracking-wider">Disclaimer</h1>
        </div>
      </div>
      <div className="pb-20 max-w-[800px] mx-auto px-[5vw] text-steel/80 font-sans font-light leading-relaxed">

      <p className="mb-6">
        All content in this website is provided &ldquo;as is&rdquo; and without warranties of any kind, either expressed or implied. Neither Khemji Wire & Wire Pvt. Ltd., its affiliated or related entities, nor any person involved in the creation, production, and distribution of this website warrant that the functions contained in this website will be uninterrupted or error-free, that defects will be corrected, or that the server that makes the content available will be free of viruses or other harmful components.
      </p>

      <p className="mb-6">
        Khemji Wire & Wire Pvt. Ltd. does not evaluate or guarantee the accuracy of all the information displayed on the website. You agree that any use you make of such information is at your own risk and that Khemji Wire & Wire Pvt. Ltd. is not responsible for any losses resulting from your reliance on any such information.
      </p>

      <p className="mb-6">
        By submitting any information including enquiry to Khemji Wire & Wire Pvt. Ltd., you acknowledge that Khemji Wire & Wire Pvt. Ltd. is not liable to process the information including answer you receive or do not receive, and you agree to hold Khemji Wire & Wire Pvt. Ltd. harmless from any loss, harm, injury or damage resulting from or arising out of your submission of the information including enquiry or your use of or reliance on any response thereto.
      </p>

      <h2 className="font-bebas text-3xl text-cream mt-12 mb-6 uppercase tracking-wider">No Warranties</h2>
      <p className="mb-6">
        You expressly agree that use of this website is at your sole risk. You (and not Khemji Wire & Wire Pvt. Ltd.) assume the entire cost of all necessary servicing, repairs or correction of your system. You expressly agree that neither Khemji Wire & Wire Pvt. Ltd., nor its affiliated or related entities (including its providers), nor any of their respective employees, or agents, nor any person or entity involved in the creation, production and distribution of this website, is responsible or liable to any person or entity whatsoever for any loss, damage (whether actual, consequential, punitive or otherwise), injury, claim, liability or other cause of any kind or character whatsoever based upon or resulting from the use or attempted use of this website or any other linked site.
      </p>

      <p className="mb-6">
        Khemji Wire & Wire Pvt. Ltd. makes no warranty that:
      </p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>The website will meet your requirements;</li>
        <li>The results that may be obtained from the use of the website will be accurate or reliable;</li>
        <li>Any products, services, information, or other material purchased or obtained by you through the website or any transactions entered into through the website will meet your expectations; and</li>
        <li>Any errors in the website will be corrected.</li>
      </ul>

      <h2 className="font-bebas text-3xl text-cream mt-12 mb-6 uppercase tracking-wider">External Links</h2>
      <p className="mb-6">
        Khemji Wire & Wire Pvt. Ltd. is not responsible for any errors, omissions or representations on any of our pages or on any links on any of our pages. We should not and cannot be held responsible for any content present on our website and from any loss or damage aroused due to the content displayed on the website. Please verify the veracity of all information on your own before undertaking any reliance. The linked sites are not under our control and we are not responsible for the contents of any linked site or any link contained in a linked site, or any changes or updates to such sites. We are providing these links to you only as a convenience, and the inclusion of any link does not imply endorsement by us of the site.
      </p>

      <h2 className="font-bebas text-3xl text-cream mt-12 mb-6 uppercase tracking-wider">Extraneous Content</h2>
      <p className="mb-6">
        Khemji Wire & Wire Pvt. Ltd. hereby alerts and warns its users of the possibility of unauthorized posting of contents by any person including members and unauthorized users and advises discretion in access since such content, information or representation may not be suitable to you including being offensive. Khemji Wire & Wire Pvt. Ltd. will not in any way be responsible for such content, information or representations. Khemji Wire & Wire Pvt. Ltd. is also not responsible for alterations, modifications, deletion, reproduction, sale, transmission or any such misuse of data and content in the public domain by any user.
      </p>

      <h2 className="font-bebas text-3xl text-cream mt-12 mb-6 uppercase tracking-wider">Disclaimer of Implied Warranties</h2>
      <p className="mb-6">
        Khemji Wire & Wire Pvt. Ltd. hereby expressly disclaims any implied warranties imputed by the laws of any jurisdiction. Khemji Wire & Wire Pvt. Ltd. considers itself and intends to be subject to the jurisdiction only of the courts at Jaipur, Rajasthan, India.
      </p>

      <h2 className="font-bebas text-3xl text-cream mt-12 mb-6 uppercase tracking-wider">Download at Your Own Risk</h2>
      <p className="mb-6">
        Any material downloaded or otherwise obtained through the use of the website is done at your own discretion and risk and that you will be solely responsible for any damage to your computer system or loss of data that results from the download of any such material. No advice or information, whether oral or written, obtained by you from Khemji Wire & Wire Pvt. Ltd. or through or from the website shall create any warranty.
      </p>

      <div className="mt-12 p-6 rounded-xl border border-amber/20 bg-amber/[0.03]">
        <p className="font-sans text-sm text-cream/70 leading-relaxed">
          <strong className="text-amber">Note:</strong> If you don&apos;t agree with any of our disclaimers above, please do not browse through any of our pages.
        </p>
      </div>

      <h2 className="font-bebas text-3xl text-cream mt-12 mb-6 uppercase tracking-wider">Contact Information</h2>
      <p>
        If you have any questions about this disclaimer, please contact us at:<br/>
        <strong>Email:</strong> info@khemjiwire.in<br/>
        <strong>Address:</strong> F-153, Sarna Doongar, RIICO Industrial Area, Jaipur, Rajasthan (302012)<br/>
        <strong>Phone:</strong> +91-9829277869
      </p>
    </div>
    </div>
  );
}
