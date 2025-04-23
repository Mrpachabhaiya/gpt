"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowPathIcon,
  PlusIcon,
  GlobeAltIcon,
  MicrophoneIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import {
  PencilIcon,
  LightBulbIcon,
  CommandLineIcon,
} from "@heroicons/react/24/solid";
import VoiceChat from "../Voice/page";
export default function Chat() {
  const [isListening, setIsListening] = useState(false);
  const [message, setMessage] = useState("");
  const [showVoiceChat, setShowVoiceChat] = useState(false);

  const handleVoiceClick = () => {
    setShowVoiceChat(true);
    setIsListening(true);
  };

  const handleVoiceChatClose = () => {
    setShowVoiceChat(false);
    setIsListening(false);
  };

  return (
    <>
      <div className="flex flex-col min-h-screen bg-[#0a0a14]">
        {/* Header */}
        <header className="glass-effect px-4 py-3 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <ArrowPathIcon className="w-6 h-6" color="#ffff" />
            </button>
            <Link href={"/"}>
              <h1 className="text-xl font-semibold flex items-center gap-1 text-[#ffff]">
                ChatGPT
                <span className="text-sm text-gray-400">4o</span>
                <span className="text-gray-400">&gt;</span>
              </h1>
            </Link>
          </div>
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <Bars3Icon className="w-6 h-6" color="#ffff" />
          </button>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center p-6">
          {/* Logo */}
          <div className="mb-8">
            <svg className="w-16 h-16 text-white/20" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
              />
              <path
                fill="currentColor"
                d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
              />
            </svg>
          </div>

          {/* Welcome Text */}
          <h2 className="text-4xl font-bold mb-3 text-[#ffff]">Hey, Mattew!</h2>
          <p className="text-gray-400 text-center max-w-md mb-12">
            Hello! I&rsquo;m here to assist you with anything you need — from
            answering questions and writing content to brainstorming ideas.
          </p>

          {/* Quick Actions */}
          <div className="flex gap-6 mb-8">
            <button className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 hover:bg-purple-500/30 transition-colors">
              <PencilIcon className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 hover:bg-orange-500/30 transition-colors">
              <LightBulbIcon className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 hover:bg-green-500/30 transition-colors">
              <CommandLineIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="w-6 h-6 text-gray-400 animate-bounce">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </main>

        {/* Input Area */}
        <div className="p-4 pb-8">
          <div className="glass-effect p-2 flex items-center gap-2 max-w-3xl mx-auto rounded-full">
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <PlusIcon className="w-6 h-6" color="#ffff" />
            </button>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Send message to ChatGPT..."
              className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-400"
            />
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <GlobeAltIcon className="w-6 h-6" color="#ffff" />
            </button>
            <button
              className={`p-2 rounded-full transition-colors ${
                isListening ? "bg-purple-600" : "hover:bg-white/10"
              }`}
              onClick={handleVoiceClick}
            >
              <MicrophoneIcon className="w-6 h-6" color="#ffff" />
            </button>
          </div>
        </div>
      </div>

      {/* Voice Chat Modal */}
      <VoiceChat isOpen={showVoiceChat} onClose={handleVoiceChatClose} />
    </>
  );
}
