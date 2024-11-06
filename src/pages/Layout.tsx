import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="overflow-x-hidden">
      <nav className="py-5 lg:fixed transition-all z-[100] top-0 left-0 duration-500 w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="w-full flex flex-col lg:flex-row">
            <div className="flex justify-between lg:flex-row">
              <a href="/" className="flex items-center">
                <img
                  src="https://res.cloudinary.com/djowwwlua/image/upload/v1721134966/Whit_bg_sbx1yj.svg"
                  width="164"
                  alt=""
                />
              </a>
              <button
                data-collapse-toggle="navbar"
                type="button"
                className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="hidden w-full lg:flex lg:pl-11 max-lg:mt-1 max-lg:h-screen max-lg:overflow-y-auto"
              id="navbar"
            >
              <ul className="flex lg:items-center lg:justify-center flex-col gap-4 max-lg:pt-4 max-lg:mb-4 lg:mt-0 lg:flex-row lg:mx-auto ">
                <li>
                  <a
                    href="/"
                    className="nav-link mb-2 block lg:mr-6 md:mb-0 lg:text-left text-base text-gray-500 font-medium transition-all duration-500 hover:text-white"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about-us"
                    className="nav-link mb-2 block lg:mr-6 md:mb-0 lg:text-left text-gray-500 font-medium transition-all duration-500 hover:text-white"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="nav-link mb-2 block lg:mr-6 md:mb-0 lg:text-left text-gray-500 font-medium transition-all duration-500 hover:text-white"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="https://thekclaut.com/ref/g29im"
                    target="_blank"
                    className="nav-link mb-2 block lg:mr-6 md:mb-0 lg:text-left text-gray-500 font-medium transition-all duration-500 hover:text-white"
                  >
                    Boost Accounts
                  </a>
                </li>
              </ul>
              <div className="flex lg:items-center w-full justify-start flex-col lg:flex-row gap-4 lg:w-max max-lg:gap-4 lg:ml-14 lg:justify-end">
                <a
                  href="/accounts/login/"
                  className="cursor-pointer rounded-full font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm hover:bg-indigo-100"
                >
                  Login
                </a>
                <a
                  href="/accounts/signup/"
                  className="bg-[#3B49CF] rounded-full text-white cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm hover:bg-indigo-700"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
      <footer className="w-full border-t  bg-gradient-to-br from-indigo-100 via-transparent to-violet-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-14 grid grid-cols-9 gap-x-5 gap-y-8">
            <div className="block text-center xl:text-left xl:py-16 col-span-full min-[500px]:col-span-6 md:col-span-4 xl:col-span-3 xl:pl-5">
              <h4 className="text-lg text-gray-900  font-bold mb-9">
                Get In Touch
              </h4>
              <ul className="text-gray-900 transition-all duration-500 grid gap-6">
                <li>support@rediprofiles.com</li>
                <li>+234 90 687 366</li>
                <li>61-A, Opebi Street, Lagos.</li>
              </ul>
            </div>
            <div className="block xl:py-16 col-span-full min-[500px]:col-span-6 md:col-span-4 xl:col-span-3">
              <h4 className="text-lg text-gray-900  font-bold mb-9 text-center xl:text-left">
                Quick Links
              </h4>
              <div className="flex gap-6 xl:gap-12 max-xl:justify-center">
                <ul className="text-gray-900  transition-all duration-500 grid gap-6">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/terms">FAQs</a>
                  </li>
                  <li>
                    <a href="/policy">Privacy Policy</a>
                  </li>
                </ul>
                <ul className="text-gray-900  transition-all duration-500 grid gap-6">
                  <li>
                    <a href="mailto:support@rediprofiles.com">Mail</a>
                  </li>
                  <li>
                    <a href="/about-us"> About Us </a>
                  </li>
                  <li>
                    <a href="/contact-us">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="block xl:py-16 col-span-full md:col-span-4 xl:col-span-3">
              <h4 className="text-lg text-white font-bold mb-9 text-center xl:text-left">
                Newsletter
              </h4>
              <div className="grid gap-7 ">
                <input
                  type="text"
                  name="email"
                  className="py-2 px-4 border border-gray-300 shadow-sm h-14 text-lg text-gray-800 rounded-full w-full  xl:w-64 placeholder:text-gray-400 focus:outline-none"
                  placeholder="Enter email.."
                />
                <button
                  type="submit"
                  className="flex gap-2 justify-center items-center py-3.5 px-7 rounded-full text-white bg-indigo-600 shadow-md w-fit transition-all duration-500 mx-auto xl:mx-0 hover:bg-indigo-700"
                >
                  Subscribe
                  <svg
                    width="17"
                    height="13"
                    viewBox="0 0 17 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.5 6.88281L14.8333 6.88281M10.6667 11.8828L15.0774 7.47207C15.3552 7.19429 15.4941 7.0554 15.4941 6.88281C15.4941 6.71022 15.3552 6.57133 15.0774 6.29356L10.6667 1.88281"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="py-4 bg-[#3b4acfec]">
          <div className="flex items-center justify-center">
            <span className="text-sm text-white ">
              Copyright@2024 All Right Reserved by <a href="">RediProfiles</a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
