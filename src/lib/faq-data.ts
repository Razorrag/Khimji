export interface FAQItem {
  group: string;
  q: string;
  a: string;
}

export const ALL_FAQS: FAQItem[] = [
  // ── PRODUCTS (8 questions) ──
  {
    group: "Products",
    q: "What sizes of GI wire do you manufacture?",
    a: "We manufacture GI wire from 1.25mm to 4.00mm diameter (standard range). Custom sizes within our wire drawing capacity are also available on request. Both soft grade (annealed, below 450 N/mm²) and hard grade (450–550 N/mm²) are available."
  },
  {
    group: "Products",
    q: "Is your wire IS 280 certified?",
    a: "Yes. All our Hot Dip Galvanized Mild Steel Wire is manufactured in full compliance with IS 280:2006 (Mild Steel Wire). We conduct in-house mass-of-zinc, dip test (copper sulphate), tensile strength, and diameter verification per batch before dispatch."
  },
  {
    group: "Products",
    q: "Do you manufacture IS 3975 certified armouring wire?",
    a: "Yes. Our Formed Wire for Cable Armouring is manufactured as per IS 3975:1999, including round and formed (flat with curvature) wire cross-sections. We test for resistivity (max 14.5 Ω/km), elongation, tensile strength, and zinc coating per batch."
  },
  {
    group: "Products",
    q: "What zinc coating weights are available?",
    a: "We supply light coating (60–100 g/m²), medium coating (150–200 g/m²), and heavy coating (250+ g/m²) as per IS 280 classifications. For IS 3975 armouring wire, coating is supplied as per standard requirements. Specific coating weight can be specified in your purchase order."
  },
  {
    group: "Products",
    q: "What is the UTS (tensile strength) range of your wire?",
    a: "Soft (annealed) grade: below 450 N/mm². Hard grade: 450–550 N/mm². For IS 3975 armouring wire: typically 300–500 N/mm² with minimum 10% elongation. All values are verified per batch with a material test certificate."
  },
  {
    group: "Products",
    q: "Can you manufacture custom diameter wire?",
    a: "Yes. Our precision cold-drawing equipment can produce wire to custom diameters within our range. Please share the required diameter, tolerance, tensile grade, and zinc coating specification, and we will confirm feasibility and pricing."
  },
  {
    group: "Products",
    q: "What packaging options are available?",
    a: "Standard: coil packing in Hessian cloth, 4-side wire-bound. Coil weights from 25 kg to 150 kg per coil. Spool packaging is available for finer gauges. Custom labelling for OEM customers is also possible."
  },
  {
    group: "Products",
    q: "What raw material (wire rod) do you use?",
    a: "We use IS 7887 / IS 2830 grade mild steel wire rods sourced from reputed primary steel manufacturers in India. Consistent raw material quality is the foundation of consistent finished wire quality."
  },

  // ── ORDERING & DELIVERY (7 questions) ──
  {
    group: "Ordering",
    q: "What is the minimum order quantity?",
    a: "Minimum order is 1 Metric Ton per product and size. For mixed-gauge orders, minimum total is 3 MT. Volume pricing advantages begin at 10 MT and above. Sample orders (5–10 kg per size) are available for quality evaluation."
  },
  {
    group: "Ordering",
    q: "Do you supply across India?",
    a: "Yes, we supply PAN India. Major regular delivery destinations include Delhi NCR, Mumbai, Ahmedabad, Chennai, Kolkata, Hyderabad, Pune, and all major industrial hubs in Rajasthan and adjoining states. Freight arrangements via road transport."
  },
  {
    group: "Ordering",
    q: "What is the typical lead time?",
    a: "Standard sizes: 7–10 business days from order confirmation and advance payment. For large or custom orders (25 MT+): 15–20 days. Urgent requirements can be discussed — we have spot inventory of common sizes."
  },
  {
    group: "Ordering",
    q: "Do you provide a Mill Test Certificate (MTC)?",
    a: "Yes. Every dispatch is accompanied by a Material Test Certificate (MTC) confirming wire diameter, tensile strength, zinc coating weight, standard compliance, and batch number for full traceability."
  },
  {
    group: "Ordering",
    q: "What are your payment terms?",
    a: "New customers: 100% advance before dispatch. Established customers with track record: 30–45 day credit terms available subject to credit evaluation. GST invoice provided with every supply. RTGS / NEFT / UPI accepted."
  },
  {
    group: "Ordering",
    q: "Can I get a sample order before placing bulk?",
    a: "Yes. We offer sample quantities (5–10 kg per size) for quality evaluation. Sample cost is charged at market rate. We recommend testing against your application requirements or sending to an approved testing lab before bulk commitment."
  },
  {
    group: "Ordering",
    q: "Do you offer long-term supply contracts?",
    a: "Yes. We welcome long-term supply partnerships with cable manufacturers, construction companies, and distributors. Volume-based pricing agreements, priority dispatch scheduling, and dedicated account management are available for repeat buyers."
  },

  // ── QUALITY (7 questions) ──
  {
    group: "Quality",
    q: "What quality tests do you perform on each batch?",
    a: "Per batch: (1) Wire diameter check with micrometer — every coil. (2) Mass-of-zinc test by gravimetric acid stripping method. (3) Dip test in copper sulphate solution — checks zinc coating continuity. (4) Tensile strength test on UTM. (5) Surface finish inspection. (6) Resistivity test for IS 3975 armouring wire."
  },
  {
    group: "Quality",
    q: "Are you UDYAM registered?",
    a: "Yes. Khemji Wire & Wire Pvt. Ltd. is registered under the Udyam Registration scheme for Micro, Small and Medium Enterprises (MSME) with the Government of India."
  },
  {
    group: "Quality",
    q: "What is your monthly production capacity?",
    a: "Our wire drawing and galvanizing lines have a combined capacity of 700+ Metric Tons per month across all product lines. This can be scaled further for large project requirements with advance planning."
  },
  {
    group: "Quality",
    q: "Do you supply to cable manufacturers directly?",
    a: "Yes. IS 3975 Formed Wire for Cable Armouring is a primary product supplied directly to cable manufacturing companies for underground power and telecom cable armouring. We understand cable manufacturer technical requirements and testing protocols."
  },
  {
    group: "Quality",
    q: "How is batch traceability maintained?",
    a: "Every coil carries a batch identification number linking to the production date, wire rod heat number (raw material lot), galvanizing bath date, and quality test records. Full documentation is available on request."
  },
  {
    group: "Quality",
    q: "Can your wire be tested at an independent lab?",
    a: "Yes. We encourage independent testing. Our wire regularly passes testing at BIS-approved and NABL-accredited testing laboratories. We can share details of testing labs for your verification."
  },
  {
    group: "Quality",
    q: "Do you have BIS certification (ISI mark)?",
    a: "We manufacture wire in compliance with IS 280 and IS 3975 standards. For BIS certification status, please contact our sales team directly as certification status may be updated. All our products are manufactured to IS standard specifications verified by in-house testing."
  },

  // ── TECHNICAL (8 questions) ──
  {
    group: "Technical",
    q: "What is the difference between soft grade and hard grade GI wire?",
    a: "Soft grade (annealed) GI wire has tensile strength below 450 N/mm² and high ductility — it bends easily without breaking and is used for binding, tying, and agricultural applications. Hard grade has tensile strength 450–550 N/mm² and is used for fencing, structural applications, and where higher strength is needed."
  },
  {
    group: "Technical",
    q: "How long does galvanized wire last outdoors?",
    a: "Service life depends heavily on environment: rural/low-pollution air — 40–70 years; urban/industrial atmosphere — 20–40 years; coastal/salt air — 10–20 years. Heavier zinc coating directly extends service life. Medium-coated IS 280 wire in Rajasthan conditions typically lasts 30+ years."
  },
  {
    group: "Technical",
    q: "What temperature is your zinc bath maintained at?",
    a: "Our hot-dip galvanizing bath is maintained at 450–460°C. This precise temperature range ensures optimal zinc-iron alloy layer formation (Fe₂Zn₅ and FeZn₁₃ intermetallic layers) without excessive iron dissolution that would reduce zinc bath life."
  },
  {
    group: "Technical",
    q: "Can your GI wire be used for barbed wire manufacturing?",
    a: "Yes. Hard grade IS 280 GI wire in 2.0mm–2.5mm diameter is standard raw material for barbed wire manufacturing. We supply barbed wire manufacturers with consistent diameter and tensile properties required for barb formation."
  },
  {
    group: "Technical",
    q: "Is your wire suitable for agricultural fencing?",
    a: "Yes. Medium-coated IS 280 GI wire in 2.0mm–3.5mm diameter is widely used for agricultural boundary fencing, vineyard support, orchard trellising, and poultry farm cages. We supply agricultural distributors and co-operatives across Rajasthan."
  },
  {
    group: "Technical",
    q: "What is resistivity and why does it matter for armouring wire?",
    a: "Electrical resistivity of armouring wire determines its ability to function as an Earth Continuity Conductor (ECC) in cables. IS 3975 specifies a maximum resistivity of 14.5 Ω/km. Lower resistivity means better earthing performance. Our IS 3975 wire consistently meets this specification, which is verified per batch."
  },
  {
    group: "Technical",
    q: "What is the difference between electro-galvanized and hot-dip galvanized wire?",
    a: "Hot-dip galvanizing (our process) provides 45–300 g/m² zinc coating with a metallurgical zinc-iron alloy bond — the zinc becomes part of the steel surface, providing long-term cathodic protection even if the coating is scratched. Electro-galvanized wire has only 10–30 g/m² zinc applied electrochemically as a thin surface layer — it offers minimal corrosion protection and is unsuitable for outdoor or structural applications."
  },
  {
    group: "Technical",
    q: "Can your wire withstand coastal or high-humidity environments?",
    a: "For coastal environments, we recommend heavy-coated GI wire (250+ g/m² zinc coating), which significantly extends service life. For extreme marine environments (sea spray zone), we recommend specifying the highest zinc class available. Contact us to discuss your specific environment and we can recommend the right coating weight."
  }
];
