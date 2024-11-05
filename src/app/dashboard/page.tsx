'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Component() {
  const [activePage] = useState('Dashboard');

  const navItems = [
    { name: 'Dashboard', icon: '/Home.svg' },
    { name: 'Database', icon: '/Form.svg' },
    { name: 'QR Code', icon: '/Calendar.svg' },
    { name: 'Files', icon: '/Multi Folder.svg' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-64 h-full fixed bg-white top-0 left-0 text-white p-6 shadow-md shadow-gray-200 z-50 overflow-y-auto">
        {/* Sokrab Title in Sidebar */}
        <div className="flex items-center justify-center mb-8">
          <Image src="/logo.svg" width={200} height={200} alt="logo" />
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href="#"
              className={`flex items-center gap-3 px-4 py-4 rounded-md ${
                activePage === item.name
                  ? 'bg-[#29475A] text-[#8dc63f]'
                  : 'hover:bg-[#435b71] hover:text-white text-black '
              }`}
            >
              <Image 
                src={item.icon} 
                alt={item.name} 
                width={24} 
                height={24}
                className={activePage === item.name ? 'text-[#7db32f]' : ''}
                style={activePage === item.name ? { filter: 'invert(72%) sepia(41%) saturate(472%) hue-rotate(39deg) brightness(95%) contrast(87%)' } : {}}
              />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
        <div className="mt-40 pt-20 p-8 shadow-gray-300 shadow-lg">
          <p className="text-sm text-black mb-4">Facing an issue?</p>
          <button className="w-full bg-[#8dc63f] text-[#435b71] py-4 font-semibold px-4 hover:bg-[#7db32f]">
            Tech Support
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="ml-64">
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
        <main className="flex-1 p-8">
          <h1
            className="text-xl font-medium text-[#8dc63f] mb-8 underline"
            style={{
              textUnderlineOffset: '6px',
              textDecorationThickness: '1px',
            }}
          >
            Dashboard Overview
          </h1>

          <div className="flex gap-8">
            {/* Progress Bars Section */}
            <div className="flex-1 grid gap-8">
              {/* Organizations Database Card */}
              <div className="bg-[#2d4356] rounded-lg p-6 text-white">
                <div className="flex flex-col gap-3 mb-4">
                  <Image 
                    src="/Form.svg" 
                    alt="Database" 
                    width={24} 
                    height={24} 
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                  <h2 className="text-lg font-medium">Organizations Database</h2>
                </div>
                <div className="w-full bg-[#435b71] rounded-full h-2 mb-4">
                  <div className="bg-[#8dc63f] h-2 rounded-full w-3/4"></div>
                </div>
                <p className="text-right text-[#8dc63f]">124 Registered</p>
              </div>

              {/* Uploaded Files Card */}
              <div className="bg-[#2d4356] rounded-lg p-6 text-white">
                <div className="flex flex-col gap-3 mb-4">
                  <Image 
                    src="/Multi Folder.svg" 
                    alt="Files" 
                    width={24} 
                    height={24}
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                  <h2 className="text-lg font-medium">Uploaded Files</h2>
                </div>
                <div className="w-full bg-[#435b71] rounded-full h-2 mb-4">
                  <div className="bg-[#8dc63f] h-2 rounded-full w-1/2"></div>
                </div>
                <p className="text-right text-[#8dc63f]">56 Documents</p>
              </div>
            </div>

            {/* QR Code Section */}
            <div className="w-80">
              <div className="border-4 border-[#435b71] rounded-lg p-6">
                <Image
                  src="/qrcode.svg"
                  alt="QR Code"
                  width={400}
                  height={400}
                  className="mx-auto mb-4"
                />
                <p className="text-center text-sm text-gray-600">
                  October 10 · 4:00PM
                </p>
                <p className="text-center text-xs text-gray-400">
                  Last time you logged in
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}