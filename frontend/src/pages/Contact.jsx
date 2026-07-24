// import contactBuilding from "../assets/contact-building.png"; // Your building image
import {
  Phone,
  Mail,
  Clock3,
  MapPin,
  Globe,
  Send,
  User,
  FileText,
} from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-[#f8f4ed] overflow-hidden">

      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#efe6d8] blur-[120px]" />
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#efe6d8] blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-16">

        {/* HERO */}

        <div className="grid lg:grid-cols-2 items-center gap-10">

          {/* LEFT */}

          <div>

            <h2 className="font-serif text-[#173629] text-5xl font-bold mb-6">
              Contact Devang Developers
            </h2>

            <h3 className="font-serif text-[#b98d45] text-3xl mb-6">
              Let's Build Your Future Together
            </h3>

            <p className="text-gray-600 text-lg leading-8 max-w-xl mb-6">
              Whether you're searching for your dream home, a premium commercial space, or a valuable real estate investment, our team is here to help.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-[#b98d45] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#173629] mb-1">Office Address</h4>
                  <p className="text-gray-600">I-24, ARPIT SHRUSHTI, Behind Ganesh Temple, Tatya Tope Nagar, Nagpur, 440015</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={20} className="text-[#b98d45] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#173629] mb-1">Call Us</h4>
                  <p className="text-gray-600">+91 9921042899 / +91 9921294799</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={20} className="text-[#b98d45] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#173629] mb-1">Email Us</h4>
                  <p className="text-gray-600">devangdevelopers@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Globe size={20} className="text-[#b98d45] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#173629] mb-1">Website</h4>
                  <p className="text-gray-600">www.devangdevelopers.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock3 size={20} className="text-[#b98d45] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#173629] mb-1">Business Hours</h4>
                  <p className="text-gray-600">Monday – Saturday: 10:00 AM – 7:00 PM</p>
                  <p className="text-gray-600">Sunday: By Appointment</p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT IMAGE */}

          <div className="relative">

            {/* <img
              src={contactBuilding}
              alt=""
              className="w-full rounded-3xl object-cover"
            /> */}

            {/* Placeholder for contact building image */}
            <div className="w-full h-96 bg-gradient-to-br from-[#c8a66a] to-[#b98d45] rounded-3xl" />

            {/* Soft White Gradient */}

            <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#f8f4ed] to-transparent" />

          </div>

        </div>

        {/* CONTACT SECTION STARTS HERE */}

        <div className="grid lg:grid-cols-1 gap-8 mt-20">
          
          {/* CONTACT FORM */}

<div className="rounded-3xl bg-white p-10 shadow-lg">

  <h2 className="text-4xl font-serif text-[#173629]">
    Send Us a Message
  </h2>

  <div className="w-20 h-[2px] bg-[#c8a66a] mt-5 mb-8"></div>

  <p className="text-gray-600 text-lg leading-8 mb-10">
    Fill out the form below and our team will get back to you
    as soon as possible.
  </p>

  <form className="space-y-6">

    {/* Row 1 */}

    <div className="grid md:grid-cols-2 gap-6">

      <div className="relative">

        <User
          size={20}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Your Name*"
          className="w-full rounded-xl border border-gray-200 py-4 pl-14 pr-5 outline-none transition focus:border-[#173629]"
        />

      </div>

      <div className="relative">

        <Mail
          size={20}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="email"
          placeholder="Your Email*"
          className="w-full rounded-xl border border-gray-200 py-4 pl-14 pr-5 outline-none transition focus:border-[#173629]"
        />

      </div>

    </div>

    {/* Row 2 */}

    <div className="grid md:grid-cols-2 gap-6">

      <div className="relative">

        <Phone
          size={20}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="tel"
          placeholder="Mobile Number*"
          className="w-full rounded-xl border border-gray-200 py-4 pl-14 pr-5 outline-none transition focus:border-[#173629]"
        />

      </div>

      <div className="relative">

        <FileText
          size={20}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="email"
          placeholder="Email Address*"
          className="w-full rounded-xl border border-gray-200 py-4 pl-14 pr-5 outline-none transition focus:border-[#173629]"
        />

      </div>

    </div>

    {/* Select Project */}

    <select
      className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-[#173629]"
    >
      <option>Select Project*</option>
      <option>Mangalmurti Residency</option>
      <option>Wing C 129 RSH</option>
      <option>Riddhi Siddhi</option>
    </select>

    {/* Message */}

    <textarea
      rows={7}
      placeholder="Your Message*"
      className="w-full rounded-xl border border-gray-200 p-5 outline-none transition focus:border-[#173629]"
    ></textarea>

    {/* Button */}

    <div className="flex flex-wrap gap-4 justify-start">

      <button
        type="button"
        className="group flex items-center gap-3 rounded-xl bg-[#173629] px-8 py-3 text-base font-medium text-white transition-all duration-300 hover:bg-[#0d261b] hover:shadow-xl"
      >
        Book a Site Visit
      </button>

      <button
        type="button"
        className="group flex items-center gap-3 rounded-xl border-2 border-[#173629] px-8 py-3 text-base font-medium text-[#173629] transition-all duration-300 hover:bg-[#173629] hover:text-white"
      >
        Download Brochure
      </button>

      <button
        type="submit"
        className="group flex items-center gap-3 rounded-xl bg-[#b98d45] px-8 py-3 text-base font-medium text-white transition-all duration-300 hover:bg-[#a0754a] hover:shadow-xl"
      >
        Contact Our Sales Team
        <Send
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </button>

    </div>
    
    {/* MAP + OFFICE */}

    <div className="grid lg:grid-cols-2 gap-8 mt-10">

      {/* GOOGLE MAP */}

      <div className="overflow-hidden rounded-3xl bg-white shadow-lg">

        <iframe
          title="Devang Developers"
          src="https://www.google.com/maps?q=Manish+Nagar+Nagpur&output=embed"
          className="h-[420px] w-full border-0"
          loading="lazy"
        ></iframe>

        <div className="m-6 rounded-2xl bg-white p-6 shadow-xl">

          <h3 className="text-3xl font-serif text-[#173629]">
            Devang Developers
          </h3>

          <p className="mt-4 text-gray-600 leading-8">
            Near Manish Nagar Square
            <br />
            Manish Nagar
            <br />
            Nagpur - 440015
          </p>

        </div>

      </div>

      {/* OFFICE */}

      <div className="overflow-hidden rounded-3xl bg-white shadow-lg">

        <div className="p-8">

          <h2 className="text-4xl font-serif text-[#173629]">
            Our Office
          </h2>

          <div className="w-20 h-[2px] bg-[#c8a66a] mt-5 mb-8"></div>

          <p className="text-gray-600 text-lg leading-8">
            Visit our office to discuss your requirements
            and explore how we can turn your vision into reality.
          </p>

        </div>

        <img
          src="/office.jpg"
          alt="Office"
          className="h-[280px] w-full object-cover"
        />

      </div>

    </div>

  </form>

</div>

        </div>

      </div>

    </section>
  );
}
