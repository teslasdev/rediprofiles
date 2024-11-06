import { useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import $ from "jquery";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "../assets/banner.png";
import HighLight from "../assets/Highlight_10.svg";
import instagram from "../assets/instagram.svg";
import youtube from "../assets/youtube.svg";
import messenger from "../assets/messenger.svg";
import facebook from "../assets/facebook.svg";
import { Link } from "react-router-dom";

Swiper.use([Autoplay, Pagination]);

const Home = () => {
  useEffect(() => {
    // Initialize Swiper
    new Swiper(".pagedone", {
      slidesPerView: 1,
      spaceBetween: 32,
      loop: true,
      centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        767: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
        1124: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
      },
    });

    // Ensure jQuery or any other DOM-dependent code works as expected
    $(".pagedone").css("display", "block");
  }, []);
  return (
    <>
      {/* Banner */}.
      <section className="relative md:py-14 py-7 lg:pt-44 lg:pb-24 md:h-[800px]">
        <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
          <div className="md:w-[50%] w-full">
            <h2 className="md:text-[50px] text-[30px] font-[800] relative z-50">
              Take Control of Your Social Media
            </h2>
            <p className="w-[400px] font-[400] mt-5 text-gray-600 text-[18px]">
              Stay organized, save time, and easily manage your social media
              with monitoring, and team collaboration tools.
            </p>

            <div className="rounded-full bg-[#3B49CF] w-[250px] md:mt-12 mt-4 shadow-md flex justify-center items-center p-2 py-4 text-white">
              <button type="button" className="border-none outline-none">
                Create an account
              </button>
            </div>
          </div>

          <div className="md:absolute top-0 z-40 left-1/2 md:-translate-x-1/2">
            <img src={Image} alt="" className="h-[768px] w-[342px]" />
          </div>

          <div className="absolute md:top-[15%] top-[50%] z-40 md:left-[50%] left-[35%]">
            <img src={HighLight} alt="" className="h-[151px] w-[255.48px]" />
            <div className="absolute top-0 w-[255.48px] h-[151px]">
              <div className="w-[44px] h-[44px] absolute -top-2 right-3 bg-white shadow-sm rounded-full flex justify-center items-center">
                <img src={instagram} alt="" className="h-[24px] w-[24px]" />
              </div>
              <div className="w-[44px] h-[44px] absolute -top-2 -left-2 bg-white shadow-sm rounded-full flex justify-center items-center">
                <img src={facebook} alt="" className="h-[24px] w-[24px]" />
              </div>

              <div className="w-[64px] h-[64px] absolute top-[60%] left-1/2 bg-white shadow-sm rounded-full flex justify-center items-center">
                <img src={youtube} alt="" className="h-[34px] w-[34px]" />
              </div>
              <div className="w-[44px] h-[44px] absolute -bottom-5 -right-6 bg-white shadow-sm rounded-full flex justify-center items-center">
                <img src={messenger} alt="" className="h-[24px] w-[24px]" />
              </div>
            </div>
          </div>

          <div className="absolute md:top-[40%] top-[35%] z-40 md:left-[65%] left-[10%]">
            <h2 className="md:text-[40px] text-[20px] font-[800] relative z-50">
              Social Listening
            </h2>
            <p className="w-[300px] font-[400] text-gray-600 text-[18px]">
              Discover trends and insights about your brand—and your
              competitors.
            </p>
            <Link to="" className="text-[#3B49CF] font-[500] mt-6">
              Learn more
            </Link>
          </div>
        </div>
      </section>
      {/* section 2  */}
      <section className="pt-24 relative border-none bg-[#3B49CF]">
        <div className="mb-14 text-center">
          <span className="py-1 px-4 bg-indigo-100 rounded-full text-xs font-medium text-[#3B49CF] text-center">
            Features
          </span>
          <h2 className="text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-tr from-white to-white py-5">
            Why Is [appName] Different?
          </h2>
          <p className="text-lg font-normal text-white max-w-md md:max-w-2xl mx-auto cap">
            Because it’s Rediprofiles that provides you with everything you need
            to have a wonderful social media trading experience.
          </p>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
            <div className="relative bg-white h-[300px] shadow-md rounded-[10px] flex justify-center items-center flex-col px-4 w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
              <div className="bg-indigo-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-indigo-600">
                <svg
                  className="stroke-indigo-600 transition-all duration-500 group-hover:stroke-white"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 27.5L15 25M15 25V21.25M15 25L20 27.5M8.75 14.375L12.5998 11.0064C13.1943 10.4862 14.1163 10.6411 14.5083 11.327L15.4917 13.048C15.8837 13.7339 16.8057 13.8888 17.4002 13.3686L21.25 10M2.5 2.5H27.5M26.25 2.5V13.25C26.25 17.0212 26.25 18.9069 25.0784 20.0784C23.9069 21.25 22.0212 21.25 18.25 21.25H11.75C7.97876 21.25 6.09315 21.25 4.92157 20.0784C3.75 18.9069 3.75 17.0212 3.75 13.25V2.5"
                    stroke=""
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
                Built With Simplicity
              </h4>
              <p className="text-sm font-normal text-gray-500">
                From interface to transactions, everything on Rediprofiles is
                straightforward.
              </p>
            </div>
            <div className="relative bg-white h-[300px] shadow-md rounded-[10px] flex justify-center items-center flex-col px-4 w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
              <div className="bg-pink-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-pink-600">
                <svg
                  className="stroke-pink-600 transition-all duration-500 group-hover:stroke-white"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 7.5C2.5 4.73858 4.73858 2.5 7.5 2.5C10.2614 2.5 12.5 4.73858 12.5 7.5C12.5 10.2614 10.2614 12.5 7.5 12.5C4.73858 12.5 2.5 10.2614 2.5 7.5Z"
                    stroke=""
                    stroke-width="2"
                  ></path>
                  <path
                    d="M2.5 22.5C2.5 20.143 2.5 18.9645 3.23223 18.2322C3.96447 17.5 5.14298 17.5 7.5 17.5C9.85702 17.5 11.0355 17.5 11.7678 18.2322C12.5 18.9645 12.5 20.143 12.5 22.5C12.5 24.857 12.5 26.0355 11.7678 26.7678C11.0355 27.5 9.85702 27.5 7.5 27.5C5.14298 27.5 3.96447 27.5 3.23223 26.7678C2.5 26.0355 2.5 24.857 2.5 22.5Z"
                    stroke=""
                    stroke-width="2"
                  ></path>
                  <path
                    d="M17.5 7.5C17.5 5.14298 17.5 3.96447 18.2322 3.23223C18.9645 2.5 20.143 2.5 22.5 2.5C24.857 2.5 26.0355 2.5 26.7678 3.23223C27.5 3.96447 27.5 5.14298 27.5 7.5C27.5 9.85702 27.5 11.0355 26.7678 11.7678C26.0355 12.5 24.857 12.5 22.5 12.5C20.143 12.5 18.9645 12.5 18.2322 11.7678C17.5 11.0355 17.5 9.85702 17.5 7.5Z"
                    stroke=""
                    stroke-width="2"
                  ></path>
                  <path
                    d="M17.5 22.5C17.5 19.7386 19.7386 17.5 22.5 17.5C25.2614 17.5 27.5 19.7386 27.5 22.5C27.5 25.2614 25.2614 27.5 22.5 27.5C19.7386 27.5 17.5 25.2614 17.5 22.5Z"
                    stroke=""
                    stroke-width="2"
                  ></path>
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
                24/7 Support
              </h4>
              <p className="text-sm font-normal text-gray-500">
                Our team is always available 24/7 to respond to all your
                questions.
              </p>
            </div>
            <div className="relative bg-white h-[300px] shadow-md rounded-[10px] flex justify-center items-center flex-col px-4 w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
              <div className="bg-teal-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-teal-600">
                <svg
                  className="stroke-teal-600 transition-all duration-500 group-hover:stroke-white"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.75 26.25H26.25M6.25 22.875C4.86929 22.875 3.75 21.8676 3.75 20.625V12.75C3.75 11.5074 4.86929 10.5 6.25 10.5C7.63071 10.5 8.75 11.5074 8.75 12.75V20.625C8.75 21.8676 7.63071 22.875 6.25 22.875ZM15 22.875C13.6193 22.875 12.5 21.8676 12.5 20.625V9.375C12.5 8.13236 13.6193 7.125 15 7.125C16.3807 7.125 17.5 8.13236 17.5 9.375V20.625C17.5 21.8676 16.3807 22.875 15 22.875ZM23.75 22.875C22.3693 22.875 21.25 21.8676 21.25 20.625V6C21.25 4.75736 22.3693 3.75 23.75 3.75C25.1307 3.75 26.25 4.75736 26.25 6V20.625C26.25 21.8676 25.1307 22.875 23.75 22.875Z"
                    stroke=""
                    stroke-width="2"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
                Instant Payment
              </h4>
              <p className="text-sm font-normal text-gray-500">
                Our deposit timeline is one of the fastest out there; your
                payment is processed within the same minute.
              </p>
            </div>
            <div className="relative bg-white h-[300px] shadow-md rounded-[10px] flex justify-center items-center flex-col px-4 w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
              <div className="bg-orange-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-orange-600">
                <svg
                  className="stroke-orange-600 transition-all duration-500 group-hover:stroke-white"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.4167 12.0833V21.25M5.41667 21.25V20.8333C5.41667 19.262 5.41667 18.4763 5.90482 17.9882C6.39298 17.5 7.17865 17.5 8.75 17.5H22.0833C23.6547 17.5 24.4404 17.5 24.9285 17.9882C25.4167 18.4763 25.4167 19.262 25.4167 20.8333V21.25M15.4167 9.16667C13.8453 9.16667 13.0596 9.16667 12.5715 8.67851C12.0833 8.19036 12.0833 7.40468 12.0833 5.83333C12.0833 4.26198 12.0833 3.47631 12.5715 2.98816C13.0596 2.5 13.8453 2.5 15.4167 2.5C16.988 2.5 17.7737 2.5 18.2618 2.98816C18.75 3.47631 18.75 4.26198 18.75 5.83333C18.75 7.40468 18.75 8.19036 18.2618 8.67851C17.7737 9.16667 16.988 9.16667 15.4167 9.16667ZM7.08333 25.8333C7.08333 26.7538 6.33714 27.5 5.41667 27.5C4.49619 27.5 3.75 26.7538 3.75 25.8333C3.75 24.9129 4.49619 24.1667 5.41667 24.1667C6.33714 24.1667 7.08333 24.9129 7.08333 25.8333ZM17.0833 25.8333C17.0833 26.7538 16.3371 27.5 15.4167 27.5C14.4962 27.5 13.75 26.7538 13.75 25.8333C13.75 24.9129 14.4962 24.1667 15.4167 24.1667C16.3371 24.1667 17.0833 24.9129 17.0833 25.8333ZM27.0833 25.8333C27.0833 26.7538 26.3371 27.5 25.4167 27.5C24.4962 27.5 23.75 26.7538 23.75 25.8333C23.75 24.9129 24.4962 24.1667 25.4167 24.1667C26.3371 24.1667 27.0833 24.9129 27.0833 25.8333Z"
                    stroke=""
                    stroke-width="2"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
                Multiple Payment Options
              </h4>
              <p className="text-sm font-normal text-gray-500">
                You can pay in Naira, or Cryptocurrencies (Bitcoin or USDT).
              </p>
            </div>
          </div>
        </div>
        <div className="bottom-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fill-opacity="1"
              d="M0,224L80,240C160,256,320,288,480,282.7C640,277,800,235,960,208C1120,181,1280,171,1360,165.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
      {/* Section 3 */}
      <section className="py-24 relative border-t  border-none">
        <div className="mb-14 text-center">
          <span className="py-1 px-4 bg-indigo-100 rounded-full text-xs font-medium text-[#3B49CF] text-center">
            How to
          </span>
          <h2 className="text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#3B49CF] to-[#3B49CF] py-5">
            How to use our services.
          </h2>
          <p className="text-lg font-normal text-[#3B49CF] max-w-md md:max-w-2xl mx-auto cap">
            Simple steps on how to get started
          </p>
        </div>
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 h-full flex justify-center items-center mx-auto">
          <div className="w-full justify-center items-center xl:gap-36 lg:gap-20 gap-10 flex lg:flex-row flex-col">
            <div className="w-full flex-col justify-start items-start gap-8 inline-flex">
              <div className="w-full justify-start items-start gap-9 grid md:grid-cols-4 grid-cols-1">
                <div className="group border border-dotted border-[#3B49CF] bg-white shadow-md rounded-[8px] h-[300px] p-4 w-full flex-col justify-start md:items-start items-center gap-5 inline-flex">
                  <div className="h-12 px-3 bg-indigo-50 group-hover:bg-indigo-100 transition-all duration-700 ease-in-out rounded flex-col justify-center items-center gap-2.5 flex">
                    <h3 className="text-indigo-600 text-xl font-bold font-manrope leading-9">
                      Step 1
                    </h3>
                  </div>
                  <div className="flex-col justify-start md:items-start items-center gap-3 flex">
                    <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                      Create an account
                    </h5>
                    <p className="text-gray-500 text-sm font-normal leading-relaxed md:text-start text-center">
                      First, you need to create an account on our website. After
                      creating an account, log in to your account.
                    </p>
                  </div>
                </div>
                <div className="group border border-dotted border-[#3B49CF] bg-white shadow-md rounded-[8px] h-[300px] p-4 w-full flex-col justify-start md:items-start items-center gap-5 inline-flex">
                  <div className="h-12 px-3 bg-indigo-50 group-hover:bg-indigo-100 transition-all duration-700 ease-in-out rounded flex-col justify-center items-center gap-2.5 flex">
                    <h3 className="text-indigo-600 text-xl font-bold font-manrope leading-9">
                      Step 2
                    </h3>
                  </div>
                  <div className="flex-col justify-start md:items-start items-center gap-3 flex">
                    <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                      Top Up
                    </h5>
                    <p className="text-gray-500 text-sm font-normal leading-relaxed md:text-start text-center">
                      After creating your account and logging in. Top up your
                      account with money
                    </p>
                  </div>
                </div>
                <div className="group border border-dotted border-[#3B49CF] bg-white shadow-md rounded-[8px] h-[300px] p-4 w-full flex-col justify-start md:items-start items-center gap-5 inline-flex">
                  <div className="h-12 px-3 bg-indigo-50 group-hover:bg-indigo-100 transition-all duration-700 ease-in-out rounded flex-col justify-center items-center gap-2.5 flex">
                    <h3 className="text-indigo-600 text-xl font-bold font-manrope leading-9">
                      Step 3
                    </h3>
                  </div>
                  <div className="flex-col justify-start md:items-start items-center gap-3 flex">
                    <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                      Choose Service
                    </h5>
                    <p className="text-gray-500 text-sm font-normal leading-relaxed md:text-start text-center">
                      choosing a service has never been easier with our
                      streamlined process.
                    </p>
                  </div>
                </div>
                <div className="group border border-dotted border-[#3B49CF] bg-white shadow-md rounded-[8px] h-[300px] p-4 w-full flex-col justify-start md:items-start items-center gap-5 inline-flex">
                  <div className="h-12 px-3 bg-indigo-50 group-hover:bg-indigo-100 transition-all duration-700 ease-in-out rounded flex-col justify-center items-center gap-2.5 flex">
                    <h3 className="text-indigo-600 text-xl font-bold font-manrope leading-9">
                      Step 4
                    </h3>
                  </div>
                  <div className="flex-col justify-start md:items-start items-center gap-3 flex">
                    <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                      Place Order
                    </h5>
                    <p className="text-gray-500 text-sm font-normal leading-relaxed md:text-start text-center">
                      Enter the desired quqntity and click on place yoiur order.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 4 */}
      <section className="relative pb-24 bg-gradient-to-br from-indigo-50 via-transparent to-indigo-50">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#eef2ff"
            fill-opacity="0.6"
            d="M0,64L60,64C120,64,240,64,360,69.3C480,75,600,85,720,101.3C840,117,960,139,1080,170.7C1200,203,1320,245,1380,266.7L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-lg font-medium leading-8 text-gray-500 text-center w-full mb-6">
            Testimonial
          </div>
          <h2 className="font-manrope font-bold text-4xl leading-snug text-transparent bg-clip-text bg-gradient-to-tr from-[#3B49CF] to-[#3B49CF] text-center mb-24">
            Transformative Client Experiences
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
            <div className="h-[400px] px-6 relative shadow-md bg-white rounded-[10px]">
              <div className="h-[300px] flex flex-col justify-center items-center"><q className="text-[30px] font-[600] text-gray-500">A seamless experience from start to finish. Highly recommend!</q>
              <p className="mt-4 font-[700] text-[#3B49CF]">Ademi</p></div>
              <div className="absolute bottom-0 from-indigo-600 right-0 w-full z-50">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="#eef2ff"
                    fill-opacity="1"
                    d="M0,256L34.3,229.3C68.6,203,137,149,206,112C274.3,75,343,53,411,64C480,75,549,117,617,112C685.7,107,754,53,823,32C891.4,11,960,21,1029,69.3C1097.1,117,1166,203,1234,229.3C1302.9,256,1371,224,1406,208L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="h-[400px] px-6 relative shadow-md bg-white rounded-[10px]">
              <div className="h-[300px] flex flex-col justify-center items-center"><q className="text-[30px] font-[600] text-gray-500">A seamless experience from start to finish. Highly recommend!</q>
              <p className="mt-4 font-[700] text-[#3B49CF]">Ademi</p></div>
              <div className="absolute bottom-0 from-indigo-600 right-0 w-full z-50">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="rgb(255 247 237)"
                    fill-opacity="1"
                    d="M0,256L34.3,229.3C68.6,203,137,149,206,112C274.3,75,343,53,411,64C480,75,549,117,617,112C685.7,107,754,53,823,32C891.4,11,960,21,1029,69.3C1097.1,117,1166,203,1234,229.3C1302.9,256,1371,224,1406,208L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
                  ></path>
                </svg>
              </div>
            </div>

            <div className="h-[400px] px-6 relative shadow-md bg-white rounded-[10px]">
              <div className="h-[300px] flex flex-col justify-center items-center"><q className="text-[30px] font-[600] text-gray-500">A seamless experience from start to finish. Highly recommend!</q>
              <p className="mt-4 font-[700] text-[#3B49CF]">Ademi</p></div>
              <div className="absolute bottom-0 from-indigo-600 right-0 w-full z-50">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="rgb(240 253 250)"
                    fill-opacity="1"
                    d="M0,256L34.3,229.3C68.6,203,137,149,206,112C274.3,75,343,53,411,64C480,75,549,117,617,112C685.7,107,754,53,823,32C891.4,11,960,21,1029,69.3C1097.1,117,1166,203,1234,229.3C1302.9,256,1371,224,1406,208L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 5 */}
      <section className="py-24 bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <h6 className="font-medium text-center text-gray-500 mb-5">
              Most asked questions
            </h6>
            <h2 className="text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem] ">
              Questions &amp; Answers
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 bg-gradient-to-tr from-indigo-100 via-lime-50/40 to-violet-50 rounded-2xl max-w-lg mx-auto md:max-w-3xl lg:max-w-5xl xl:max-w-full">
            <div className=" group flex gap-4 w-full flex-col p-5 transition-all duration-500 rounded-t-2xl md:rounded-tl-2xl md:rounded-tr-none border-b border-r-0 md:border-r border-solid border-gray-200 lg:p-10 lg:flex-row lg:gap-6 hover:bg-[#3B49CF]">
              <div className="relative w-10 md:w-16 h-10 md:h-16 bg-indigo-700 rounded-full flex items-center justify-center flex-none group-hover:bg-white">
                <svg
                  className="w-6 h-6 text-white group-hover:text-[#3B49CF]"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.7513 9.52396C9.7513 5.48854 16.0931 5.48854 16.0931 9.52396C16.0931 12.4067 13.2115 11.8315 13.2115 15.2895M13.2104 18.8309L13.2212 18.8179M23.8346 12.9974C23.8346 18.9805 18.9844 23.8307 13.0013 23.8307C7.01822 23.8307 2.16797 18.9805 2.16797 12.9974C2.16797 7.01431 7.01822 2.16406 13.0013 2.16406C18.9844 2.16406 23.8346 7.01431 23.8346 12.9974Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="block w-full">
                <h3 className="font-manrope font-medium text-2xl text-gray-900 my-4 group-hover:text-white">
                  What is RediProfiles?
                </h3>
                <p className="text-gray-500 leading-7 group-hover:text-white">
                  RediProfiles is a leading platform specializing in the
                  purchase and sale of established social media accounts. We
                  provide a safe and efficient marketplace for individuals and
                  businesses aiming to boost their online presence.
                </p>
              </div>
            </div>
            <div className="group flex gap-4 w-full flex-col p-5 transition-all duration-500 rounded-none md:rounded-tr-2xl border-b border-solid border-gray-200  lg:p-10 lg:flex-row lg:gap-6 hover:bg-[#3B49CF]">
              <div className="relative w-10 md:w-16 h-10 md:h-16 bg-indigo-700 rounded-full flex items-center justify-center flex-none group-hover:bg-white">
                <svg
                  className="w-6 h-6 text-white group-hover:text-indigo-700"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.7513 9.52396C9.7513 5.48854 16.0931 5.48854 16.0931 9.52396C16.0931 12.4067 13.2115 11.8315 13.2115 15.2895M13.2104 18.8309L13.2212 18.8179M23.8346 12.9974C23.8346 18.9805 18.9844 23.8307 13.0013 23.8307C7.01822 23.8307 2.16797 18.9805 2.16797 12.9974C2.16797 7.01431 7.01822 2.16406 13.0013 2.16406C18.9844 2.16406 23.8346 7.01431 23.8346 12.9974Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="block w-full">
                <h3 className="font-manrope font-medium text-2xl text-gray-900 my-4 group-hover:text-white">
                  What types of social media accounts are available on
                  RediProfiles?
                </h3>
                <p className="text-gray-500 leading-7 group-hover:text-white">
                  At RediProfiles, we provide a diverse selection of social
                  media accounts across numerous platforms, including Instagram,
                  Twitter, Facebook, TikTok, YouTube, and others. Whether you
                  need accounts with large followings or those targeting
                  specific niches, we have the perfect options to meet your
                  requirements.
                </p>
              </div>
            </div>
            <div className="group flex gap-4 w-full flex-col p-5 transition-all duration-500 rounded-none md:rounded-bl-2xl border-r-0 md:border-r border-b md:border-b-0 border-solid border-gray-200 lg:p-10 lg:flex-row lg:gap-6 hover:bg-[#3B49CF]">
              <div className="relative w-10 md:w-16 h-10 md:h-16 bg-indigo-700 rounded-full flex items-center justify-center flex-none group-hover:bg-white">
                <svg
                  className="w-6 h-6 text-white group-hover:text-indigo-700"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.7513 9.52396C9.7513 5.48854 16.0931 5.48854 16.0931 9.52396C16.0931 12.4067 13.2115 11.8315 13.2115 15.2895M13.2104 18.8309L13.2212 18.8179M23.8346 12.9974C23.8346 18.9805 18.9844 23.8307 13.0013 23.8307C7.01822 23.8307 2.16797 18.9805 2.16797 12.9974C2.16797 7.01431 7.01822 2.16406 13.0013 2.16406C18.9844 2.16406 23.8346 7.01431 23.8346 12.9974Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="block w-full">
                <h3 className="font-manrope font-medium text-2xl text-gray-900 my-4 group-hover:text-white">
                  Are transactions on RediProfiles secure?
                </h3>
                <p className="text-gray-500 leading-7 group-hover:text-white">
                  Absolutely. We prioritize the security and privacy of our
                  users by using advanced encryption and security protocols to
                  protect all transactions. You can confidently buy and sell on
                  our platform.
                </p>
              </div>
            </div>
            <div className="group flex gap-4 w-full flex-col p-5 transition-all duration-500 rounded-br-2xl lg:rounded-br-2xl lg:p-10 lg:flex-row lg:gap-6 hover:bg-[#3B49CF]">
              <div className="relative w-10 md:w-16 h-10 md:h-16 bg-indigo-700 rounded-full flex items-center justify-center flex-none group-hover:bg-white">
                <svg
                  className="w-6 h-6 text-white group-hover:text-indigo-700"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.7513 9.52396C9.7513 5.48854 16.0931 5.48854 16.0931 9.52396C16.0931 12.4067 13.2115 11.8315 13.2115 15.2895M13.2104 18.8309L13.2212 18.8179M23.8346 12.9974C23.8346 18.9805 18.9844 23.8307 13.0013 23.8307C7.01822 23.8307 2.16797 18.9805 2.16797 12.9974C2.16797 7.01431 7.01822 2.16406 13.0013 2.16406C18.9844 2.16406 23.8346 7.01431 23.8346 12.9974Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="block w-full">
                <h3 className="font-manrope font-medium text-2xl text-gray-900 my-4 group-hover:text-white">
                  Is it legal to buy and sell social media accounts?
                </h3>
                <p className="text-gray-500 leading-7 group-hover:text-white">
                  While buying and selling social media accounts is typically
                  permissible, it's important to comply with each platform's
                  terms of service. RediProfiles operates within legal
                  boundaries and encourages users to conduct their transactions
                  responsibly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 6 */}
      <section className="py-16 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:p-16 p-10 rounded-2xl bg-gradient-to-br from-indigo-100 via-transparent to-violet-50 flex items-center justify-between flex-col lg:flex-row">
            <div className="block text-center mb-5 lg:text-left lg:mb-0">
              <h2 className="font-manrope text-4xl text-indigo-600 font-bold mb-5 lg:mb-2">
                Create an Account Today.
              </h2>
              <p className="text-xl text-gray-500">
                Contact us with any query or any idea.
              </p>
            </div>
            <div className="md:flex-row flex-col flex items-center gap-5 mt-8 md:mt-0">
              <a
                href="/accounts/signup/"
                className="cursor-pointer  block py-3.5 px-7 rounded-full border border-indigo-600 text-indigo-600 font-semibold transition-all duration-300 hover:bg-indigo-50"
              >
                Create Account
              </a>
              <a
                href="/accounts/login/"
                className="cursor-pointer  block py-3.5 px-7 rounded-full bg-indigo-600 text-white font-semibold transition-all duration-300 hover:bg-indigo-700"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
