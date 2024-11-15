"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

// Sample data for team members
const teamMembers = [
  {
    id: 1,
    name: "Team member",
    lastLogin: "Last login date",
    department: "Department",
    avatar: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Team member",
    lastLogin: "Last login date",
    department: "Department",
    avatar: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Team member",
    lastLogin: "Last login date",
    department: "Department",
    avatar: "/placeholder.svg",
  },
]

export default function Component() {
  const [activePage, setActivePage] = useState("QR Code")
  const [activeTab, setActiveTab] = useState("Call log")

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
              onClick={() => setActiveTab("Call log")}
              className={`text-lg font-semibold transition-colors ${
                activeTab === "Call log"
                  ? "text-[#8dc63f] underline decoration-2 underline-offset-8"
                  : "text-gray-600 hover:text-[#8dc63f]"
              }`}
            >
              Call log
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-4 transition-shadow hover:shadow-md"
                >
                  <div className="h-12 w-12 overflow-hidden rounded-full">
                    <Image src={member.avatar} alt={member.name} width={48} height={48} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-1 items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">{member.name}</h3>
                      <p className="text-sm text-gray-500">{member.lastLogin}</p>
                    </div>
                    <span className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600">
                      {member.department}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-8">
              <div className="mb-4 h-64 w-64">
                <Image
                  src="/qrcode.svg"
                  alt="QR Code"
                  width={260}
                  height={460}
                  className="object-contain"
                />
              </div>
              <div className="text-center">
                <p className="font-medium text-gray-900">October 10 - 4:00PM</p>
                <p className="text-sm text-gray-500">Last time you logged in</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}