const Sponsors = [
  {
    name: "Roxanne Auclair Hoof Care Services",
    imageUrl: "/sponsor_1.jpg",
    socialUrl: "https://www.facebook.com/profile.php?id=100064054483870",
  },
  {
    name: "Whole Printing",
    imageUrl: "/sponsor_2.png",
    socialUrl: "https://wprinting.ca/",
  },
  {
    name: "Au Sommet De La Lutte",
    imageUrl: "/sponsor_3.jpg",
    socialUrl:
      "https://www.facebook.com/people/Au-Sommet-de-la-Lutte/100063365190416/",
  },
  {
    name: "Massothérapie Équine - Nève Lavigne",
    imageUrl: "/sponsor_4.jpg",
    socialUrl: "https://www.facebook.com/profile.php?id=100057175731055",
  },
  // More sponsors...
];

const About = () => {
  return (
    <div className="bg-white py-24 md:py-32 lg:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Sponsors
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            As a non-profit organization we rely on the kindness and generosity
            of volunteers, donors, and sponsors. Without their support, our
            organization would not be able to meet our goals or accomplish what
            we do best.
          </p>
          <br />
          <p>
            To find out more on how to become an offical Sponsor, Please get in
            touch.
          </p>
          <br />
          <a
            href="/contact"
            name="contact us"
            className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
          >
            Contact Us
          </a>
        </div>
        <ul
          role="list"
          className="mx-auto grid max-w-5xl grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-2  lg:mx-0 lg:max-w-none lg:gap-x-32 xl:col-span-1"
        >
          {Sponsors.map((sponsor) => (
            <li
              key={sponsor.name}
              className="border border-gray-500 rounded-lg h-56 w-36 hover:opacity-60 sm:h-64 sm:w-44 shadow-2xl xl:ml-60"
            >
              <a
                href={sponsor.socialUrl}
                target="_blank"
                className="text-gray-400 h-full w-full hover:text-gray-500"
              >
                <img
                  className="h-full w-full  object-contain object-center"
                  src={sponsor.imageUrl}
                  alt={sponsor.name}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
