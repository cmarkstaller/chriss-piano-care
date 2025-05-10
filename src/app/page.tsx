"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="relative w-full scroll-smooth">
      {/* Fixed Header with Links */}
      <header className="fixed top-0 left-0 w-full bg-[#5c4033]/90 text-white z-20 shadow-lg">
        <nav className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Chris&apos;s Piano Care</h1>

          {/* Desktop links */}
          <div className="hidden sm:flex space-x-4 text-sm sm:text-base">
            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#pricing" className="hover:underline">
              Pricing
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </div>

          {/* Hamburger button on small screens */}
          <button
            className="sm:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </nav>

        {/* Slide-down mobile menu */}
        <div
          className={`sm:hidden bg-[#5c4033] px-6 overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-40 py-4" : "max-h-0 py-0"
          }`}
        >
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="block py-1 text-sm text-white hover:underline"
          >
            About
          </a>
          <a
            href="#pricing"
            onClick={() => setMenuOpen(false)}
            className="block py-1 text-sm text-white hover:underline"
          >
            Pricing
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block py-1 text-sm text-white hover:underline"
          >
            Contact
          </a>
        </div>
      </header>

      {/* Landing Section */}
      <section className="relative h-screen w-full text-white flex flex-col justify-center items-center text-center px-4">
        <Image
          src="/images/chris-tuning-piano.jpg"
          alt="Chris tuning a piano"
          fill
          className="object-cover object-top brightness-30 -z-10"
          priority
        />
        <h2 className="text-4xl font-bold drop-shadow-md">
          Tuning Pianos with Precision and Heart
        </h2>
        <p className="mt-4 text-lg max-w-xl drop-shadow">
          Serving homes in the Provo area with personalized piano care and
          tuning.
        </p>
        <a
          href="#contact"
          className="mt-6 inline-block bg-white text-[#5c4033] font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition"
        >
          Schedule a Tuning
        </a>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="bg-[#f3eee9] text-gray-800 py-16 px-6 scroll-mt-24"
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 max-w-sm">
            <img
              src="/images/chris-portrait.jpg"
              alt="Chris smiling at a piano"
              className="rounded-xl shadow-md w-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
            <h2 className="text-3xl font-bold">About Me</h2>
            <p>
              Hi, I&apos;m Chris! I started tuning pianos because I love music,
              craftsmanship, and helping people get the most from their
              instruments. Whether you&apos;re a professional pianist or a
              hobbyist, I treat every piano with the same care and attention to
              detail.
            </p>
            <p>
              I&apos;m currently a Computer Science student at BYU, and this
              small business lets me do something I love while supporting myself
              through school. Thank you for trusting me with your instrument —
              it truly means a lot!
            </p>
          </div>
        </div>
      </section>

      <div className="w-full bg-[#f3eee9] flex justify-center">
        <div className="h-px w-[90%] max-w-5xl bg-gray-300" />
      </div>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="bg-[#f9f5f1] text-gray-800 py-16 px-6 scroll-mt-24"
      >
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-bold">Pricing</h2>
          <ul className="mt-6 space-y-4 text-lg">
            <li>
              <strong>Standard Tuning</strong> – <span>$100</span>
            </li>
            <li>
              <strong>Pitch Raise + Tuning</strong> - <span>$140</span>
            </li>
            <li>
              <strong>Minor Repairs</strong> - <span>Priced on inspection</span>
            </li>
          </ul>
        </div>
      </section>

      <div className="w-full bg-[#f3eee9] flex justify-center">
        <div className="h-px w-[90%] max-w-5xl bg-gray-300" />
      </div>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-[#f3eee9] text-gray-800 py-16 px-6 scroll-mt-24"
      >
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p>
            I&apos;d love to hear from you. Reach out anytime to schedule a
            tuning or ask a question!
          </p>
          <ul className="space-y-2">
            <li>
              <strong>Email:</strong> cmarkstaller@gmail.com
            </li>
            <li>
              <strong>Phone:</strong> (503) 462-2561
            </li>
            <li>
              <strong>Based in:</strong> Provo, Utah
            </li>
          </ul>
        </div>
      </section>

      <footer className="p-4 text-center text-sm bg-[#3f2a21] text-[#fdfaf6] border-t border-[#5c4033]">
        © {new Date().getFullYear()} Chris&apos;s Piano Care — Christopher
        Markstaller
      </footer>
    </div>
  );
}
