import React, { useState } from "react";
import SectionWrapper from "../SectionWrapper";
import { href, Link, redirect } from "react-router-dom";

const QRCodeIcon = ({}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-blue-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
      />
    </svg>
  );
};

const CameraIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-green-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
};

const ReportIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-purple-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  );
};

const features = [
  {
    title: "QR Code Generation",
    description:
      "Generate unique QR codes for each session or event to ensure secure attendance tracking.",
    icon: <QRCodeIcon />,
    href: "/generate",
    redirectTitle: "Generate QR Code",
  },
  {
    title: "Quick Scanning",
    description:
      "Scan QR codes instantly with any mobile device to record attendance in real-time.",
    icon: <CameraIcon />,
    href: "/scan",
    redirectTitle: "Scan QR Code",
  },
  {
    title: "Detailed Reports",
    description:
      "Access comprehensive attendance reports and analytics to track participation trends.",
    icon: <ReportIcon />,
    href: "/dashboard",
    redirectTitle: "Dashboard",
  },
];

const FeatureItem = ({ feature }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="card relative z-0">
      <Link
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="absolute inset-0 z-10"
        to={feature.href}
      ></Link>
      {isHovered && (
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-max p-4 z-20 bg-gray-200 text-black flex items-center justify-center rounded-lg">
          <p className="font-semibold">
            Click to go to {feature.redirectTitle} page
          </p>
          <div className="w-4 h-4 bg-gray-200 rotate-45 rounded absolute -top-1 z-10" />
        </div>
      )}
      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
        {feature.icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-16 bg-white">
      <SectionWrapper>
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureItem key={index} feature={feature} />
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Features;
