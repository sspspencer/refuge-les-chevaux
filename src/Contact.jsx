import Map from "./Map";
import { HomeIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function Contact() {
  return (
    <div className="bg-white  ">
      <section className="w-full relative">
        <img
          className="w-full h-128 object-cover object-top sm:object-center"
          src="/horse-banner-hero2.jpg"
          alt="Horse banner"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold text-white mb-4">Get in touch</h1>
          <p className="text-xl text-white mb-8 max-w-lg text-center ">
            There are many ways to join us and support our mission. Contact us
            to find out more about volunteer opportunities, fundraising events,
            and ways that you can get our message to your friends and family.
          </p>
        </div>
      </section>
      <div className="relative isolate bg-white ">
        <div className="mx-auto grid  grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:py-48 lg:px-8">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
                <svg
                  className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                      width={200}
                      height={200}
                      x="100%"
                      y={-1}
                      patternUnits="userSpaceOnUse"
                    >
                      <path d="M130 200V.5M.5 .5H200" fill="none" />
                    </pattern>
                  </defs>
                  <rect
                    width="100%"
                    height="100%"
                    strokeWidth={0}
                    fill="white"
                  />
                  <svg
                    x="100%"
                    y={-1}
                    className="overflow-visible fill-gray-50"
                  >
                    <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                  </svg>
                  <rect
                    width="100%"
                    height="100%"
                    strokeWidth={0}
                    fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                  />
                </svg>
              </div>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                Be the one that makes a difference to a horse that just needs
                love, food and a home.
              </p>
              <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <HomeIcon
                      className="h-7 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    270 Pattee rd, Hawkesbury
                    <br />
                    Ontario, Canada, K6A 0E8
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <PhoneIcon
                      className="h-7 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      className="hover:text-gray-900"
                      href="tel:+1 (613) 307-2312"
                    >
                      +1 (613) 307-2312
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <EnvelopeIcon
                      className="h-7 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      className="hover:text-gray-900"
                      href="mailto:hello@example.com"
                    >
                      refugeleschevauxdespoir@gmail.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div>
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
}
