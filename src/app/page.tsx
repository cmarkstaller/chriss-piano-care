"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative w-full scroll-smooth">
      {/* Background Image for Landing Section */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/piano-tuning-grand.jpg"
          alt="Warm piano in a cozy room"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Fixed Header with Links */}
      <header className="fixed top-0 left-0 w-full bg-[#5c4033]/90 text-white z-20 shadow-lg">
        <nav className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Chris&apos;s Piano Care</h1>
          <div className="space-x-4 text-sm sm:text-base">
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
        </nav>
      </header>

      {/* Landing Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center text-white px-4">
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
        className="bg-[#fdfaf6] text-gray-800 py-16 px-6 scroll-mt-24"
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Photo */}
          <div className="w-full md:w-1/2 max-w-sm">
            <img
              src="/images/guy-in-polo.jpg"
              alt="Chris smiling at a piano"
              className="rounded-xl shadow-md w-full object-cover"
            />
          </div>

          {/* Text */}
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

      <div className="w-full bg-[#fdfaf6] flex justify-center">
        <div className="h-px w-[90%] max-w-5xl bg-gray-300" />
      </div>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="bg-white text-gray-800 py-16 px-6 scroll-mt-24"
      >
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-bold">Pricing</h2>
          <ul className="mt-6 space-y-4 text-lg">
            <li>
              <strong>Standard Tuning</strong> – <span>$100</span>
            </li>
            <li>
              <strong>Pitch Raise + Tuning</strong> - <span>$150</span>
            </li>
            <li>
              <strong>Minor Repairs</strong> - <span>Priced on inspection</span>
            </li>
          </ul>
        </div>
      </section>

      <div className="w-full bg-[#fdfaf6] flex justify-center">
        <div className="h-px w-[90%] max-w-5xl bg-gray-300" />
      </div>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-[#fdfaf6] text-gray-800 py-16 px-6 scroll-mt-24"
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
              <strong>Based in:</strong> Provo Utah
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
