"use client";
import Image from "next/image";
import React, { useState } from "react";

const HelpContact = () => {
  const notificationCount = 24;
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end space-y-2">
      {isOpen ? (
        <div className="bg-white rounded-[10px] shadow-lg w-[375px] mb-2 overflow-hidden">
          <div className="flex items-center p-2 space-x-3 bg-[#25D366]">
            <div className="pl-6 pb-8">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.867-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </div>
            <div className=" text-white p-3 leading-[25px] text-start ">
              <p className="text-[32px] font-bold">Start a Conversation</p>
              <p className="text-[20px] font-light mt-2">
                Feel free to ask any questions on
              </p>
              <p className="mb-2 text-[20px] font-light">WhatsApp</p>
            </div>
          </div>
          <div className="p-3 text-sm text-gray-700">
            <p className="text-[18px] tracking-[0.6px] py-3 text-gray-400">
              Team replies in a minute
            </p>

            <a
              href="https://wa.me/923316566200?text=Hello%20I%20need%20some%20help
"
              className="bg-gray-100 p-2 flex justify-between items-center gap-5 rounded mb-3"
            >
              <div className="flex items-center justify-between gap-4 bg-white rounded-xl shadow px-4 py-3 w-full max-w-sm">
                {/* SVG Avatar and Text */}
                <div className="flex gap-4 items-center">
                  {/* Default User Avatar */}
                  <div className="w-[50px] h-[50px] bg-gray-200 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="text-gray-600"
                    >
                      <path d="M12 2C6.486 2 2 6.486 2 12c0 1.917.546 3.704 1.48 5.215L2 22l4.785-1.48A9.956 9.956 0 0 0 12 22c5.514 0 10-4.486 10-10S17.514 2 12 2zm0 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 14c-2.5 0-4.71-1.28-6.065-3.243.034-2.002 4.063-3.107 6.065-3.107s6.031 1.105 6.065 3.107C16.71 17.72 14.5 19 12 19z" />
                    </svg>
                  </div>

                  <div>
                    <p className="font-bold text-lg text-[#0b6d76]">
                      UAN WhatsApp
                    </p>
                    <p className="text-lg text-gray-500">
                      Open For WhatsApp Chat
                    </p>
                  </div>
                </div>

                {/* Chat Us Button */}
                <button className="flex items-center gap-2 text-white bg-[#25D366] hover:bg-[#1eb954] px-4 py-2 text-lg cursor-pointer rounded-full transition">
                  Chat Now
                </button>
              </div>
            </a>
          </div>
        </div>
      ) : (
        <span className="bg-white border border-gray-400 fixed bottom-[90px] font-serif right-16 text-black text-[12px] font-bold rounded-[8px] px-2 py-2 drop-shadow-lg z-50">
          How may I help you?
        </span>
      )}

      <button
        onClick={toggleChat}
        className="relative bg-green-500 cursor-pointer hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-110"
      >
        {notificationCount > 0 && (
          <span className="absolute top-0 left-0 -mt-1 -mr-1 bg-red-600 text-white text-[14px] font-bold rounded-full w-6 h-6 flex items-center justify-center">
            {notificationCount}
          </span>
        )}

        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M18 6L6 18M6 6l12 12"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.867-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default HelpContact;
