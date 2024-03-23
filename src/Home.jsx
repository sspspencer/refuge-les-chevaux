import { Carousel } from "@material-tailwind/react";
const Home = () => {
  return (
    <div className="bg-[url('/Home-background3.jpg')] bg-contain  flex flex-col justify-center items-center">
      <section className="w-full h-128 relative flex shadow-2xl shadow-gray-900   ">
        <Carousel
          autoplay
          loop
          transition={{ duration: 2 }}
          className="h-128 w-full lg:w-1/2  rounded-xl lg:rounded-none"
        >
          <img
            src="/carousel2.jpg"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <img
            src="/carousel3.jpg"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src="/carousel4.jpg"
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
        <div className=" text-center absolute lg:relative    lg:top-0 lg:left-0 w-full h-full lg:w-1/2 bg-black bg-opacity-10 lg:bg-brown-50 flex flex-col justify-center items-center">
          <h1 className="text-8xl   font-bold text-yellow-100 lg:text-black  mb-4">
            Join the Ride
          </h1>
          <p className="text-3xl font-semibold font-sans text-gray-200 lg:text-gray-600 mb-8">
            Support & Become a Part of Our Equestrian Community
          </p>
          <div className="">
            <a
              href="/support"
              className=" h-10  bg-black mx-2  outline outline-2 outline-black  hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded"
            >
              Donate
            </a>

            <a
              href="/Contact"
              className="bg-white mx-2 outline outline-2 outline-gray-400  hover:bg-gray-100  text-black font-semibold py-2 px-4 rounded"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section className="   mx-auto w-full relative    text-center sm:text-center">
        <div className=" px-6 py-24  sm:py-28 lg:px-8 ">
          <div className="relative mx-auto h-128 w-full  text-center">
            <div className="mx-auto px-14 sm:px-20 md:px-32 lg:px-60 absolute top-1/4  z-10   text-center">
              <h2 className=" text-4xl sm:text-6xl lg:text-6xl xl:text-8xl mt-2 font-serif font-bold tracking-tight text-black ">
                Our Mission
              </h2>
              <p className="mt-3 font-sans md:text-lg lg:text-xl xl:text-2xl leading-7 text-black font-bold ">
                Our rescue's mission is to save as many horses as possible. We
                save horses on their way to the slaughterhouse, with urgent
                medical needs, or that have been abandoned, in order to give
                them a second chance at life
              </p>
              <a
                href="/about"
                className=" text-xs sm:text-md md:text-lg underline font-bold font-mono  text-black drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,1)]"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
            <img
              src="/white-brush-stroke1.png"
              alt=""
              className="absolute z-0 h-full opacity-95 w-full"
            ></img>
          </div>
          <div className=" invisible 2xl:visible   2xl:pt-28   sm:pb-24 2xl:pb-0 w-full relative h-0 2xl:h-auto  ">
            <div className=" pb-20 sm:pb-24 xl:pb-0">
              <div className="lg:mx-auto justify-center  flex max-w-7xl flex-col items-center gap-x-40 lg:gap-x-32 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch h-128">
                <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-128 xl:h-96 xl:flex-none">
                  <h1 className="pb-12 font-mono -rotate-3 text-4xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,1)] text-black">
                    Before
                  </h1>
                  <div className="relative h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                    <img
                      className="absolute -rotate-3 inset-0 h-full w-full rounded-2xl bg-gray-100 object-cover shadow-2xl border-solid border-2 border-gray-300"
                      src="/Home-before.jpg"
                      alt=""
                    />
                  </div>
                </div>

                <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-128 xl:h-96 xl:flex-none">
                  <h1 className="pb-12 font-mono text-4xl rotate-3 font-bold drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,1)] text-black">
                    After
                  </h1>
                  <div className="relative h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                    <img
                      className="absolute rotate-3 inset-0 h-full w-full rounded-2xl bg-gray-100 object-cover shadow-2xl border-solid border-2 border-gray-300"
                      src="/Home-after.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className=" pb-16   sm:pb-24 xl:pb-32 xl:mt-14 w-full relative">
        <div className="bg-blue-gray-900 pb-20 sm:pb-24 xl:pb-0 shadow-2xl">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
            <div className="invisible xl:visible -mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
              <div className="relative h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                <img
                  className="absolute -rotate-0 inset-0 h-full w-full rounded-2xl bg-gray-100 object-fill shadow-2xl border-solid border-2 border-gray-300"
                  src="/refuge-logo-original_1.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
              <figure className="relative isolate pt-6 sm:pt-12">
                <svg
                  viewBox="0 0 162 128"
                  fill="none"
                  aria-hidden="true"
                  className="absolute left-0 top-0 -z-10 h-32 stroke-white/20"
                >
                  <path
                    id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                    d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                  />
                  <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x={86} />
                </svg>
                <blockquote className="text-xl font-serif font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                  <p>
                    The Refuge was started on the 10 of december 2021. We have
                    saved more than 25 Horses!
                  </p>
                </blockquote>
                <figcaption className="mt-8 text-base">
                  <div className="font-semibold text-white font-serif">
                    Nève Lavigne{" "}
                  </div>
                  <div className="mt-1 text-gray-400">
                    Founder of Refuge-Les Chevaux D'espoir!
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
      <section className=" w-full relative mx-auto  text-center sm:text-center">
        <div className=" relative mx-auto h-72 w-full  text-center">
          <div className="mx-auto h-full  w-full  absolute top-1/2   z-10   text-center">
            <h2 className="  text-2xl sm:text-3xl md:text-4xl mt-2 font-serif font-bold tracking-tight text-black ">
              How You Can Help!
            </h2>
          </div>
          <img
            src="/white-brush-stroke1.png"
            alt=""
            className=" absolute z-0 h-full opacity-95 w-full lg:w-1/2 lg:left-1/4   "
          ></img>
        </div>
        <div className=" py-20 sm:py-20 w-full relative">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="-mx-6 shadow-2xl shadow-gray-700 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
              <div className="bg-blue-gray-900  p-8 sm:p-10">
                <a
                  className="text-white font-serif font-bold py-2 px-4 text-xl"
                  href="/support"
                >
                  Donate
                </a>
              </div>
              <div className="bg-blue-gray-900 p-6 sm:p-10">
                <h1 className="text-white font-bold py-2 px-4 font-serif text-xl">
                  Store
                </h1>
              </div>
              <div className="bg-blue-gray-900 p-6 sm:p-10">
                <h1 className="text-white font-bold py-2 px-4 font-serif text-xl">
                  Sponsor/Adopt
                </h1>
              </div>
              <div className="bg-blue-gray-900 p-6 sm:p-10">
                <h1 className="text-white font-bold py-2 px-4 font-serif text-xl">
                  Events
                </h1>
              </div>
              <div className="bg-blue-gray-900 p-6 sm:p-10">
                <h1 className="text-white font-bold py-2 px-4 font-serif text-xl">
                  Our sponsors
                </h1>
              </div>
              <div className="bg-blue-gray-900 p-6 sm:p-10">
                <h1 className="text-white font-bold py-2 px-4 font-serif text-xl">
                  Volunteer
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
