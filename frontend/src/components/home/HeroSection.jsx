import React from "react";
import { Link } from "react-router-dom";
import SectionWrapper from "../SectionWrapper";

const HeroSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <SectionWrapper>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              Streamline Attendance Tracking with QR Codes
            </h2>
            <p className="text-lg text-gray-600">
              QRCodeAttend makes it easy to track attendance in educational
              institutions, corporate offices, and events without manual
              sign-ins or proxy submissions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register" className="btn-primary text-center">
                Get Started
              </Link>
              <Link to="#features" className="btn-outline text-center">
                Learn More
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="/placeholder.svg?height=400&width=500"
              alt="QR Code Attendance"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default HeroSection;
