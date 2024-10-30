import { useEffect } from "react";
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import $ from 'jquery';
import { Autoplay, Pagination } from "swiper/modules";

Swiper.use([Autoplay, Pagination]);

const Home = () => {
  useEffect(() => {
    // Initialize Swiper
    new Swiper('.pagedone', {
      slidesPerView: 1,
      spaceBetween: 32,
      loop: true,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
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
    $('.pagedone').css('display', 'block');
    
  }, []);
  return (
    <>
      {/* Banner */}
      <section className="relative py-14 lg:pt-44 lg:pb-24 bg-gradient-to-tl from-indigo-100 via-transparent to-lime-50 ">
        <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-28">
            <div className="flex items-center w-full max-lg:max-w-xl mx-auto">
              <div className="block">
                <span className="inline-flex items-center bg-indigo-50 text-indigo-600 text-sm font-medium mr-2 pl-2 pr-2.5 rounded-full py-1 mb-8">
                  <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-indigo-600 flex"></span>
                  Top Social Media Service
                </span>
                <h1 className="font-manrope font-extrabold text-4xl sm:text-5xl sm:leading-tight text-gray-900 mb-8 ">
                  World Leading Digital Social Media{" "}
                  <span className="text-transparent  bg-clip-text bg-gradient-to-tr from-indigo-600 to-violet-600 font-semibold">
                    Account MarketPlace
                  </span>
                </h1>
                <p className="text-base font-medium text-gray-500 mb-8 ">
                  "Top-tier social meidia logs and accounts offered by the
                  expert in the game, discover your next logs using
                  rediprofiles".
                </p>
                <div className="flex flex-col min-[450px]:flex-row items-center gap-5 mb-8">
                  <a
                    href="/accounts/signup/"
                    className="flex items-center max-[450px]:w-full max-[450px]:justify-center rounded-lg gap-2 py-3 pr-5 pl-7 bg-indigo-600 text-white text-base font-semibold transition-all duration-500 hover:bg-indigo-700"
                  >
                    Create Account
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M7.50295 4.99634L12.5032 9.99654L7.5 14.9997"
                        stroke="currentcolor"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="/accounts/login/"
                    className="flex items-center max-[450px]:w-full max-[450px]:justify-center rounded-xl gap-2 py-3 px-7 bg-indigo-50 text-indigo-600 text-base font-semibold shadow-sm shadow-transparent transition-all duration-500 hover:shadow-transparent hover:border-indigo-50 hover:bg-indigo-100"
                  >
                    Login
                  </a>
                </div>
                <div className="flex items-center max-sm:justify-between sm:gap-4">
                  <a
                    href="javascript:;"
                    className="group relative p-1 rounded-md transition-all duration-500"
                  >
                    <svg
                      className="transition-all duration-300 group-hover:scale-110"
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.0424805 4.5C0.0424805 2.29086 1.83334 0.5 4.04248 0.5H24.0425C26.2516 0.5 28.0425 2.29086 28.0425 4.5V24.5C28.0425 26.7091 26.2516 28.5 24.0425 28.5H4.04248C1.83334 28.5 0.0424805 26.7091 0.0424805 24.5V4.5Z"
                        fill="#FAF5FC"
                      ></path>
                      <path
                        d="M11.4508 14.4998C11.4508 13.0925 12.5921 11.9513 14.0003 11.9513C15.4085 11.9513 16.5504 13.0925 16.5504 14.4998C16.5504 15.9072 15.4085 17.0484 14.0003 17.0484C12.5921 17.0484 11.4508 15.9072 11.4508 14.4998ZM10.0723 14.4998C10.0723 16.668 11.8308 18.4255 14.0003 18.4255C16.1697 18.4255 17.9283 16.668 17.9283 14.4998C17.9283 12.3317 16.1697 10.5742 14.0003 10.5742C11.8308 10.5742 10.0723 12.3317 10.0723 14.4998ZM17.1658 10.4185C17.1658 10.6 17.2195 10.7774 17.3203 10.9283C17.4212 11.0792 17.5645 11.1968 17.7322 11.2663C17.8999 11.3358 18.0845 11.3541 18.2625 11.3187C18.4406 11.2834 18.6042 11.1961 18.7326 11.0679C18.8611 10.9396 18.9486 10.7762 18.9841 10.5982C19.0196 10.4203 19.0015 10.2358 18.932 10.0681C18.8626 9.90048 18.745 9.75716 18.5941 9.65629C18.4432 9.55542 18.2657 9.50155 18.0842 9.50147H18.0838C17.8405 9.50159 17.6071 9.59823 17.435 9.77017C17.2629 9.94212 17.1661 10.1753 17.1658 10.4185V10.4185ZM10.9098 20.7228C10.164 20.6888 9.75862 20.5647 9.48923 20.4598C9.13208 20.3208 8.87725 20.1553 8.60933 19.8879C8.3414 19.6205 8.17556 19.3661 8.03713 19.0092C7.93211 18.7401 7.80788 18.3348 7.77398 17.5894C7.73689 16.7836 7.72949 16.5415 7.72949 14.4999C7.72949 12.4583 7.73751 12.2169 7.77398 11.4104C7.80794 10.665 7.93309 10.2605 8.03713 9.99064C8.17617 9.6337 8.34177 9.37903 8.60933 9.11127C8.87688 8.8435 9.13146 8.67776 9.48923 8.53941C9.75849 8.43446 10.164 8.3103 10.9098 8.27642C11.7161 8.23936 11.9584 8.23196 14.0003 8.23196C16.0422 8.23196 16.2847 8.23997 17.0917 8.27642C17.8375 8.31037 18.2422 8.43544 18.5123 8.53941C18.8694 8.67776 19.1242 8.84387 19.3922 9.11127C19.6601 9.37866 19.8253 9.6337 19.9644 9.99064C20.0694 10.2597 20.1936 10.665 20.2275 11.4104C20.2646 12.2169 20.272 12.4583 20.272 14.4999C20.272 16.5415 20.2646 16.7829 20.2275 17.5894C20.1935 18.3348 20.0687 18.7399 19.9644 19.0092C19.8253 19.3661 19.6597 19.6208 19.3922 19.8879C19.1246 20.1551 18.8694 20.3208 18.5123 20.4598C18.243 20.5647 17.8375 20.6889 17.0917 20.7228C16.2853 20.7598 16.0431 20.7672 14.0003 20.7672C11.9574 20.7672 11.7159 20.7598 10.9098 20.7228V20.7228ZM10.8465 6.90104C10.0321 6.9381 9.47564 7.06715 8.98967 7.25614C8.48638 7.4513 8.06032 7.71313 7.63457 8.13795C7.20882 8.56278 6.94751 8.98925 6.75223 9.49224C6.56313 9.97822 6.434 10.5341 6.39691 11.3479C6.35921 12.1631 6.35059 12.4237 6.35059 14.4998C6.35059 16.576 6.35921 16.8366 6.39691 17.6518C6.434 18.4657 6.56313 19.0215 6.75223 19.5075C6.94751 20.0101 7.20888 20.4371 7.63457 20.8617C8.06026 21.2864 8.48638 21.5478 8.98967 21.7436C9.47656 21.9325 10.0321 22.0616 10.8465 22.0987C11.6625 22.1357 11.9229 22.145 14.0003 22.145C16.0777 22.145 16.3385 22.1363 17.1541 22.0987C17.9685 22.0616 18.5246 21.9325 19.0109 21.7436C19.5139 21.5478 19.9402 21.2866 20.366 20.8617C20.7917 20.4369 21.0525 20.0101 21.2483 19.5075C21.4374 19.0215 21.5672 18.4656 21.6037 17.6518C21.6407 16.836 21.6494 16.576 21.6494 14.4998C21.6494 12.4237 21.6407 12.1631 21.6037 11.3479C21.5666 10.534 21.4374 9.97792 21.2483 9.49224C21.0525 8.98956 20.7911 8.56345 20.366 8.13795C19.9409 7.71246 19.5139 7.4513 19.0115 7.25614C18.5246 7.06715 17.9685 6.93749 17.1547 6.90104C16.3391 6.86397 16.0783 6.85474 14.0009 6.85474C11.9235 6.85474 11.6625 6.86336 10.8465 6.90104Z"
                        fill="url(#paint0_radial_14417_18402)"
                      ></path>
                      <path
                        d="M11.4508 14.4998C11.4508 13.0925 12.5921 11.9513 14.0003 11.9513C15.4085 11.9513 16.5504 13.0925 16.5504 14.4998C16.5504 15.9072 15.4085 17.0484 14.0003 17.0484C12.5921 17.0484 11.4508 15.9072 11.4508 14.4998ZM10.0723 14.4998C10.0723 16.668 11.8308 18.4255 14.0003 18.4255C16.1697 18.4255 17.9283 16.668 17.9283 14.4998C17.9283 12.3317 16.1697 10.5742 14.0003 10.5742C11.8308 10.5742 10.0723 12.3317 10.0723 14.4998ZM17.1658 10.4185C17.1658 10.6 17.2195 10.7774 17.3203 10.9283C17.4212 11.0792 17.5645 11.1968 17.7322 11.2663C17.8999 11.3358 18.0845 11.3541 18.2625 11.3187C18.4406 11.2834 18.6042 11.1961 18.7326 11.0679C18.8611 10.9396 18.9486 10.7762 18.9841 10.5982C19.0196 10.4203 19.0015 10.2358 18.932 10.0681C18.8626 9.90048 18.745 9.75716 18.5941 9.65629C18.4432 9.55542 18.2657 9.50155 18.0842 9.50147H18.0838C17.8405 9.50159 17.6071 9.59823 17.435 9.77017C17.2629 9.94212 17.1661 10.1753 17.1658 10.4185V10.4185ZM10.9098 20.7228C10.164 20.6888 9.75862 20.5647 9.48923 20.4598C9.13208 20.3208 8.87725 20.1553 8.60933 19.8879C8.3414 19.6205 8.17556 19.3661 8.03713 19.0092C7.93211 18.7401 7.80788 18.3348 7.77398 17.5894C7.73689 16.7836 7.72949 16.5415 7.72949 14.4999C7.72949 12.4583 7.73751 12.2169 7.77398 11.4104C7.80794 10.665 7.93309 10.2605 8.03713 9.99064C8.17617 9.6337 8.34177 9.37903 8.60933 9.11127C8.87688 8.8435 9.13146 8.67776 9.48923 8.53941C9.75849 8.43446 10.164 8.3103 10.9098 8.27642C11.7161 8.23936 11.9584 8.23196 14.0003 8.23196C16.0422 8.23196 16.2847 8.23997 17.0917 8.27642C17.8375 8.31037 18.2422 8.43544 18.5123 8.53941C18.8694 8.67776 19.1242 8.84387 19.3922 9.11127C19.6601 9.37866 19.8253 9.6337 19.9644 9.99064C20.0694 10.2597 20.1936 10.665 20.2275 11.4104C20.2646 12.2169 20.272 12.4583 20.272 14.4999C20.272 16.5415 20.2646 16.7829 20.2275 17.5894C20.1935 18.3348 20.0687 18.7399 19.9644 19.0092C19.8253 19.3661 19.6597 19.6208 19.3922 19.8879C19.1246 20.1551 18.8694 20.3208 18.5123 20.4598C18.243 20.5647 17.8375 20.6889 17.0917 20.7228C16.2853 20.7598 16.0431 20.7672 14.0003 20.7672C11.9574 20.7672 11.7159 20.7598 10.9098 20.7228V20.7228ZM10.8465 6.90104C10.0321 6.9381 9.47564 7.06715 8.98967 7.25614C8.48638 7.4513 8.06032 7.71313 7.63457 8.13795C7.20882 8.56278 6.94751 8.98925 6.75223 9.49224C6.56313 9.97822 6.434 10.5341 6.39691 11.3479C6.35921 12.1631 6.35059 12.4237 6.35059 14.4998C6.35059 16.576 6.35921 16.8366 6.39691 17.6518C6.434 18.4657 6.56313 19.0215 6.75223 19.5075C6.94751 20.0101 7.20888 20.4371 7.63457 20.8617C8.06026 21.2864 8.48638 21.5478 8.98967 21.7436C9.47656 21.9325 10.0321 22.0616 10.8465 22.0987C11.6625 22.1357 11.9229 22.145 14.0003 22.145C16.0777 22.145 16.3385 22.1363 17.1541 22.0987C17.9685 22.0616 18.5246 21.9325 19.0109 21.7436C19.5139 21.5478 19.9402 21.2866 20.366 20.8617C20.7917 20.4369 21.0525 20.0101 21.2483 19.5075C21.4374 19.0215 21.5672 18.4656 21.6037 17.6518C21.6407 16.836 21.6494 16.576 21.6494 14.4998C21.6494 12.4237 21.6407 12.1631 21.6037 11.3479C21.5666 10.534 21.4374 9.97792 21.2483 9.49224C21.0525 8.98956 20.7911 8.56345 20.366 8.13795C19.9409 7.71246 19.5139 7.4513 19.0115 7.25614C18.5246 7.06715 17.9685 6.93749 17.1547 6.90104C16.3391 6.86397 16.0783 6.85474 14.0009 6.85474C11.9235 6.85474 11.6625 6.86336 10.8465 6.90104Z"
                        fill="url(#paint1_radial_14417_18402)"
                      ></path>
                      <defs>
                        <radialGradient
                          id="paint0_radial_14417_18402"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(8.3832 22.2172) scale(19.9721 19.9601)"
                        >
                          <stop offset="0.09" stop-color="#FA8F21"></stop>
                          <stop offset="0.78" stop-color="#D82D7E"></stop>
                        </radialGradient>
                        <radialGradient
                          id="paint1_radial_14417_18402"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(15.629 22.9022) scale(15.7407 15.7313)"
                        >
                          <stop
                            offset="0.64"
                            stop-color="#8C3AAA"
                            stop-opacity="0"
                          ></stop>
                          <stop offset="1" stop-color="#8C3AAA"></stop>
                        </radialGradient>
                      </defs>
                    </svg>
                  </a>
                  <a
                    href="javascript:;"
                    className="group transition-all duration-500"
                  >
                    <svg
                      className="transition-all duration-300 group-hover:scale-110"
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.966797 4.5C0.966797 2.29086 2.75766 0.5 4.9668 0.5H24.9668C27.1759 0.5 28.9668 2.29086 28.9668 4.5V24.5C28.9668 26.7091 27.1759 28.5 24.9668 28.5H4.9668C2.75766 28.5 0.966797 26.7091 0.966797 24.5V4.5Z"
                        fill="#E7FFEF"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.0042 7.50024C11.1519 7.50024 8 10.6521 8 14.5044C8 18.3568 11.1519 21.5086 15.0042 21.5086C18.8565 21.5086 22.0084 18.3568 22.0084 14.5044C22.0084 10.6521 18.8915 7.50024 15.0042 7.50024ZM18.2261 17.6213C18.086 17.8314 17.8409 17.9015 17.6308 17.7614C15.9848 16.7458 13.9185 16.5357 11.4671 17.096C11.2219 17.166 11.0118 16.9909 10.9418 16.7808C10.8717 16.5357 11.0468 16.3255 11.257 16.2555C13.9185 15.6601 16.2299 15.9053 18.051 17.026C18.2962 17.131 18.3312 17.4112 18.2261 17.6213ZM19.0666 15.6952C18.8915 15.9403 18.5763 16.0454 18.3312 15.8703C16.4401 14.7146 13.5683 14.3644 11.362 15.0648C11.0818 15.1348 10.7667 14.9947 10.6966 14.7146C10.6266 14.4344 10.7667 14.1192 11.0468 14.0492C13.6034 13.2787 16.7552 13.6639 18.9266 14.9947C19.1367 15.0998 19.2417 15.45 19.0666 15.6952ZM19.1367 13.734C16.8953 12.4032 13.1481 12.2631 11.0118 12.9285C10.6616 13.0336 10.3114 12.8234 10.2063 12.5082C10.1013 12.158 10.3114 11.8078 10.6266 11.7028C13.1131 10.9673 17.2105 11.1074 19.8021 12.6483C20.1173 12.8234 20.2223 13.2437 20.0472 13.5589C19.8721 13.804 19.4519 13.9091 19.1367 13.734Z"
                        fill="#10BC4C"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="javascript:;"
                    className="group transition-all duration-500"
                  >
                    <svg
                      className="transition-all duration-300 group-hover:scale-110"
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.0424805 4.5C0.0424805 2.29086 1.83334 0.5 4.04248 0.5H24.0425C26.2516 0.5 28.0425 2.29086 28.0425 4.5V24.5C28.0425 26.7091 26.2516 28.5 24.0425 28.5H4.04248C1.83334 28.5 0.0424805 26.7091 0.0424805 24.5V4.5Z"
                        fill="#EDF4FF"
                      ></path>
                      <path
                        d="M17.2758 15.3745L17.6747 12.842H15.2172V11.1959C15.2172 10.5034 15.5603 9.82674 16.6574 9.82674H17.7904V7.67015C17.1306 7.56503 16.4639 7.50816 15.7957 7.5C13.773 7.5 12.4525 8.71481 12.4525 10.911V12.842H10.2104V15.3745H12.4525V21.5H15.2172V15.3745H17.2758Z"
                        fill="#337FFF"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="javascript:;"
                    className="group transition-all duration-500"
                  >
                    <svg
                      className="transition-all duration-300 group-hover:scale-110"
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.138672 4.5C0.138672 2.29086 1.92953 0.5 4.13867 0.5H24.1387C26.3478 0.5 28.1387 2.29086 28.1387 4.5V24.5C28.1387 26.7091 26.3478 28.5 24.1387 28.5H4.13867C1.92953 28.5 0.138672 26.7091 0.138672 24.5V4.5Z"
                        fill="#ECFFF5"
                      ></path>
                      <path
                        d="M7 20.9402L8.00447 17.2087C7.19439 15.755 6.93702 14.0588 7.27959 12.4312C7.62215 10.8035 8.54168 9.35372 9.86942 8.34776C11.1972 7.3418 12.8441 6.84717 14.5079 6.95464C16.1718 7.0621 17.741 7.76446 18.9276 8.93281C20.1142 10.1012 20.8386 11.6572 20.9678 13.3153C21.0971 14.9734 20.6226 16.6223 19.6313 17.9596C18.64 19.2969 17.1986 20.2328 15.5713 20.5955C13.9441 20.9582 12.2404 20.7235 10.7727 19.9343L7 20.9402ZM10.9546 18.538L11.1879 18.676C12.251 19.3045 13.4927 19.5646 14.7194 19.4158C15.9461 19.2669 17.0891 18.7174 17.9701 17.853C18.851 16.9886 19.4206 15.8578 19.59 14.6368C19.7594 13.4157 19.5191 12.1731 18.9065 11.1026C18.294 10.032 17.3436 9.19364 16.2035 8.71809C15.0633 8.24255 13.7975 8.15655 12.6033 8.4735C11.409 8.79045 10.3535 9.49254 9.60103 10.4704C8.8486 11.4482 8.44159 12.6468 8.44343 13.8795C8.44243 14.9015 8.72581 15.9038 9.26203 16.7748L9.40835 17.0154L8.8468 19.0981L10.9546 18.538Z"
                        fill="#00D95F"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16.6175 14.8376C16.4807 14.7276 16.3205 14.6501 16.1492 14.6112C15.9779 14.5722 15.7999 14.5728 15.6288 14.6128C15.3718 14.7193 15.2057 15.1216 15.0396 15.3228C15.0046 15.371 14.9531 15.4048 14.8949 15.4179C14.8366 15.431 14.7756 15.4224 14.7232 15.3938C13.7822 15.0262 12.9933 14.352 12.4849 13.4807C12.4416 13.4263 12.421 13.3573 12.4277 13.2881C12.4343 13.219 12.4676 13.1551 12.5205 13.1099C12.7058 12.927 12.8418 12.7004 12.916 12.4512C12.9324 12.1762 12.8693 11.9024 12.7341 11.6623C12.6295 11.3256 12.4305 11.0259 12.1606 10.7984C12.0214 10.736 11.8671 10.715 11.7162 10.7381C11.5654 10.7612 11.4244 10.8274 11.3104 10.9286C11.1125 11.0989 10.9553 11.3114 10.8506 11.5503C10.7459 11.7893 10.6963 12.0486 10.7053 12.3092C10.706 12.4555 10.7246 12.6012 10.7607 12.7431C10.8525 13.0838 10.9938 13.4094 11.1799 13.7095C11.3142 13.9393 11.4607 14.1619 11.6189 14.3761C12.1328 15.0798 12.7788 15.6773 13.521 16.1354C13.8935 16.3682 14.2916 16.5574 14.7074 16.6994C15.1394 16.8948 15.6163 16.9697 16.0876 16.9164C16.3561 16.8759 16.6105 16.7701 16.8284 16.6085C17.0463 16.4468 17.221 16.2343 17.3372 15.9894C17.4055 15.8415 17.4262 15.6762 17.3965 15.5161C17.3253 15.1887 16.8864 14.9954 16.6175 14.8376Z"
                        fill="#00D95F"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="javascript:;"
                    className="group transition-all duration-500"
                  >
                    <svg
                      className="transition-all duration-300 group-hover:scale-110"
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.00439453 4.63403C0.00439453 2.42489 1.79526 0.634033 4.00439 0.634033H24.0044C26.2135 0.634033 28.0044 2.42489 28.0044 4.63403V24.634C28.0044 26.8432 26.2135 28.634 24.0044 28.634H4.00439C1.79526 28.634 0.00439453 26.8432 0.00439453 24.634V4.63403Z"
                        fill="#E5F7FF"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M21.7213 15.4891C21.7213 19.7139 18.2964 23.1387 14.0716 23.1387C9.84677 23.1387 6.42188 19.7139 6.42188 15.4891C6.42188 11.2642 9.84677 7.83936 14.0716 7.83936C18.2964 7.83936 21.7213 11.2642 21.7213 15.4891ZM14.8046 13.1418C13.4904 13.7094 9.70117 15.3215 9.70117 15.3215C8.80315 15.6848 9.32879 16.0254 9.32879 16.0254C9.32879 16.0254 10.0954 16.2979 10.7525 16.5022C11.4096 16.7065 11.7601 16.4795 11.7601 16.4795C11.7601 16.4795 13.2933 15.435 14.8484 14.3225C15.9436 13.5505 15.6808 14.1862 15.4179 14.4587C14.8484 15.0491 13.9066 15.98 13.1181 16.7293C12.7676 17.0472 12.9429 17.3196 13.0962 17.4558C13.5421 17.847 14.5923 18.5583 15.0692 18.8813C15.2013 18.9708 15.2894 19.0304 15.3084 19.0452C15.4179 19.1361 16.0312 19.5448 16.4036 19.4539C16.7759 19.3631 16.8197 18.8409 16.8197 18.8409C16.8197 18.8409 17.1045 16.979 17.3673 15.2761C17.416 14.9417 17.4647 14.6144 17.5101 14.3091C17.6281 13.5158 17.7238 12.8718 17.7397 12.6422C17.8054 11.8703 17.0169 12.1881 17.0169 12.1881C17.0169 12.1881 15.3084 12.9147 14.8046 13.1418Z"
                        fill="#34AADF"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className=" relative">
              <img
                src="https://cdn.mypanel.link/affa8f/tma98dtb0qrpp2zy.webp"
                alt=""
                className=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* section 2  */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <span className="py-1 px-4 bg-indigo-100 rounded-full text-xs font-medium text-indigo-600 text-center">
              Features
            </span>
            <h2 className="text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-tr from-indigo-600 to-violet-600 py-5">
              What We Offer
            </h2>
            <p className="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto cap">
              Because it’s Rediprofiles that provides you with everything you
              need to have a wonderful social media trading experience.
            </p>
          </div>
          <div className="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
            <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
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
            <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
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
            <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
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
            <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
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
      </section>

      {/* Section 3 */}
      <section className="py-24 relative border-t">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-start xl:gap-36 lg:gap-20 gap-10 flex lg:flex-row flex-col">
            <div className="lg:max-w-lg mx-auto md:px-14 px-8 md:py-20 py-11 bg-gradient-to-br from-indigo-100 via-transparent to-violet-50 rounded-2xl flex-col lg:justify-start justify-center lg:items-start items-center gap-4 inline-flex">
              <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                <h2 className="lg:max-w-sm text-gray-900 text-4xl font-bold font-manrope text-transparent bg-clip-text bg-gradient-to-tr from-indigo-700 to-violet-600 leading-normal lg:text-start text-center">
                  A Guide to How It Works
                </h2>
                <p className="max-w-2xl text-gray-500 text-lg font-normal leading-relaxed lg:text-start text-center">
                  Embark on a journey of understanding with our comprehensive
                  guide to how it.
                </p>
              </div>
            </div>
            <div className="w-full flex-col justify-start items-start gap-8 inline-flex">
              <div className="w-full justify-start items-start gap-8 grid md:grid-cols-2 grid-cols-1">
                <div className="group w-full flex-col justify-start md:items-start items-center gap-5 inline-flex">
                  <div className="h-12 w-[47px] bg-indigo-50 group-hover:bg-indigo-100 transition-all duration-700 ease-in-out rounded flex-col justify-center items-center gap-2.5 flex">
                    <h3 className="text-indigo-600 text-2xl font-bold font-manrope leading-9">
                      1
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
                <div className="group w-full flex-col justify-start md:items-start items-center gap-5 inline-flex">
                  <div className="h-12 w-[47px] bg-indigo-50 group-hover:bg-indigo-100 transition-all duration-700 ease-in-out rounded flex-col justify-center items-center gap-2.5 flex">
                    <h3 className="text-indigo-600 text-2xl font-bold font-manrope leading-9">
                      2
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
              </div>
              <div className="w-full justify-start items-start gap-8 grid md:grid-cols-2 grid-cols-1">
                <div className="group w-full flex-col justify-start md:items-start items-center gap-5 inline-flex">
                  <div className="h-12 w-[47px] bg-indigo-50 group-hover:bg-indigo-100 transition-all duration-700 ease-in-out rounded flex-col justify-center items-center gap-2.5 flex">
                    <h3 className="text-indigo-600 text-2xl font-bold font-manrope leading-9">
                      3
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
                <div className="group w-full flex-col justify-start md:items-start items-center gap-5 inline-flex">
                  <div className="h-12 w-[47px] bg-indigo-50 group-hover:bg-indigo-100 transition-all duration-700 ease-in-out rounded flex-col justify-center items-center gap-2.5 flex">
                    <h3 className="text-indigo-600 text-2xl font-bold font-manrope leading-9">
                      4
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

      <section className="relative py-24 bg-gradient-to-br from-indigo-50 via-transparent to-indigo-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-lg font-medium leading-8 text-gray-500 text-center w-full mb-6">
            Testimonial
          </div>
          <h2 className="font-manrope font-bold text-4xl leading-snug text-transparent bg-clip-text bg-gradient-to-tr from-indigo-600 to-violet-600 text-center mb-24">
            Transformative Client Experiences
          </h2>

          <div className="swiper pagedone swiper-initialized swiper-horizontal swiper-backface-hidden">
            <div
              className="swiper-wrapper"
              id="swiper-wrapper-d5ce3fdde525f18a"
              aria-live="off"
              style={{
                transitionDuration: "0ms",
                transform: "translate3d(-2530px, 0px, 0px)",
                transitionDelay: "0ms",
              }}
            >
              <div
                className="swiper-slide swiper-slide-next"
                style={{ width: 474, marginRight: 32 }}
                role="group"
                aria-label="2 / 6"
                data-swiper-slide-index="1"
              >
                <div
                  className="rounded-3xl pt-11 px-6 flex justify-between flex-col h-[450px] sm:h-[420px] relative bg-cover bg-no-repeat bg-bottom max-md:max-w-md max-md:mx-auto"
                  style={{
                    backgroundImage:
                      "url(https://pagedone.io/asset/uploads/1711605498.png)",
                  }}
                >
                  <div className="block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="46"
                      height="46"
                      viewBox="0 0 46 46"
                      fill="none"
                    >
                      <path
                        d="M19.8058 3.50977V11.1857C19.8058 12.2267 18.9619 13.0702 17.9208 13.0702C14.2066 13.0702 12.1862 16.8797 11.9062 24.3985H17.9208C18.9619 24.3985 19.8058 25.2427 19.8058 26.2834V42.4907C19.8058 43.5312 18.9619 44.3749 17.9208 44.3749H1.88452C0.843101 44.3749 0 43.5306 0 42.4907V26.2834C0 22.679 0.36291 19.3715 1.07832 16.4515C1.81205 13.4574 2.93833 10.8395 4.4249 8.67037C5.95455 6.44112 7.86793 4.6918 10.1123 3.47313C12.3719 2.24709 14.9995 1.62524 17.9215 1.62524C18.9619 1.62524 19.8058 2.46874 19.8058 3.50977ZM44.1149 13.0704C45.1555 13.0704 46 12.2261 46 11.1858V3.5099C46 2.46887 45.1556 1.62538 44.1149 1.62538C41.1941 1.62538 38.5661 2.24736 36.3074 3.47327C34.0626 4.69193 32.1481 6.44125 30.6182 8.6705C29.1322 10.8397 28.0059 13.4576 27.272 16.4524C26.557 19.3733 26.1941 22.6809 26.1941 26.2835V42.4909C26.1941 43.5314 27.0383 44.375 28.079 44.375H44.1148C45.1553 44.375 45.9991 43.5307 45.9991 42.4909V26.2834C45.9991 25.2429 45.1554 24.3985 44.1148 24.3985H38.186C38.4618 16.8799 40.4526 13.0704 44.1149 13.0704Z"
                        fill="#D1D5DB"
                      ></path>
                    </svg>
                    <h4 className="font-manrope text-2xl sm:text-3xl font-medium leading-snug text-black mt-8 ">
                      A seamless experience from start to finish. Highly
                      recommend!
                    </h4>
                  </div>
                  <div className="absolute bottom-0 left-0 bg-transparent p-3 rounded-tr-2xl w-max flex items-center gap-5 ">
                    <img
                      src="https://pagedone.io/asset/uploads/1711605475.png"
                      alt=""
                    />
                    <div className="block">
                      <h6 className="text-base font-semibold text-gray-900 mb-1">
                        Karla Lynn
                      </h6>
                      <p className="text-sm font-normal text-gray-500">
                        @karlalynn98
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide"
                style={{ width: 474, marginRight: 32 }}
                role="group"
                aria-label="3 / 6"
                data-swiper-slide-index="2"
              >
                <div
                  className="rounded-3xl pt-11 px-6 flex justify-between flex-col h-[450px] sm:h-[420px]  relative bg-cover bg-no-repeat bg-bottom max-md:max-w-md max-md:mx-auto"
                  style={{
                    backgroundImage:
                      "url(https://pagedone.io/asset/uploads/1711605498.png)",
                  }}
                >
                  <div className="block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="46"
                      height="46"
                      viewBox="0 0 46 46"
                      fill="none"
                    >
                      <path
                        d="M19.8058 3.50977V11.1857C19.8058 12.2267 18.9619 13.0702 17.9208 13.0702C14.2066 13.0702 12.1862 16.8797 11.9062 24.3985H17.9208C18.9619 24.3985 19.8058 25.2427 19.8058 26.2834V42.4907C19.8058 43.5312 18.9619 44.3749 17.9208 44.3749H1.88452C0.843101 44.3749 0 43.5306 0 42.4907V26.2834C0 22.679 0.36291 19.3715 1.07832 16.4515C1.81205 13.4574 2.93833 10.8395 4.4249 8.67037C5.95455 6.44112 7.86793 4.6918 10.1123 3.47313C12.3719 2.24709 14.9995 1.62524 17.9215 1.62524C18.9619 1.62524 19.8058 2.46874 19.8058 3.50977ZM44.1149 13.0704C45.1555 13.0704 46 12.2261 46 11.1858V3.5099C46 2.46887 45.1556 1.62538 44.1149 1.62538C41.1941 1.62538 38.5661 2.24736 36.3074 3.47327C34.0626 4.69193 32.1481 6.44125 30.6182 8.6705C29.1322 10.8397 28.0059 13.4576 27.272 16.4524C26.557 19.3733 26.1941 22.6809 26.1941 26.2835V42.4909C26.1941 43.5314 27.0383 44.375 28.079 44.375H44.1148C45.1553 44.375 45.9991 43.5307 45.9991 42.4909V26.2834C45.9991 25.2429 45.1554 24.3985 44.1148 24.3985H38.186C38.4618 16.8799 40.4526 13.0704 44.1149 13.0704Z"
                        fill="#D1D5DB"
                      ></path>
                    </svg>
                    <h4 className="font-manrope text-2xl sm:text-3xl font-medium leading-snug text-black mt-8 ">
                      Reliable and trustworthy. Made my life so much easier!
                    </h4>
                  </div>
                  <div className="absolute bottom-0 left-0 bg-transparent p-3 rounded-tr-2xl w-max flex items-center gap-5 ">
                    <img
                      src="https://pagedone.io/asset/uploads/1711605485.png"
                      alt=""
                    />
                    <div className="block">
                      <h6 className="text-base font-semibold text-gray-900 mb-1">
                        Jane Cooper
                      </h6>
                      <p className="text-sm font-normal text-gray-500">
                        @janecooper
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide"
                style={{ width: 474, marginRight: 32 }}
                role="group"
                aria-label="4 / 6"
                data-swiper-slide-index="3"
              >
                <div
                  className="rounded-3xl pt-11 px-6 flex justify-between flex-col h-[450px] sm:h-[420px] relative bg-cover bg-bottom bg-no-repeat max-md:max-w-md max-md:mx-auto"
                  style={{
                    backgroundImage:
                      "url(https://pagedone.io/asset/uploads/1711605498.png)",
                  }}
                >
                  <div className="block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="46"
                      height="46"
                      viewBox="0 0 46 46"
                      fill="none"
                    >
                      <path
                        d="M19.8058 3.50977V11.1857C19.8058 12.2267 18.9619 13.0702 17.9208 13.0702C14.2066 13.0702 12.1862 16.8797 11.9062 24.3985H17.9208C18.9619 24.3985 19.8058 25.2427 19.8058 26.2834V42.4907C19.8058 43.5312 18.9619 44.3749 17.9208 44.3749H1.88452C0.843101 44.3749 0 43.5306 0 42.4907V26.2834C0 22.679 0.36291 19.3715 1.07832 16.4515C1.81205 13.4574 2.93833 10.8395 4.4249 8.67037C5.95455 6.44112 7.86793 4.6918 10.1123 3.47313C12.3719 2.24709 14.9995 1.62524 17.9215 1.62524C18.9619 1.62524 19.8058 2.46874 19.8058 3.50977ZM44.1149 13.0704C45.1555 13.0704 46 12.2261 46 11.1858V3.5099C46 2.46887 45.1556 1.62538 44.1149 1.62538C41.1941 1.62538 38.5661 2.24736 36.3074 3.47327C34.0626 4.69193 32.1481 6.44125 30.6182 8.6705C29.1322 10.8397 28.0059 13.4576 27.272 16.4524C26.557 19.3733 26.1941 22.6809 26.1941 26.2835V42.4909C26.1941 43.5314 27.0383 44.375 28.079 44.375H44.1148C45.1553 44.375 45.9991 43.5307 45.9991 42.4909V26.2834C45.9991 25.2429 45.1554 24.3985 44.1148 24.3985H38.186C38.4618 16.8799 40.4526 13.0704 44.1149 13.0704Z"
                        fill="#D1D5DB"
                      ></path>
                    </svg>
                    <h4 className="font-manrope text-2xl sm:text-3xl font-medium leading-snug text-black mt-8 ">
                      Impressed by the professionalism and attention to detail.
                    </h4>
                  </div>
                  <div className="absolute bottom-0 left-0 bg-transparent p-3 rounded-tr-2xl w-max flex items-center gap-5 ">
                    <img
                      src="https://pagedone.io/asset/uploads/1711605463.png"
                      alt=""
                    />
                    <div className="block">
                      <h6 className="text-base font-semibold text-gray-900 mb-1">
                        Guy Hawkins
                      </h6>
                      <p className="text-sm font-normal text-gray-500">
                        @guyhawkins
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide"
                style={{ width: 474, marginRight: 32 }}
                role="group"
                aria-label="5 / 6"
                data-swiper-slide-index="4"
              >
                <div
                  className="rounded-3xl pt-11 px-6 flex justify-between flex-col h-[450px] sm:h-[420px] relative bg-cover bg-no-repeat bg-bottom max-md:max-w-md max-md:mx-auto"
                  style={{
                    backgroundImage:
                      "url(https://pagedone.io/asset/uploads/1711605498.png)",
                  }}
                >
                  <div className="block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="46"
                      height="46"
                      viewBox="0 0 46 46"
                      fill="none"
                    >
                      <path
                        d="M19.8058 3.50977V11.1857C19.8058 12.2267 18.9619 13.0702 17.9208 13.0702C14.2066 13.0702 12.1862 16.8797 11.9062 24.3985H17.9208C18.9619 24.3985 19.8058 25.2427 19.8058 26.2834V42.4907C19.8058 43.5312 18.9619 44.3749 17.9208 44.3749H1.88452C0.843101 44.3749 0 43.5306 0 42.4907V26.2834C0 22.679 0.36291 19.3715 1.07832 16.4515C1.81205 13.4574 2.93833 10.8395 4.4249 8.67037C5.95455 6.44112 7.86793 4.6918 10.1123 3.47313C12.3719 2.24709 14.9995 1.62524 17.9215 1.62524C18.9619 1.62524 19.8058 2.46874 19.8058 3.50977ZM44.1149 13.0704C45.1555 13.0704 46 12.2261 46 11.1858V3.5099C46 2.46887 45.1556 1.62538 44.1149 1.62538C41.1941 1.62538 38.5661 2.24736 36.3074 3.47327C34.0626 4.69193 32.1481 6.44125 30.6182 8.6705C29.1322 10.8397 28.0059 13.4576 27.272 16.4524C26.557 19.3733 26.1941 22.6809 26.1941 26.2835V42.4909C26.1941 43.5314 27.0383 44.375 28.079 44.375H44.1148C45.1553 44.375 45.9991 43.5307 45.9991 42.4909V26.2834C45.9991 25.2429 45.1554 24.3985 44.1148 24.3985H38.186C38.4618 16.8799 40.4526 13.0704 44.1149 13.0704Z"
                        fill="#D1D5DB"
                      ></path>
                    </svg>
                    <h4 className="font-manrope text-2xl sm:text-3xl font-medium leading-snug text-black mt-8 ">
                      A seamless experience from start to finish. Highly
                      recommend!
                    </h4>
                  </div>
                  <div className="absolute bottom-0 left-0 bg-transparent p-3 rounded-tr-2xl w-max flex items-center gap-5 ">
                    <img
                      src="https://pagedone.io/asset/uploads/1711605475.png"
                      alt=""
                    />
                    <div className="block">
                      <h6 className="text-base font-semibold text-gray-900 mb-1">
                        Karla Lynn
                      </h6>
                      <p className="text-sm font-normal text-gray-500">
                        @karlalynn98
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-prev"
                role="group"
                aria-label="6 / 6"
                style={{ width: 474, marginRight: 32 }}
                data-swiper-slide-index="5"
              >
                <div
                  className="rounded-3xl pt-11 px-6 flex justify-between flex-col h-[450px] sm:h-[420px]  relative bg-cover bg-no-repeat bg-bottom max-md:max-w-md max-md:mx-auto"
                  style={{
                    backgroundImage:
                      "url(https://pagedone.io/asset/uploads/1711605498.png)",
                  }}
                >
                  <div className="block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="46"
                      height="46"
                      viewBox="0 0 46 46"
                      fill="none"
                    >
                      <path
                        d="M19.8058 3.50977V11.1857C19.8058 12.2267 18.9619 13.0702 17.9208 13.0702C14.2066 13.0702 12.1862 16.8797 11.9062 24.3985H17.9208C18.9619 24.3985 19.8058 25.2427 19.8058 26.2834V42.4907C19.8058 43.5312 18.9619 44.3749 17.9208 44.3749H1.88452C0.843101 44.3749 0 43.5306 0 42.4907V26.2834C0 22.679 0.36291 19.3715 1.07832 16.4515C1.81205 13.4574 2.93833 10.8395 4.4249 8.67037C5.95455 6.44112 7.86793 4.6918 10.1123 3.47313C12.3719 2.24709 14.9995 1.62524 17.9215 1.62524C18.9619 1.62524 19.8058 2.46874 19.8058 3.50977ZM44.1149 13.0704C45.1555 13.0704 46 12.2261 46 11.1858V3.5099C46 2.46887 45.1556 1.62538 44.1149 1.62538C41.1941 1.62538 38.5661 2.24736 36.3074 3.47327C34.0626 4.69193 32.1481 6.44125 30.6182 8.6705C29.1322 10.8397 28.0059 13.4576 27.272 16.4524C26.557 19.3733 26.1941 22.6809 26.1941 26.2835V42.4909C26.1941 43.5314 27.0383 44.375 28.079 44.375H44.1148C45.1553 44.375 45.9991 43.5307 45.9991 42.4909V26.2834C45.9991 25.2429 45.1554 24.3985 44.1148 24.3985H38.186C38.4618 16.8799 40.4526 13.0704 44.1149 13.0704Z"
                        fill="#D1D5DB"
                      ></path>
                    </svg>
                    <h4 className="font-manrope text-2xl sm:text-3xl font-medium leading-snug text-black mt-8 ">
                      Reliable and trustworthy. Made my life so much easier!
                    </h4>
                  </div>
                  <div className="absolute bottom-0 left-0 bg-transparent p-3 rounded-tr-2xl w-max flex items-center gap-5 ">
                    <img
                      src="https://pagedone.io/asset/uploads/1711605485.png"
                      alt=""
                    />
                    <div className="block">
                      <h6 className="text-base font-semibold text-gray-900 mb-1">
                        Jane Cooper
                      </h6>
                      <p className="text-sm font-normal text-gray-500">
                        @janecooper
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-active"
                style={{ width: 474, marginRight: 32 }}
                role="group"
                aria-label="1 / 6"
                data-swiper-slide-index="0"
              >
                <div
                  className="rounded-3xl pt-11 px-6 flex justify-between flex-col h-[450px] sm:h-[420px] relative bg-cover bg-bottom bg-no-repeat max-md:max-w-md max-md:mx-auto"
                  style={{
                    backgroundImage:
                      "url(https://pagedone.io/asset/uploads/1711605498.png)",
                  }}
                >
                  <div className="block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="46"
                      height="46"
                      viewBox="0 0 46 46"
                      fill="none"
                    >
                      <path
                        d="M19.8058 3.50977V11.1857C19.8058 12.2267 18.9619 13.0702 17.9208 13.0702C14.2066 13.0702 12.1862 16.8797 11.9062 24.3985H17.9208C18.9619 24.3985 19.8058 25.2427 19.8058 26.2834V42.4907C19.8058 43.5312 18.9619 44.3749 17.9208 44.3749H1.88452C0.843101 44.3749 0 43.5306 0 42.4907V26.2834C0 22.679 0.36291 19.3715 1.07832 16.4515C1.81205 13.4574 2.93833 10.8395 4.4249 8.67037C5.95455 6.44112 7.86793 4.6918 10.1123 3.47313C12.3719 2.24709 14.9995 1.62524 17.9215 1.62524C18.9619 1.62524 19.8058 2.46874 19.8058 3.50977ZM44.1149 13.0704C45.1555 13.0704 46 12.2261 46 11.1858V3.5099C46 2.46887 45.1556 1.62538 44.1149 1.62538C41.1941 1.62538 38.5661 2.24736 36.3074 3.47327C34.0626 4.69193 32.1481 6.44125 30.6182 8.6705C29.1322 10.8397 28.0059 13.4576 27.272 16.4524C26.557 19.3733 26.1941 22.6809 26.1941 26.2835V42.4909C26.1941 43.5314 27.0383 44.375 28.079 44.375H44.1148C45.1553 44.375 45.9991 43.5307 45.9991 42.4909V26.2834C45.9991 25.2429 45.1554 24.3985 44.1148 24.3985H38.186C38.4618 16.8799 40.4526 13.0704 44.1149 13.0704Z"
                        fill="#D1D5DB"
                      ></path>
                    </svg>
                    <h4 className="font-manrope text-2xl sm:text-3xl font-medium leading-snug text-black mt-8 ">
                      Impressed by the professionalism and attention to detail.
                    </h4>
                  </div>
                  <div className="absolute bottom-0 left-0 bg-transparent p-3 rounded-tr-2xl w-max flex items-center gap-5 ">
                    <img
                      src="https://pagedone.io/asset/uploads/1711605463.png"
                      alt=""
                    />
                    <div className="block">
                      <h6 className="text-base font-semibold text-gray-900 mb-1">
                        Guy Hawkins
                      </h6>
                      <p className="text-sm font-normal text-gray-500">
                        @guyhawkins
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
            <span
              className="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            ></span>
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
            <div className=" group flex gap-4 w-full flex-col p-5 transition-all duration-500 rounded-t-2xl md:rounded-tl-2xl md:rounded-tr-none border-b border-r-0 md:border-r border-solid border-gray-200 lg:p-10 lg:flex-row lg:gap-6 hover:bg-indigo-800">
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
            <div className="group flex gap-4 w-full flex-col p-5 transition-all duration-500 rounded-none md:rounded-tr-2xl border-b border-solid border-gray-200  lg:p-10 lg:flex-row lg:gap-6 hover:bg-indigo-800">
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
            <div className="group flex gap-4 w-full flex-col p-5 transition-all duration-500 rounded-none md:rounded-bl-2xl border-r-0 md:border-r border-b md:border-b-0 border-solid border-gray-200 lg:p-10 lg:flex-row lg:gap-6 hover:bg-indigo-800">
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
            <div className="group flex gap-4 w-full flex-col p-5 transition-all duration-500 rounded-br-2xl lg:rounded-br-2xl lg:p-10 lg:flex-row lg:gap-6 hover:bg-indigo-800">
              <div className="relative w-10 md:w-16 h-10 md:h-16 bg-indigo-700 rounded-full flex items-center justify-center flex-none group-hover:bg-white">
                <svg
                  className="w-6 h-6 text-white group-hover:text-indigo-00"
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
