export default function Gallery() {
  return (
    <div className="bg-[#8B9B80] min-h-screen py-16 px-5">
      <div className="max-w-7xl mx-auto bg-white shadow-2xl overflow-hidden">

        {/* Hero */}
        <section className="relative h-[550px] bg-gray-200">

          {/* Replace with your hero image */}
          <div className="absolute inset-0 bg-gray-300"></div>

          <div className="absolute inset-0 bg-black/30"></div>

          <div className="absolute left-12 top-1/2 -translate-y-1/2 text-white max-w-xl">

            <p className="uppercase tracking-widest text-sm mb-3">
              Welcome To Our Gallery
            </p>

            <h1 className="text-6xl font-bold leading-tight mb-6">
              MODERN
              <br />
              GALLERY DESIGN
            </h1>

            <p className="text-gray-200 mb-8 leading-7">
              Showcase your latest projects with a modern and elegant
              gallery layout.
            </p>

            <div className="flex gap-5">
              <button className="bg-[#A56737] px-8 py-3 font-semibold hover:bg-[#8b5429] transition">
                Explore
              </button>

              <button className="bg-white text-black px-8 py-3 font-semibold hover:bg-gray-200 transition">
                Learn More
              </button>
            </div>

          </div>
        </section>

        {/* Gallery Section */}

        <section className="bg-[#6F8661] py-20">

          <h2 className="text-center text-white text-5xl font-bold leading-tight">
            OUR
            <br />
            PROJECT GALLERY
          </h2>

          <div className="grid md:grid-cols-3 gap-10 px-12 mt-16">

            <div className="h-[340px] rounded-3xl bg-gray-200"></div>

            <div className="h-[340px] rounded-3xl bg-gray-200"></div>

            <div className="h-[340px] rounded-3xl bg-gray-200"></div>

          </div>

          <div className="text-center mt-12">

            <button className="bg-[#A56737] text-white px-10 py-3 font-semibold hover:bg-[#8b5429] transition">
              VIEW MORE
            </button>

            <p className="text-white mt-6 max-w-xl mx-auto">
              Add your own project photographs here to showcase your
              completed work.
            </p>

          </div>

        </section>

        {/* Feature Cards */}

        <div className="relative bg-white pb-20">

          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-full">

            <div className="flex justify-center gap-10 flex-wrap">

              {[
                "Premium Quality",
                "Latest Projects",
                "Professional Team",
              ].map((item, index) => (
                <div
                  key={index}
                  className="w-48 h-32 rounded-3xl bg-[#F7F0DE] shadow-lg flex items-center justify-center text-center font-semibold text-[#A56737]"
                >
                  {item}
                </div>
              ))}

            </div>

          </div>

        </div>

        {/* Experience */}

        <section className="bg-white px-10 lg:px-16 pb-24 pt-28">

          <h2 className="text-5xl font-bold text-[#496A3E] leading-tight">
            WE CREATE
            <br />
            BEAUTIFUL SPACES
          </h2>

          <p className="max-w-3xl mt-6 text-gray-600 leading-7">
            Create a professional gallery section for your interior,
            architecture or construction projects. Simply replace the
            placeholders with your own images.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="h-52 rounded-3xl bg-gray-200"></div>

            <div className="h-52 rounded-3xl bg-gray-200"></div>

            <div className="h-52 rounded-3xl bg-gray-200"></div>

          </div>

          <div className="flex justify-center mt-12 gap-3">

            <div className="w-3 h-3 rounded-full bg-[#496A3E]"></div>

            <div className="w-3 h-3 rounded-full bg-gray-300"></div>

            <div className="w-3 h-3 rounded-full bg-gray-300"></div>

            <div className="w-3 h-3 rounded-full bg-gray-300"></div>

          </div>

        </section>

      </div>
    </div>
  );
}
