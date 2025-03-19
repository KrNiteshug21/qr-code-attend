import { useState } from "react";
import Header from "../Header";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("sessions");

  // Sample data for reports
  const sessions = [
    {
      id: 1,
      name: "Morning Class",
      date: "2023-05-15",
      attendees: 42,
      total: 50,
      rate: "84%",
    },
    {
      id: 2,
      name: "Team Meeting",
      date: "2023-05-14",
      attendees: 12,
      total: 15,
      rate: "80%",
    },
    {
      id: 3,
      name: "Workshop",
      date: "2023-05-12",
      attendees: 28,
      total: 30,
      rate: "93%",
    },
    {
      id: 4,
      name: "Conference",
      date: "2023-05-10",
      attendees: 156,
      total: 200,
      rate: "78%",
    },
    {
      id: 5,
      name: "Evening Class",
      date: "2023-05-08",
      attendees: 38,
      total: 45,
      rate: "84%",
    },
    {
      id: 6,
      name: "Department Meeting",
      date: "2023-05-05",
      attendees: 22,
      total: 25,
      rate: "88%",
    },
    {
      id: 7,
      name: "Training Session",
      date: "2023-05-03",
      attendees: 18,
      total: 20,
      rate: "90%",
    },
    {
      id: 8,
      name: "Seminar",
      date: "2023-05-01",
      attendees: 75,
      total: 100,
      rate: "75%",
    },
  ];

  const participants = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      sessions: 8,
      rate: "100%",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      sessions: 7,
      rate: "88%",
    },
    {
      id: 3,
      name: "Robert Johnson",
      email: "robert.j@example.com",
      sessions: 6,
      rate: "75%",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.d@example.com",
      sessions: 8,
      rate: "100%",
    },
    {
      id: 5,
      name: "Michael Wilson",
      email: "michael.w@example.com",
      sessions: 5,
      rate: "63%",
    },
    {
      id: 6,
      name: "Sarah Brown",
      email: "sarah.b@example.com",
      sessions: 7,
      rate: "88%",
    },
    {
      id: 7,
      name: "David Miller",
      email: "david.m@example.com",
      sessions: 4,
      rate: "50%",
    },
    {
      id: 8,
      name: "Lisa Taylor",
      email: "lisa.t@example.com",
      sessions: 8,
      rate: "100%",
    },
  ];

  return (
    <>
      <Header title="Dashboard" />
      <div className="py-6">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">
            Attendance Reports
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            View and analyze attendance data for all sessions and participants.
          </p>
        </div>

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 mt-6">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              <button
                onClick={() => setActiveTab("sessions")}
                className={`${
                  activeTab === "sessions"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Sessions
              </button>
              <button
                onClick={() => setActiveTab("participants")}
                className={`${
                  activeTab === "participants"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Participants
              </button>
              <button
                onClick={() => setActiveTab("analytics")}
                className={`${
                  activeTab === "analytics"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Analytics
              </button>
            </nav>
          </div>

          {/* Sessions Tab */}
          {activeTab === "sessions" && (
            <div className="mt-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-gray-900">
                  All Sessions
                </h2>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search sessions..."
                      className="input-field py-1 pl-8 pr-4"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        className="h-4 w-4 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  {/* <button className="btn-outline py-1">Export CSV</button> */}
                </div>
              </div>

              <div className="bg-white shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Session Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Attendees
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Attendance Rate
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {sessions.map((session) => (
                      <tr key={session.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {session.name}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            {session.date}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {session.attendees} / {session.total}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {session.rate}
                          </div>
                        </td>
                        {/* <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a
                            href="#"
                            className="text-blue-600 hover:text-blue-900"
                          >
                            View
                          </a>
                        </td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to{" "}
                  <span className="font-medium">8</span> of{" "}
                  <span className="font-medium">8</span> results
                </div>
                <div className="flex-1 flex justify-end">
                  <nav
                    className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                    aria-label="Pagination"
                  >
                    <a
                      href="#"
                      className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                      <span className="sr-only">Previous</span>
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      aria-current="page"
                      className="z-10 bg-blue-50 border-blue-500 text-blue-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    >
                      1
                    </a>
                    <a
                      href="#"
                      className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                      <span className="sr-only">Next</span>
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          )}

          {/* Participants Tab */}
          {activeTab === "participants" && (
            <div className="mt-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-gray-900">
                  All Participants
                </h2>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search participants..."
                      className="input-field py-1 pl-8 pr-4"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        className="h-4 w-4 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <button className="btn-outline py-1">Export CSV</button>
                </div>
              </div>

              <div className="bg-white shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Sessions Attended
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Attendance Rate
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {participants.map((participant) => (
                      <tr key={participant.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {participant.name}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            {participant.email}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {participant.sessions} / 8
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {participant.rate}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a
                            href="#"
                            className="text-blue-600 hover:text-blue-900"
                          >
                            View
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to{" "}
                  <span className="font-medium">8</span> of{" "}
                  <span className="font-medium">8</span> results
                </div>
                <div className="flex-1 flex justify-end">
                  <nav
                    className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                    aria-label="Pagination"
                  >
                    <a
                      href="#"
                      className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                      <span className="sr-only">Previous</span>
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      aria-current="page"
                      className="z-10 bg-blue-50 border-blue-500 text-blue-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    >
                      1
                    </a>
                    <a
                      href="#"
                      className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                      <span className="sr-only">Next</span>
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === "analytics" && (
            <div className="mt-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-gray-900">
                  Attendance Analytics
                </h2>
                <div>
                  <select className="input-field py-1">
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>Last 3 months</option>
                    <option>Last 6 months</option>
                    <option>Last year</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Average Attendance Rate
                      </dt>
                      <dd className="mt-1 text-3xl font-semibold text-gray-900">
                        84%
                      </dd>
                    </dl>
                    <div className="mt-4">
                      <div className="relative pt-1">
                        <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                          <div
                            style={{ width: "84%" }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Total Sessions
                      </dt>
                      <dd className="mt-1 text-3xl font-semibold text-gray-900">
                        24
                      </dd>
                    </dl>
                    <div className="mt-4 text-sm text-gray-500">
                      <span className="text-green-600 font-medium">↑ 12%</span>{" "}
                      from previous period
                    </div>
                  </div>
                </div>

                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Total Participants
                      </dt>
                      <dd className="mt-1 text-3xl font-semibold text-gray-900">
                        156
                      </dd>
                    </dl>
                    <div className="mt-4 text-sm text-gray-500">
                      <span className="text-green-600 font-medium">↑ 8%</span>{" "}
                      from previous period
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2">
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Attendance Trends
                    </h3>
                    <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                      <p className="text-gray-500">
                        Chart placeholder - Attendance over time
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Session Comparison
                    </h3>
                    <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                      <p className="text-gray-500">
                        Chart placeholder - Attendance by session
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Top Performers
                  </h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {participants.slice(0, 4).map((participant) => (
                      <div
                        key={participant.id}
                        className="border rounded-lg p-4"
                      >
                        <div className="font-medium text-gray-900">
                          {participant.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {participant.email}
                        </div>
                        <div className="mt-2 text-sm">
                          <span className="font-medium text-gray-900">
                            {participant.rate}
                          </span>{" "}
                          attendance rate
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
