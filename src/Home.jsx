import horseImage from "/New-home-banner.jpg";

const Home = () => {
  return (
    <div className="bg-gray-100 flex flex-col justify-center items-center">
      <section className="w-full relative">
        <img
          className="w-full h-96 object-cover object-top"
          src={horseImage}
          alt="Horse banner"
        />
        <div className="absolute text-center top-0 left-0 w-full h-full bg-black bg-opacity-25 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to Refuge - Les Chevaux D'Espoir!
          </h1>
          <p className="text-lg text-white mb-8">
            Make a horse's dreams come true, give it the hope of a second
            chance!
          </p>
          <a
            href="/support"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            Donate Now
          </a>
        </div>
      </section>
      <section className="max-w-3xl mx-auto mt-8 text-center sm:text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-600 mb-8">
          Our rescue's mission is to save as many horses as possible. We save
          horses on their way to the slaughterhouse, with urgent medical needs,
          or that have been abandoned, in order to give them a second chance at
          life
        </p>
      </section>
      <div className=" pb-16 pt-24 sm:pb-24 sm:pt-32 xl:pb-32 w-full relative">
        <div className="bg-gray-900 pb-20 sm:pb-24 xl:pb-0">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
            <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
              <div className="relative h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                <img
                  className="absolute inset-0 h-full w-full rounded-2xl bg-gray-100 object-fill shadow-2xl border-solid border-2 border-gray-300"
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
                <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                  <p>
                    The Refuge was started on the 10 of december 2021. We have
                    saved more than 25 Horses!
                  </p>
                </blockquote>
                <figcaption className="mt-8 text-base">
                  <div className="font-semibold text-white">Nève Lavigne </div>
                  <div className="mt-1 text-gray-400">
                    Founder of Refuge-Les Chevaux D'espoir!
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
      <section className="max-w-3xl mx-auto mt-8 text-center sm:text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          How You Can Help?
        </h2>
        <div className=" py-20 sm:py-20 w-full relative">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
              <div className="bg-gray-800 p-8 sm:p-10">
                <a
                  className="text-white font-bold py-2 px-4 text-lg"
                  href="/support"
                >
                  Donate
                </a>
              </div>
              <div className="bg-gray-800 p-6 sm:p-10">
                <h1 className="text-white font-bold py-2 px-4 text-lg">
                  Store
                </h1>
              </div>
              <div className="bg-gray-800 p-6 sm:p-10">
                <h1 className="text-white font-bold py-2 px-4 text-lg">
                  Sponsor/Adopt
                </h1>
              </div>
              <div className="bg-gray-800 p-6 sm:p-10">
                <h1 className="text-white font-bold py-2 px-4 text-lg">
                  Events
                </h1>
              </div>
              <div className="bg-gray-800 p-6 sm:p-10">
                <h1 className="text-white font-bold py-2 px-4 text-lg">
                  Our sponsors
                </h1>
              </div>
              <div className="bg-gray-800 p-6 sm:p-10">
                <h1 className="text-white font-bold py-2 px-4 text-lg">
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
