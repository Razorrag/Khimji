import { PageTransition } from '../components/layout/PageTransition';
import { SEOHead } from '../components/layout/SEOHead';

export function PrivacyPolicyPage() {
  return (
    <PageTransition>
      <SEOHead title="Privacy Policy | Khemji Wire" />
      <div className="pt-40 pb-20 max-w-[800px] mx-auto px-[5vw] text-steel/80 font-sans font-light leading-relaxed">
        <h1 className="font-bebas text-5xl text-cream mb-8 uppercase tracking-wider">Privacy Policy</h1>
        
        <p className="mb-6">
          At Khemji Wire & Wire Pvt. Ltd., we respect your privacy and are committed to protecting it
          through our compliance with this policy. This policy describes the types of information we may
          collect from you or that you may provide when you visit the website khemjiwire.in and our
          practices for collecting, using, maintaining, protecting, and disclosing that information.
        </p>
        
        <h2 className="font-bebas text-3xl text-cream mt-12 mb-6 uppercase tracking-wider">Information We Collect</h2>
        <p className="mb-6">
          We collect several types of information from and about users of our Website, including
          information by which you may be personally identified, such as name, postal address, e-mail
          address, and telephone number ("personal information").
        </p>

        <h2 className="font-bebas text-3xl text-cream mt-12 mb-6 uppercase tracking-wider">How We Use Your Information</h2>
        <p className="mb-6">
          We use information that we collect about you or that you provide to us, including any personal
          information:
        </p>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>To present our Website and its contents to you.</li>
          <li>To provide you with information, products, or services that you request from us.</li>
          <li>To fulfill any other purpose for which you provide it.</li>
          <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us.</li>
        </ul>

        <h2 className="font-bebas text-3xl text-cream mt-12 mb-6 uppercase tracking-wider">Contact Information</h2>
        <p>
          To ask questions or comment about this privacy policy and our privacy practices, contact us at:<br/>
          <strong>Email:</strong> info@khemjiwire.in<br/>
          <strong>Address:</strong> F-153, Sarna Doongar, RIICO Industrial Area, Jaipur, Rajasthan (302012)
        </p>
      </div>
    </PageTransition>
  );
}
