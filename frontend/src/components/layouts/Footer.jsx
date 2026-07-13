import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="relative bg-black text-white bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1800&q=80')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-12">
          {[
            FaFacebookF,
            FaInstagram,
            FaYoutube,
            FaLinkedinIn,
            FaTwitter,
          ].map((Icon, index) => (
            <a
              key={index}
              href="#"
              className="w-10 h-10 rounded-full border border-[#c7a37a] flex items-center justify-center text-[#c7a37a] hover:bg-[#c7a37a] hover:text-black transition"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 border-b border-gray-700 pb-12">
          {/* Residences */}
          <div>
            <h3 className="inline-block border border-[#c7a37a] px-4 py-2 tracking-[3px] text-xl font-bold mb-8">
              RESIDENCES
            </h3>

            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h4 className="text-[#c7a37a] uppercase mb-4 text-sm">
                  Hiranandani Gardens
                </h4>

                <ul className="space-y-3 text-sm text-gray-300">
                  <li>Atlantis</li>
                  <li>Regent Hill</li>
                  <li>Castle Rock</li>
                  <li>Highland</li>
                  <li>Adonia</li>
                  <li>Richmond</li>
                  <li>Empress Hill</li>
                </ul>
              </div>

              <div>
                <h4 className="text-[#c7a37a] uppercase mb-4 text-sm">
                  Hiranandani Estate
                </h4>

                <ul className="space-y-3 text-sm text-gray-300">
                  <li>Solitaire A</li>
                  <li>Solitaire B & C</li>
                  <li>Pelican</li>
                  <li>Flamingo</li>
                  <li>Glendale</li>
                  <li>Leona</li>
                  <li>Basilius</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Offices */}
          <div>
            <h3 className="inline-block border border-[#c7a37a] px-4 py-2 tracking-[3px] text-xl font-bold mb-8">
              OFFICES
            </h3>

            <ul className="space-y-4 text-sm text-gray-300">
              <li>Solus</li>
              <li>Quantum</li>
              <li>Iris Shopping</li>
              <li>Chesterton</li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="inline-block border border-[#c7a37a] px-4 py-2 tracking-[3px] text-xl font-bold mb-8">
              USEFUL LINKS
            </h3>

            <div className="grid grid-cols-2 gap-3 text-sm text-gray-300">
              <a href="#">Home</a>
              <a href="#">About Us</a>
              <a href="#">Residences</a>
              <a href="#">Offices</a>
              <a href="#">Healthcare</a>
              <a href="#">Education</a>
              <a href="#">Gallery</a>
              <a href="#">Films</a>
              <a href="#">Media</a>
              <a href="#">Blog</a>
              <a href="#">Contact</a>
              <a href="#">Newsletter</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative bg-[#c7a37a] text-black">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2026 YourCompany. All Rights Reserved.</p>

          <div className="flex gap-4 flex-wrap justify-center my-3 md:my-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Career</a>
            <a href="#">Enquiry</a>
            <a href="#">Disclaimer</a>
            <a href="#">Sitemap</a>
          </div>

          <p>Website Designed by Your Company</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;