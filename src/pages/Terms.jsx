import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Terms = () => {
  return (
     <>
     <Navbar/>
    <section className="bg-gradient-to-b from-[#F5F3EE] to-[#EDEAE2] min-h-screen py-28 px-6 sm:px-10">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl sm:text-5xl font-bold text-[#0A1F44]">
          Terms of Service
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          Last Updated: 2026
        </p>

        <div className="mt-16 grid gap-8">

          {/* 1 */}
          <div>
            <h2 className="text-2xl font-bold text-[#0A1F44]">
              1. About Welyft
            </h2>

            <p className="mt-4 text-lg">
              Welyft Pte. Ltd. is a Singapore-based logistics technology
              company providing delivery management, fleet operations,
              route optimization, shipment tracking, and related logistics
              solutions for businesses and individuals.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-2xl font-bold text-[#0A1F44]">
              2. Eligibility
            </h2>

            <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
              <li>Be at least 18 years old</li>
              <li>Provide accurate information</li>
              <li>Comply with all applicable laws</li>
            </ul>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-2xl font-bold text-[#0A1F44]">
              3. Use of Services
            </h2>

            <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
              <li>Request logistics and delivery services</li>
              <li>Manage shipments and orders</li>
              <li>Track deliveries</li>
              <li>Access operational information</li>
            </ul>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-2xl font-bold text-[#0A1F44]">
              4. Delivery Services
            </h2>

            <p className="mt-4 text-lg">
              Delivery estimates may vary depending on traffic,
              weather, road closures, regulatory requirements,
              and operational conditions.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-2xl font-bold text-[#0A1F44]">
              5. User Responsibilities
            </h2>

            <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
              <li>Provide accurate sender and recipient details</li>
              <li>Package items appropriately</li>
              <li>Follow applicable laws and regulations</li>
            </ul>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-2xl font-bold text-[#0A1F44]">
              6. Prohibited Items
            </h2>

            <ul className="list-disc pl-6 mt-4 text-lg space-y-2">
              <li>Illegal substances</li>
              <li>Hazardous materials</li>
              <li>Weapons or explosives</li>
              <li>Counterfeit goods</li>
            </ul>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-2xl font-bold text-[#0A1F44]">
              7. Pricing and Payments
            </h2>

            <p className="mt-4 text-lg">
              Pricing may vary depending on distance, delivery
              requirements, vehicle type, and package specifications.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="text-2xl font-bold text-[#0A1F44]">
              8. Intellectual Property
            </h2>

            <p className="mt-4 text-lg">
              All Welyft branding, content, graphics, and platform
              materials remain the property of Welyft Pte. Ltd.
            </p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="text-2xl font-bold text-[#0A1F44]">
              9. Privacy
            </h2>

            <p className="mt-4 text-lg">
              Your use of our services is subject to our Privacy Policy.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h2 className="text-2xl font-bold text-[#0A1F44]">
              10. Limitation of Liability
            </h2>

            <p className="mt-4 text-lg">
              Welyft shall not be liable for indirect losses,
              delays, or interruptions beyond our reasonable control.
            </p>
          </div>

          {/* 11 */}
          <div>
            <h2 className="text-2xl font-bold text-[#0A1F44]">
              11. Governing Law
            </h2>

            <p className="mt-4 text-lg">
              These Terms are governed by the laws of Singapore.
            </p>
          </div>

          {/* 12 */}
          <div>
            <h2 className="text-2xl font-bold text-[#0A1F44]">
              12. Contact Us
            </h2>

            <div className="mt-4 text-lg space-y-2">
              <p>Welyft Pte. Ltd.</p>
              <p>101 Cecil Street, #18-11 Tong Eng Building
                <br />
                 Singapore 069533</p>
              <p>Email: info@welyft.org</p>
              <p>WhatsApp: +65 87600021</p>
            </div>
          </div>

        </div>
      </div>
    </section>
    <Footer/>
   </>
  );
};

export default Terms;