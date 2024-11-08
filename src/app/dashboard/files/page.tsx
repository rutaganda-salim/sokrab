"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

// Sample data for files
const files = [
  {
    id: 1,
    name: "File Name",
    dateUploaded: "Date uploaded",
  },
  {
    id: 2,
    name: "File Name",
    dateUploaded: "Date uploaded",
  },
  {
    id: 3,
    name: "File Name",
    dateUploaded: "Date uploaded",
  },
  {
    id: 4,
    name: "File Name",
    dateUploaded: "Date uploaded",
  },
]

export default function Component() {
  const [activePage, setActivePage] = useState("Files")
  const [activeTab, setActiveTab] = useState("Organization Files")

  const navItems = [
    { name: 'Dashboard', icon: '/Home.svg',  link: '/dashboard' },
    { name: 'Database', icon: '/Form.svg',  link: '/dashboard/database' },
    { name: 'QR Code', icon: '/Calendar.svg',  link: '/dashboard/qrcode' },
    { name: 'Files', icon: '/Multi Folder.svg',  link: '/dashboard/files' },
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-50 h-full w-64 bg-white p-6 shadow-md">
        <div className="mb-8 flex items-center justify-center">
        <Image src="/logo.svg" width={200} height={200} alt="Sokrab"  />
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              onClick={() => setActivePage(item.name)}
              className={`flex items-center gap-3 rounded-md px-4 py-3 transition-all duration-300 ${
                activePage === item.name
                  ? "bg-[#29475A] text-[#8dc63f] shadow-md"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Image
                src={item.icon}
                alt={item.name}
                width={20}
                height={20}
                className={`h-5 w-5 ${activePage === item.name ? "brightness-0 invert" : ""}`}
              />
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-8 pt-20 left-6 right-6 rounded-lg bg-white p-6 shadow-lg">
          <p className="mb-4 ">Facing an issue?</p>
          <button className="w-full bg-[#83B657] py-4  font-medium text-[#29475A] transition-colors hover:bg-[#7db32f]">
            Tech Support
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 pl-64 bg-white">
      <header className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-end items-center">
            <div className="flex items-end flex-col mr-4 ">
              <span className="text-lg font-normal text-black">
                Welcome <strong>Marlene</strong>
              </span>
              <Link href="/logout" className="text-[#8dc63f] underline">
                Logout
              </Link>
            </div>
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="/Avatar.svg"
                alt="Profile"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
          </div>
        </header>

        <main className="p-6">
          <div className="mb-6 flex items-center space-x-4">
            <button
              onClick={() => setActiveTab("Organization Files")}
              className={`text-lg font-semibold transition-colors ${
                activeTab === "Organization Files"
                  ? "text-[#8dc63f] underline decoration-2 underline-offset-8"
                  : "text-gray-600 hover:text-[#8dc63f]"
              }`}
            >
              Organization Files
            </button>
            <button
              onClick={() => setActiveTab("Clients Files")}
              className={`text-lg font-semibold transition-colors ${
                activeTab === "Clients Files"
                  ? "text-[#8dc63f] underline decoration-2 underline-offset-8"
                  : "text-gray-600 hover:text-[#8dc63f]"
              }`}
            >
              Clients Files
            </button>
            <button
              onClick={() => setActiveTab("Add file")}
              className={`text-lg font-semibold transition-colors ${
                activeTab === "Add file"
                  ? "text-[#8dc63f] underline decoration-2 underline-offset-8"
                  : "text-gray-600 hover:text-[#8dc63f]"
              }`}
            >
              Add file
            </button>
          </div>

          {(activeTab === "Organization Files" || activeTab === "Clients Files") && (
            <div className="grid gap-4">
              {files.map((file) => (
                <div
                  key={file.id}
                  className="flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-4 transition-shadow hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                    ludi
                  </div>
                  <div className="flex flex-1 items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">{file.name}</h3>
                      <p className="text-sm text-gray-500">{file.dateUploaded}</p>
                    </div>
                    <button className="rounded-md border border-gray-200 px-3 py-1 text-sm font-medium text-gray-600 hover:bg-gray-50">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "Add file" && (
            <div className="w-full max-w-xl mx-auto">
              <h2 className="text-2xl font-medium text-[#29475A] mb-6">Upload file</h2>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm text-gray-600">File Name</label>
                  <input
                    type="text"
                    placeholder="Marketing Plan"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#8dc63f] focus:border-[#8dc63f]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm text-gray-600">File Type</label>
                  <input
                    type="text"
                    placeholder="Clients File"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#8dc63f] focus:border-[#8dc63f]"
                  />
                </div>

                <div className="relative rounded-lg bg-gray-50 border-2 border-dashed border-gray-300 p-8">
                  <input
                    type="file"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    accept=".doc,.xls,.png,.jpeg,.jpg"
                  />
                  <div className="text-center">
                    <svg
                      className="mx-auto w-8 h-8 text-[#8dc63f]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <p className="mt-2 text-sm text-gray-600">
                      Drag & drop picture or{" "}
                      <span className="text-[#8dc63f] cursor-pointer">Browse</span>
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      Supported formats: DOC,XSL, PNG, JPEG, JPG
                    </p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="px-12 py-2.5 bg-[#83B657] text-[#29475A] rounded-sm transition-colors"
                  >
                    Upload
                  </button>
                </div>
              </form>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}