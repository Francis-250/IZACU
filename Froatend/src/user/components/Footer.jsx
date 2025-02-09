import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 pb-4 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Izacu</h3>
            <p className="text-gray-400">
              Izacu is your ultimate destination for streaming the latest
              movies, TV shows, and exclusive content. Enjoy high-quality
              entertainment anytime, anywhere.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition"
                >
                  Movies
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-white transition"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-white transition"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-white transition"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://youtube.com"
                className="text-gray-400 hover:text-white transition"
              >
                <FaYoutube className="text-2xl" />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-white transition"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to get the latest updates on movies
              and TV shows.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="p-2 rounded-l-lg bg-gray-800 text-white focus:outline-none"
              />
              <button
                type="submit"
                className="bg-red-600 text-white p-2 rounded-r-lg hover:bg-red-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Izacu. All rights reserved.
          </p>
          {/* <p className="text-gray-400 text-sm mt-2">
            Designed with Munyankindi Francois
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
