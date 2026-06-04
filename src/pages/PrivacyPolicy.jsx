import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <section className="bg-[#F5F3EE] min-h-screen py-24 px-4">
        <div className="max-w-5xl mx-auto">
          {/* HEADER */}
          <div className="text-center mb-16">
            <p className="uppercase tracking-[5px] text-yellow-500 font-semibold text-sm">
              Legal Information
            </p>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#0A1F44] mt-5">
              Privacy Policy
            </h1>
            <p className="text-gray-500 text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
              Learn how Welyft collects, protects, and manages your information
              while providing secure logistics services.
            </p>
          </div>

          {/* MAIN CARD */}

          <div className="bg-white rounded-[35px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
            {/* TOP BAR */}

            <div className="bg-[#021B44] px-4 sm:px-6 lg:px-10 py-8">
              <h2 className="text-4xl font-bold text-white">Privacy Policy</h2>

              <p className="text-gray-300 mt-3 text-lg">Last updated: 2026</p>
            </div>

            {/* CONTENT */}

            <div className="p-8 md:p-14 space-y-14">
              {/* SECTION */}

              <div className="border-l-4 border-yellow-400 pl-6">
                <h2 className="text-3xl font-bold text-[#0A1F44]">
                  1. Purpose and Legal Basis
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed mt-5">
                  Welyft collects and processes personal information to provide
                  end-mile transportation services, package tracking, delivery
                  fulfilment, and logistics operations.
                </p>
              </div>

             

              <div className="border-l-4 border-yellow-400 pl-6">
                <h2 className="text-3xl font-bold text-[#0A1F44]">
                  2. Information We Collect
                </h2>

                <ul className="list-disc pl-6 text-gray-600 text-lg leading-relaxed mt-5 space-y-3">
                  <li>Name, mobile number, and email address</li>

                  <li>Delivery addresses and recipient details</li>

                  <li>GPS and location information</li>

                  <li>Device and browser information</li>

                  <li>Proof of delivery and timestamps</li>
                </ul>
              </div>

              {/* SECTION */}

              <div className="border-l-4 border-yellow-400 pl-6">
                <h2 className="text-3xl font-bold text-[#0A1F44]">
                  3. How We Share Information
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed mt-5">
                  We do not sell personal information. Data may be shared with
                  logistics partners, cloud providers, and legal authorities
                  where required.
                </p>
              </div>

              {/* SECTION */}

              <div className="border-l-4 border-yellow-400 pl-6">
                <h2 className="text-3xl font-bold text-[#0A1F44]">
                  4. Data Security
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed mt-5">
                 We implement appropriate technical and organisational measures—such as encryption and access 
controls—to prevent unauthorised access, loss, or destruction of your personal information. These 
measures conform to Singapore industry standards and PDPA requirements.
                </p>
              </div>

              <div className="border-l-4 border-yellow-400 pl-6">
                <h2 className="text-3xl font-bold text-[#0A1F44]">
                  5. Retention of Information
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed mt-5">
                 We retain personal information only for as long as necessary to fulfill the delivery service and for 
legal or business purposes (e.g., resolving claims or tax audits). In Singapore, this is typically for a 
period of 7 years in accordance with standard limitation periods for contract claims. 
                </p>
              </div>

              <div className="border-l-4 border-yellow-400 pl-6">
                <h2 className="text-3xl font-bold text-[#0A1F44]">
                  6. Your Rights
                </h2>

                <ul className="list-disc pl-6 text-gray-600 text-lg leading-relaxed mt-5 space-y-3">
                  <li>Request access to your personal information</li>

                  <li>Correct inaccurate or outdated data</li>

                  <li>Withdraw consent for data processing</li>

                  <li>Request deletion of personal information</li>
                </ul>
              </div>

              <div className="border-l-4 border-yellow-400 pl-6">
                <h2 className="text-3xl font-bold text-[#0A1F44]">
                  7. International Transfers
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed mt-5">
                  As Welyft utilizes global cloud infrastructure, your data may be stored outside of Singapore. We 
ensure that any such transfer provides a standard of protection to the personal data so transferred 
that is comparable to the protection under the PDPA. 
                </p>
              </div>


              <div className="border-l-4 border-yellow-400 pl-6">
                <h2 className="text-3xl font-bold text-[#0A1F44]">
                  8. Children
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed mt-5">
                  Welyft services are not intended for individuals under the age
                  of 13, and we do not knowingly collect personal information
                  from minors.
                </p>
              </div>

              <div className="border-l-4 border-yellow-400 pl-6">
                <h2 className="text-3xl font-bold text-[#0A1F44]">
                  9. Contact Us
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed mt-5">
                  Welyft Pte. Ltd.
                  <br />
                  info@welyft.org
                  <br />
                  Singapore
                </p>
              </div>

              <div className="border-l-4 border-yellow-400 pl-6">
                <h2 className="text-3xl font-bold text-[#0A1F44]">
                  10.Changes Policy Updates
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed mt-5">
                  We may update this policy periodically to reflect changes in our services or Singapore law.  
                </p>
              </div>                      
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default PrivacyPolicy;
