import Link from "next/link";
import { FiHeart } from "react-icons/fi";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1C1C1C] text-gray-400 py-12 border-t border-white/10">
      <div
        className="max-w-6xl mx-auto px-4"
      >
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
        >
          <div>
            <h3 className="text-white font-medium text-lg mb-4">About</h3>
            <p className="text-sm leading-6">
              Frontend developer creating modern web experiences with focus on performance and usability.
            </p>
          </div>

          <div>
            <h3 className="text-white font-medium text-lg mb-4">Contact</h3>
            <div className="flex flex-col space-y-2">
              <a
                href="mailto:daniel.vartanov81@gmail.com"
                className="hover:text-white transition-colors text-sm"
              >
                daniel.vartanov81@gmail.com
              </a>
              <Link 
                href='https://www.upwork.com/freelancers/~0119dcccdfa3e27bc5?mp_source=share'
                className="text-indigo-400 hover:text-indigo-300 text-sm"
              >
                Available for freelance
              </Link>
            </div>
          </div>

        </div>

        <div
          className="border-t border-white/10 pt-6 text-center text-sm"
        >
          <p>
            © {currentYear} Daniel Vartanov Portfolio. Made with <FiHeart className="inline text-rose-500" /> and Next.js
          </p>
        </div>
      </div>
    </footer>
  );
};