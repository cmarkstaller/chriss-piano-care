import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-10">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-[#5c4033]">
          Chris's Piano Care
        </h1>
        <p className="mt-2 text-lg">
          Tuning pianos with precision and a personal touch.
        </p>
      </header>

      <Image
        src="/images/piano-tuning-grand.jpg"
        alt="Warm piano in a cozy room"
        width={800}
        height={500}
        className="rounded-xl shadow-md mx-auto"
      />

      <section className="text-center">
        <h2 className="text-2xl font-semibold">Serving Your Neighborhood</h2>
        <p className="mt-2 text-gray-600">
          I tune pianos for families and individuals in the [Your Town or
          County] area. Whether it's been 6 months or 6 years, I can help bring
          your piano back in tune.
        </p>
      </section>

      <section className="text-center">
        <Link
          href="/contact"
          className="inline-block bg-[#5c4033] text-white px-6 py-3 rounded-md hover:bg-[#402c22] transition"
        >
          Schedule a Tuning
        </Link>
      </section>
    </div>
  );
}
