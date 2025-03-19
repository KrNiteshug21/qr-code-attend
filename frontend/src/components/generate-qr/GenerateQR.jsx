"use client";

import { useState } from "react";

export default function GenerateQR() {
  const [formData, setFormData] = useState({
    sessionName: "",
    description: "",
    date: "",
    startTime: "",
    endTime: "",
    location: "",
    capacity: "",
  });

  const [qrGenerated, setQrGenerated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setQrGenerated(true);
    setIsLoading(false);
  };

  const handleDownload = () => {
    // In a real app, this would download the QR code image
    alert("QR Code downloaded successfully!");
  };

  const handleShare = () => {
    // In a real app, this would open a share dialog
    alert("Share dialog would open here");
  };

  return (
    <>
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">
            Generate QR Code
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Create a new attendance session and generate a QR code for
            participants to scan.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-6">
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 sm:p-6">
              {!qrGenerated ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-4">
                      <label
                        htmlFor="sessionName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Session Name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="sessionName"
                          id="sessionName"
                          required
                          value={formData.sessionName}
                          onChange={handleChange}
                          className="input-field"
                          placeholder="e.g. Morning Class, Team Meeting"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-6">
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Description
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="description"
                          name="description"
                          rows={3}
                          value={formData.description}
                          onChange={handleChange}
                          className="input-field"
                          placeholder="Brief description of the session"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="date"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Date
                      </label>
                      <div className="mt-1">
                        <input
                          type="date"
                          name="date"
                          id="date"
                          required
                          value={formData.date}
                          onChange={handleChange}
                          className="input-field"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="startTime"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Start Time
                      </label>
                      <div className="mt-1">
                        <input
                          type="time"
                          name="startTime"
                          id="startTime"
                          required
                          value={formData.startTime}
                          onChange={handleChange}
                          className="input-field"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="endTime"
                        className="block text-sm font-medium text-gray-700"
                      >
                        End Time
                      </label>
                      <div className="mt-1">
                        <input
                          type="time"
                          name="endTime"
                          id="endTime"
                          required
                          value={formData.endTime}
                          onChange={handleChange}
                          className="input-field"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-4">
                      <label
                        htmlFor="location"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Location
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="location"
                          id="location"
                          value={formData.location}
                          onChange={handleChange}
                          className="input-field"
                          placeholder="e.g. Room 101, Conference Hall"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="capacity"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Expected Capacity
                      </label>
                      <div className="mt-1">
                        <input
                          type="number"
                          name="capacity"
                          id="capacity"
                          min="1"
                          value={formData.capacity}
                          onChange={handleChange}
                          className="input-field"
                          placeholder="Number of participants"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-5">
                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoading ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Generating...
                          </>
                        ) : (
                          "Generate QR Code"
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              ) : (
                <div className="flex flex-col items-center">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    QR Code Generated Successfully!
                  </h2>
                  <div className="bg-gray-100 p-8 rounded-lg mb-6">
                    <img
                      src="/placeholder.svg?height=200&width=200"
                      alt="QR Code"
                      width={200}
                      height={200}
                      className="mx-auto"
                    />
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 w-full">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-blue-700">
                          This QR code is valid for the session:{" "}
                          <strong>{formData.sessionName}</strong> on{" "}
                          <strong>{formData.date}</strong> from{" "}
                          <strong>{formData.startTime}</strong> to{" "}
                          <strong>{formData.endTime}</strong>.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={handleDownload}
                      className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <svg
                        className="-ml-1 mr-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Download QR Code
                    </button>
                    <button
                      type="button"
                      onClick={handleShare}
                      className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <svg
                        className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                      </svg>
                      Share QR Code
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => setQrGenerated(false)}
                    className="mt-8 text-sm font-medium text-blue-600 hover:text-blue-500"
                  >
                    Generate another QR code
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
