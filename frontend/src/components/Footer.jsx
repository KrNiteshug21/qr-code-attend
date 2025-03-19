import React from "react";
import { Link } from "react-router-dom";
import SectionWrapper from "./SectionWrapper";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <SectionWrapper>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">QRCodeAttend</h2>
            <p className="text-gray-400">
              Streamline attendance tracking with QR codes
            </p>
          </div>
          <div className="flex space-x-6">
            <Link to="#" className="text-gray-300 hover:text-white">
              Privacy Policy
            </Link>
            <Link to="#" className="text-gray-300 hover:text-white">
              Terms of Service
            </Link>
            <Link to="#" className="text-gray-300 hover:text-white">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} QRCodeAttend. All rights reserved.
          </p>
        </div>
      </SectionWrapper>
    </footer>
  );
};

export default Footer;
