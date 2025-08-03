import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";

export const Footer = () => {
  return (
    <footer id='contact' className="bg-black text-gray-400 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Left Section - Contact & Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">Let’s Connect</h2>
          <p className="text-lg mb-4">I’m open to collaborations and projects.</p>
          <a
            href="mailto:sandeepcahahr@gmail.com"
            className="block text-xl font-semibold text-white hover:text-gray-300 transition duration-300"
          >
            sandeepcahahr@gmail.com
          </a>
          <a
            href="tel:+917668614447"
            className="block text-xl font-semibold text-white hover:text-gray-300 transition duration-300 mt-1"
          >
            +91 7668614447
          </a>
        </div>

        {/* Middle Section - Location */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Location</h2>
          <p className="text-lg">Township, Mathura</p>
          <p className="text-lg">Uttar Pradesh, India</p>
        </div>

        {/* Right Section - Social Links */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Follow Me</h2>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/Sandeep-cloud331"
              aria-label="GitHub"
              className="text-gray-500 hover:text-white transition text-4xl transform hover:scale-110"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://x.com/cahahr32523"
              aria-label="X (Twitter)"
              className="text-gray-500 hover:text-white transition text-4xl transform hover:scale-110"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/sandeep-chahar-a0620024a/"
              aria-label="LinkedIn"
              className="text-gray-500 hover:text-white transition text-4xl transform hover:scale-110"
            >
              <AiFillLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom - Copyright */}
      <div className="mt-12 border-t border-gray-700 text-center pt-6 text-sm text-gray-500">
        © 2024 <span className="font-bold text-gray-300">Sandeep Chahar</span>. All Rights Reserved.
      </div>
    </footer>
  );
};
