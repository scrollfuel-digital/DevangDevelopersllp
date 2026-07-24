import brochure from "../assets/brochure.pdf";

export default function RiddhiSiddhi() {
  return (
    <div className="min-h-screen bg-transparent pt-20 px-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-serif text-[#173629] mb-8">
          Riddhi Siddhi Project
        </h1>

        <a
          href={brochure}
          download
          className="inline-flex rounded-xl bg-[#173629] px-8 py-4 text-white font-medium transition hover:bg-[#0d261b]"
        >
          Download Brochure
        </a>

      </div>

    </div>
  );
}