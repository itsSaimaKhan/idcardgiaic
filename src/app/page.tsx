import React from "react";
import Image from "next/image";

export default function IDCard() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex-grow flex flex-col items-center justify-center p-6">
        {/* Row of Top Cards */}
        <div className="flex space-x-6 mb-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-sky-300 relative w-[600px] h-[350px]">
            {/* Background Image */}
            <div className="absolute inset-0 flex justify-center items-center">
              <Image
                src="/images/governor pic.png"
                alt="background image"
                width={400}
                height={400}
                objectFit="cover"
                className="opacity-10 rounded-lg"
              />
            </div>

            {/* Logo at Top Left */}
            <div className="absolute top-4 left-4">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={50}
                height={50}
              />
            </div>

            {/* Profile Picture at Top Right */}
            <div className="absolute top-4 right-4">
              <Image
                src="/images/images id.jpeg"
                alt="profile picture"
                width={120}
                height={120}
                className="rounded-lg border-2 border-sky-300"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-start h-full pt-16 px-4">
              <div className="flex-grow text-left text-sm">
                <p className="mb-2">
                  <span className="font-bold text-sky-500">Name:</span>{" "}
                  <span className="text-black">Saima Khan</span>
                </p>
                <p className="mb-2">
                  <span className="font-bold text-sky-500">Roll No:</span>{" "}
                  <span className="text-black">00051286</span>
                </p>
                <p className="mb-2">
                  <span className="font-bold text-sky-500">City:</span>{" "}
                  <span className="text-black">Karachi</span>
                </p>
                <p className="mb-2">
                  <span className="font-bold text-sky-500">Campus:</span>{" "}
                  <span className="text-black">Main</span>
                </p>
                <p className="mb-2">
                  <span className="font-bold text-sky-500">Days/Time:</span>{" "}
                  <span className="text-black">
                    Monday, 02:00PM - 05:00PM
                  </span>
                </p>
                <p className="mb-2">
                  <span className="font-bold text-sky-500">Batch:</span>{" "}
                  <span className="text-black">1</span>
                </p>
              </div>
            </div>

            {/* Authorized Signature */}
            <div className="absolute bottom-4 right-4 text-center">
              <p className="border-t-2 border-slate-400 pt-2 font-bold text-sky-500">
                Authorized Signature
              </p>
            </div>

            {/* Box with "Q2" */}
            <div className="absolute bottom-0 left-0 bg-gray-500 text-white py-2 px-20 rounded-bl-lg border-t-2 border-l-2 border-gray-600">
              <p className="font-bold">Q2</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-sky-300 relative w-[600px] h-[350px]">
            {/* Background Image */}
            <div className="absolute inset-0 flex justify-center items-center">
              <Image
                src="/images/governor pic.png"
                alt="background image"
                width={400}
                height={400}
                objectFit="cover"
                className="opacity-10 rounded-lg"
              />
            </div>

            {/* Logo at Top Left */}
            <div className="absolute top-4 left-4">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={50}
                height={50}
              />
            </div>

            {/* Profile Picture at Top Right */}
            <div className="absolute top-4 right-4">
              <Image
                src="/images/id2.jpeg"
                alt="profile picture"
                width={120}
                height={120}
                className="rounded-lg border-2 border-sky-300"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-start h-full pt-16 px-4">
              <div className="flex-grow text-left text-sm">
                <p className="mb-2">
                  <span className="font-bold text-sky-500">Name:</span>{" "}
                  <span className="text-black">Ayesha</span>
                </p>
                <p className="mb-2">
                  <span className="font-bold text-sky-500">Roll No:</span>{" "}
                  <span className="text-black">00001748</span>
                </p>
                <p className="mb-2">
                  <span className="font-bold text-sky-500">City:</span>{" "}
                  <span className="text-black">Karachi</span>
                </p>
                <p className="mb-2">
                  <span className="font-bold text-sky-500">Campus:</span>{" "}
                  <span className="text-black">Main</span>
                </p>
                <p className="mb-2">
                  <span className="font-bold text-sky-500">Days/Time:</span>{" "}
                  <span className="text-black">
                    Wednesday, 09:00AM - 12:00PM
                  </span>
                </p>
                <p className="mb-2">
                  <span className="font-bold text-sky-500">Batch:</span>{" "}
                  <span className="text-black">1</span>
                </p>
              </div>
            </div>

            {/* Authorized Signature */}
            <div className="absolute bottom-4 right-4 text-center">
              <p className="border-t-2 border-slate-400 pt-2 font-bold text-sky-500">
                Authorized Signature
              </p>
            </div>

            {/* Box with "Q2" */}
            <div className="absolute bottom-0 left-0 bg-gray-500 text-white py-2 px-20 rounded-bl-lg border-t-2 border-l-2 border-gray-600">
              <p className="font-bold">Q2</p>
            </div>
          </div>
        </div>

        {/* Third Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-sky-300 relative w-[600px] h-[350px]">
          {/* Background Image */}
          <div className="absolute inset-0 flex  justify-center items-center">
            <Image
              src="/images/governor pic.png"
              alt="background image"
              width={400}
              height={400}
              objectFit="cover"
              className="opacity-10 rounded-lg"
            />
          </div>

          {/* Logo at Top Left */}
          <div className="absolute top-4 left-4">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={50}
              height={50}
            />
          </div>

          {/* Profile Picture at Top Right */}
          <div className="absolute top-4 right-4">
            <Image
              src="/images/images id3.jpeg" // Replace with appropriate image
              alt="profile picture"
              width={120}
              height={120}
              className="rounded-lg border-2 border-sky-300"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-start h-full pt-16 px-4">
            <div className="flex-grow text-left text-sm">
              <p className="mb-2">
                <span className="font-bold text-sky-500">Name:</span>{" "}
                <span className="text-black">Iqra</span>
              </p>
              <p className="mb-2">
                <span className="font-bold text-sky-500">Roll No:</span>{" "}
                <span className="text-black">00001749</span>
              </p>
              <p className="mb-2">
                <span className="font-bold text-sky-500">City:</span>{" "}
                <span className="text-black">Karachi</span>
              </p>
              <p className="mb-2">
                <span className="font-bold text-sky-500">Campus:</span>{" "}
                <span className="text-black">Main</span>
              </p>
              <p className="mb-2">
                <span className="font-bold text-sky-500">Days/Time:</span>{" "}
                <span className="text-black">Friday, 10:00AM - 01:00PM</span>
              </p>
              <p className="mb-2">
                <span className="font-bold text-sky-500">Batch:</span>{" "}
                <span className="text-black">1</span>
              </p>
            </div>
          </div>

          {/* Authorized Signature */}
          <div className="absolute bottom-4 right-4 text-center">
            <p className="border-t-2 border-slate-400 pt-2 font-bold text-sky-500">
              Authorized Signature
            </p>
          </div>

          {/* Box with "Q3" */}
          <div className="absolute bottom-0 left-0 bg-gray-500 text-white py-2 px-20 rounded-bl-lg border-t-2 border-l-2 border-gray-600">
            <p className="font-bold">Q3</p>
          </div>
        </div>
      </div>
    </div>
  );
}
