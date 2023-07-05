import { StopCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "Our Programs", path: "/programs" },
  { name: "Podcast", path: "/podcast" },
  { name: "Bible", path: "/bible" },
  { name: "Blog", path: "/blog" },
  { name: "Videos", path: "/videos" },
  { name: "Partners", path: "/partners" },
  { name: "Donate", path: "/donate" },
  { name: "Contact Us", path: "/contact" },
  { name: "About", path: "/about" },
];

const Footer = () => {
  return (
    <>
      <footer className="footer shadow-md border-t border-black">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-start py-10 gap-x-4 gap-y-8 lg:gap-8">
          {/* Follow US */}
          <div className="sm:col-span-2 grid gap-y-4">
            {/* follow us section */}
            <div>
              <h3 className="text-xl mb-4 font-semibold">Follow Us</h3>
              <div className="flex space-x-4">
                <Link
                  to={""}
                  className="duration-200 transition-colors hover:text-red-400"
                >
                  <StopCircleIcon className="w-10" />
                </Link>
                <Link
                  to={""}
                  className="duration-200 transition-colors hover:text-red-400"
                >
                  <StopCircleIcon className="w-10" />
                </Link>
                <Link
                  to={""}
                  className="duration-200 transition-colors hover:text-red-400"
                >
                  <StopCircleIcon className="w-10" />
                </Link>
                <Link
                  to={""}
                  className="duration-200 transition-colors hover:text-red-400"
                >
                  <StopCircleIcon className="w-10" />
                </Link>
                <Link
                  to={""}
                  className="duration-200 transition-colors hover:text-red-400"
                >
                  <StopCircleIcon className="w-10" />
                </Link>
              </div>
            </div>

            {/* Theme part */}
            <div className="flex gap-x-6 items-center w-full">
              <p className="text-xl">Theme</p>
              <div className="flex gap-x-2">
                <div
                  className="w-8 h-8 rounded-full bg-black border hover:border-white"
                  title="black"
                ></div>
                <div
                  className="w-8 h-8 rounded-full bg-white border hover:border-black"
                  title="black"
                ></div>
                <div
                  className="w-8 h-8 rounded-full bg-[#ffebcd] border hover:border-black"
                  title="black"
                ></div>
              </div>
              <p className="border border-red-400 text-red-400 rounded-md px-1 text-sm">
                beta
              </p>
            </div>
            {/* end of Theme part */}
          </div>

          {/* Links */}
          <div className="grid gap-y-2">
            <h3 className="text-xl mb-4 font-semibold">Links</h3>
            {links.map((link) => (
              <Link
                className="duration-200 transition-transform md:hover:text-gray-950 md:hover:translate-x-1"
                to={link.path}
                key={link.path}
              >
                {link.name}
              </Link>
            ))}
          </div>
          {/* Address */}
          <div className="space-y-4">
            <h3 className="text-xl mb-4 font-semibold">Contact Us</h3>
            <p className="grid space-y-1">
              <span>7, Commissariat Rd, Ashok Nagar</span>
              <span>Bengaluru, Karnataka 560025</span>
              <span>
                Phone: <a href="tel:+916364252164">+91 6364 2521 64</a>
              </span>
              <span>Landline: 080 2558 4101 / 2558 5019</span>
              <span>
                Email:{" "}
                <a
                  className="hover:text-blue-400"
                  href="mailto:info@febaonline.org"
                >
                  info@febaonline.org
                </a>
              </span>
            </p>
          </div>
        </div>
      </footer>
      <div className="text-center border-t border-black py-1">
        <p>Copyright Febaonline &#169; 2023</p>
      </div>
    </>
  );
};

export default Footer;
