import {
  Trees,
  Building2,
  Route,
  Leaf,
  ShieldCheck,
  Droplets,
  Zap,
  Landmark,
  ArrowRight,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import projectImg from "../assets/riddhi.jpg";
export function Project() {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden bg-[#f9f6f1] py-24">

      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#efe6d8] blur-[120px]" />
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#efe6d8] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-16 text-center">

          <div className="flex items-center justify-center gap-5 text-[#b98d45]">

            <div className="h-px w-20 bg-[#c8a66a]" />

            <span className="uppercase tracking-[5px] text-sm font-medium">
              FEATURED PROJECTS
            </span>

            <div className="h-px w-20 bg-[#c8a66a]" />

          </div>

          <h2 className="mt-6 text-6xl font-serif leading-tight text-[#173629]">
            Every project by Devang Developers
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-600">
            reflects our dedication to thoughtful planning,
            superior construction quality,
            and modern lifestyle experiences.
          </p>

          <div className="mt-6 text-2xl text-[#c8a66a]">
            ❦
          </div>

        </div>

        {/* Card */}

        <div className="overflow-hidden rounded-[35px] border border-[#ece5d8] bg-white shadow-xl">

          <div className="grid lg:grid-cols-2">

            {/* Left */}

            <div className="relative">

              <img
                src={projectImg}
                alt="Riddhi Siddhi"
                className="h-full w-full object-cover"
              />

              <div className="absolute bottom-7 left-7">

                <div className="flex items-center gap-3 rounded-2xl bg-[#173629] px-6 py-4 text-white shadow-lg">

                  <ShieldCheck size={30} />

                  <div>

                    <p className="font-semibold">
                      RERA Approved
                    </p>

                    <p className="text-sm opacity-70">
                      P505000XXXX
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* Right */}

            <div className="p-12 lg:p-14">

              <div className="inline-flex items-center gap-3 rounded-full bg-[#faf8f2] px-5 py-2">

                <Leaf
                  size={18}
                  className="text-[#b98d45]"
                />

                <span className="text-sm font-semibold uppercase tracking-[3px] text-[#b98d45]">
                  Premium Residential Plots
                </span>

              </div>

              <h3 className="mt-8 text-6xl font-serif text-[#173629]">
                Riddhi Siddhi
              </h3>

              <div className="mt-6 h-[2px] w-20 bg-[#c8a66a]" />

              <p className="mt-8 text-xl leading-10 text-gray-600">

                Riddhi Siddhi is designed to offer peaceful community
                living while maintaining excellent connectivity to the
                city's major destinations. Combining quality
                construction with modern amenities, it creates a
                comfortable environment where families can flourish.

              </p>

              {/* Features */}

              <div className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4">

                <div className="text-center">

                  <Trees
                    className="mx-auto text-[#b98d45]"
                    size={38}
                  />

                  <p className="mt-3 font-semibold">
                    50+ Acres
                  </p>

                  <p className="text-gray-500">
                    Total Land
                  </p>

                </div>

                <div className="text-center">

                  <Building2
                    className="mx-auto text-[#b98d45]"
                    size={38}
                  />

                  <p className="mt-3 font-semibold">
                    Gated
                  </p>

                  <p className="text-gray-500">
                    Community
                  </p>

                </div>

                <div className="text-center">

                  <Route
                    className="mx-auto text-[#b98d45]"
                    size={38}
                  />

                  <p className="mt-3 font-semibold">
                    30 & 40 Ft
                  </p>

                  <p className="text-gray-500">
                    Wide Roads
                  </p>

                </div>

                <div className="text-center">

                  <Leaf
                    className="mx-auto text-[#b98d45]"
                    size={38}
                  />

                  <p className="mt-3 font-semibold">
                    Lush Green
                  </p>

                  <p className="text-gray-500">
                    Landscapes
                  </p>

                </div>

              </div>

              {/* Price */}

              <div className="mt-12 rounded-3xl border border-[#ece5d8] bg-[#fcfaf6] p-6">

                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                  <div>

                    <p className="text-sm uppercase tracking-[3px] text-gray-500">
                      Starting From
                    </p>

                    <h4 className="mt-2 text-5xl font-serif text-[#173629]">
                      ₹18.00 Lakhs*
                    </h4>

                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row">

                    <button
                      onClick={() => navigate("/riddhi-siddhi")}
                      className="group flex items-center justify-center gap-3 rounded-xl bg-[#173629] px-8 py-4 text-white transition duration-300 hover:bg-[#0d261b]"
                    >
                      Explore Riddhi Siddhi

                      <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </button>

                    <button className="rounded-xl border border-[#c8a66a] px-8 py-4 font-medium text-[#b98d45] transition hover:bg-[#c8a66a] hover:text-white">

                      Book Site Visit

                    </button>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Bottom */}

          <div className="grid grid-cols-2 gap-y-8 border-t border-[#ece5d8] bg-[#faf8f3] px-8 py-8 lg:grid-cols-5">

            <div className="flex items-center justify-center gap-3">

              <ShieldCheck
                className="text-[#b98d45]"
                size={28}
              />

              <span>24/7 Security</span>

            </div>

            <div className="flex items-center justify-center gap-3">

              <Trees
                className="text-[#b98d45]"
                size={28}
              />

              <span>Avenue Plantation</span>

            </div>

            <div className="flex items-center justify-center gap-3">

              <Droplets
                className="text-[#b98d45]"
                size={28}
              />

              <span>Water Connection</span>

            </div>

            <div className="flex items-center justify-center gap-3">

              <Zap
                className="text-[#b98d45]"
                size={28}
              />

              <span>Electricity</span>

            </div>

            <div className="flex items-center justify-center gap-3">

              <Landmark
                className="text-[#b98d45]"
                size={28}
              />

              <span>Clubhouse & Amenities</span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}