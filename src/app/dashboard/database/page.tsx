"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

// Sample data for organizations
const organizations = [
  {
    id: 1,
    name: "Business Name",
    email: "info@sokrab.com",
    phone: "+250788888888",
    department: "Details",
  },
  {
    id: 2,
    name: "Business Name",
    email: "info@sokrab.com",
    phone: "+250788888888",
    department: "Tech",
  },
  {
    id: 3,
    name: "Business Name",
    email: "info@sokrab.com",
    phone: "+250788888888",
    department: "Finance",
  },
  {
    id: 4,
    name: "Business Name",
    email: "info@sokrab.com",
    phone: "+250788888888",
    department: "Shop",
  },
]

const getDepartmentColor = (department: string) => {
  const colors = {
    Details: "bg-blue-100 text-blue-800",
    Tech: "bg-indigo-100 text-indigo-800",
    Finance: "bg-emerald-100 text-emerald-800",
    Shop: "bg-orange-100 text-orange-800",
  }
  return colors[department as keyof typeof colors] || "bg-gray-100 text-gray-800"
}

export default function Component() {
  const [activePage, setActivePage] = useState("Database")
  const [activeTab, setActiveTab] = useState("Add new")

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

        <div className="absolute bottom-8 left-6 right-6 rounded-lg bg-white p-6 shadow-lg">
          <p className="mb-4 text-sm text-gray-600">Facing an issue?</p>
          <button className="w-full rounded bg-[#8dc63f] py-2 text-sm font-medium text-white transition-colors hover:bg-[#7db32f]">
            Tech Support
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 pl-64 bg-white">
        <header>
          <div className="flex items-center justify-end px-6 py-4">
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-end">
                <span className="text-sm text-gray-600">
                  Welcome <strong>Marlene</strong>
                </span>
                <Link href="#" className="text-sm text-[#8dc63f] hover:underline">
                  Logout
                </Link>
              </div>
              <div className="h-10 w-10 overflow-hidden rounded-full">
                <Image src="/Avatar.svg" alt="Profile" width={40} height={40} className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </header>

        <main className="p-6">
          <div className="mb-6 flex items-center space-x-4">
            <button
              onClick={() => setActiveTab("Organization")}
              className={`text-lg font-semibold transition-colors ${
                activeTab === "Organization"
                  ? "text-[#8dc63f] underline decoration-2 underline-offset-8"
                  : "text-gray-600 hover:text-[#8dc63f]"
              }`}
            >
              Organization
            </button>
            <button
              onClick={() => setActiveTab("Add new")}
              className={`text-lg font-semibold transition-colors ${
                activeTab === "Add new"
                  ? "text-[#8dc63f] underline decoration-2 underline-offset-8"
                  : "text-gray-600 hover:text-[#8dc63f]"
              }`}
            >
              Add new
            </button>
          </div>

          {activeTab === "Organization" && (
            <div className="grid gap-4">
              {organizations.map((org) => (
                <div
                  key={org.id}
                  className="flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-4 transition-shadow hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#29475A] text-lg font-bold text-white">
                    B
                  </div>
                  <div className="flex flex-1 items-center gap-4">
                    <div className="min-w-[140px]">
                      <h3 className="font-medium text-gray-900">{org.name}</h3>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>{org.email}</span>
                      <span>{org.phone}</span>
                    </div>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${getDepartmentColor(org.department)}`}
                  >
                    {org.department}
                  </span>
                </div>
              ))}
            </div>
          )}

          {activeTab === "Add new" && (
            <div className="rounded-lg bg-white p-6">
              <form className="flex gap-8">
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-blue-600 text-lg font-bold text-white">
                      ludi
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="company-name" className="block text-sm font-medium text-gray-700">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company-name"
                        name="company-name"
                        placeholder="Ludi Ltd"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-[#8dc63f] focus:outline-none focus:ring-1 focus:ring-[#8dc63f]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                        Website
                      </label>
                      <input
                        type="text"
                        id="website"
                        name="website"
                        placeholder="www.ludi.com"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-[#8dc63f] focus:outline-none focus:ring-1 focus:ring-[#8dc63f]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="business-sector" className="block text-sm font-medium text-gray-700">
                        Business Sector
                      </label>
                      <select
                        id="business-sector"
                        name="business-sector"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#8dc63f] focus:outline-none focus:ring-1 focus:ring-[#8dc63f]"
                      >
                        <option value="manufacturing">Manufacturing</option>
                        <option value="technology">Technology</option>
                        <option value="retail">Retail</option>
                        <option value="services">Services</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="office-address" className="block text-sm font-medium text-gray-700">
                        Office Address
                      </label>
                      <input
                        type="text"
                        id="office-address"
                        name="office-address"
                        placeholder="KG 123 Street"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-[#8dc63f] focus:outline-none focus:ring-1 focus:ring-[#8dc63f]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+250"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-[#8dc63f] focus:outline-none focus:ring-1 focus:ring-[#8dc63f]"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1 space-y-6">
                  <h2 className="text-lg font-medium text-gray-700">Contact Person</h2>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700">
                        Full name
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="contact-name"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-[#8dc63f] focus:outline-none focus:ring-1 focus:ring-[#8dc63f]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        name="contact-phone"
                        placeholder="+250"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-[#8dc63f] focus:outline-none focus:ring-1 focus:ring-[#8dc63f]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="position" className="block text-sm font-medium text-gray-700">
                        Position
                      </label>
                      <input
                        type="text"
                        id="position"
                        name="position"
                        placeholder="Marketing Manager"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-[#8dc63f] focus:outline-none focus:ring-1 focus:ring-[#8dc63f]"
                      />
                    </div>
                  </div>
                </div>
              </form>
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  className="rounded bg-[#8dc63f] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#7db32f]"
                >
                  Save
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}