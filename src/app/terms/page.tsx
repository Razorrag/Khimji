import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Khemji Wire',
  description: 'Terms of service and industrial supply agreements for Khemji Wire & Wire Pvt. Ltd.',
};

export default function TermsPage() {
  return (
    <div className="pt-40 pb-20 max-w-[800px] mx-auto px-[5vw] text-steel/80 font-sans font-light leading-relaxed">
      <h1 className="font-bebas text-5xl text-cream mb-8 uppercase tracking-wider">Terms of Service</h1>
      
      <p className="mb-6">
        Welcome to the website of Khemji Wire & Wire Pvt. Ltd. By accessing or using our website or ordering our products, you agree to be bound by these Terms of Service.
      </p>
      
      <h2 className="font-bebas text-3xl text-cream mt-12 mb-6 uppercase tracking-wider">1. Use of Website</h2>
      <p className="mb-6">
        All contents of this website (text, design, graphics, and files) are the properties of Khemji Wire & Wire Pvt. Ltd. and are protected by applicable intellectual property laws. You may not copy, reproduce, or republish content without written permission.
      </p>

      <h2 className="font-bebas text-3xl text-cream mt-12 mb-6 uppercase tracking-wider">2. Product Specifications</h2>
      <p className="mb-6">
        Our products are manufactured according to Indian Standards (including IS 280 and IS 3975). Specific technical parameters, tolerances, and configurations will be finalized in individual purchase orders.
      </p>

      <h2 className="font-bebas text-3xl text-cream mt-12 mb-6 uppercase tracking-wider">3. Supply & Delivery Terms</h2>
      <p className="mb-6">
        Delivery schedules, payment parameters, and supply terms are governed by standard industrial supply contracts signed between Khemji Wire & Wire Pvt. Ltd. and our clients. Standard terms of transport, transit insurance, and freight charges are specified in each proforma invoice.
      </p>

      <h2 className="font-bebas text-3xl text-cream mt-12 mb-6 uppercase tracking-wider">4. Contact Information</h2>
      <p>
        If you have any questions about these Terms, please contact us at:<br/>
        <strong>Email:</strong> info@khemjiwire.in<br/>
        <strong>Address:</strong> F-153, Sarna Doongar, RIICO Industrial Area, Jaipur, Rajasthan (302012)
      </p>
    </div>
  );
}
