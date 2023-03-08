const features = [
  {
    name: "La belle Sacha",
    description:
      "I present to you Sacha, a 15-year-old, 13.3 hands QHx. She is sweet, calm, and respectful. She has a lot of experience with people, making her perfect for someone who is new to the horse world. Unfortunately, Sacha must be adopted as a companion or for liberty work, due to a tendon problem in her hind leg and advanced arthritis in her front fetlocks. She requires medication and outdoor living conditions that must be respected. She loves to be groomed, receive love, and be in the company of her friends. Please help us find a forever family for her.",
    imageSrc: "/Sacha3.jpg",
    imageAlt:
      "White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.",
  },
  {
    name: "King",
    description:
      "Meet King, the big-hearted Paint Horse who is now available for adoption! Despite his age, estimated to be around 18-19 years old based on his teeth, King still exudes a youthful spirit that will warm your heart. At 16.1 hands, he's an imposing figure with a gentle personality that is sure to win over anyone who meets him. However, due to advanced arthritis in both hocks, King's mobility is limited, and he needs to find a family who will respect his physical limitations. After competing in recent years, King has developed several tendonitis and suspensory branch lesions, which means he can only handle very light work such as walking and trotting, ground work, or serving as a companion horse.",
    imageSrc: "/king3.jpg",
    imageAlt: "Detail of zipper pull with tan leather and silver rivet.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Horses() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet Our Horses
          </h2>
          <p className="mt-4 text-gray-500">
            Meet our horses, the heart and soul of our rescue . Our horses are
            ready to capture your heart and make a lasting impression, , and we
            are sure that you will fall in love with them just as we have.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {features.map((feature, featureIdx) => (
            <div
              key={feature.name}
              className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
            >
              <div
                className={classNames(
                  featureIdx % 2 === 0
                    ? "lg:col-start-1"
                    : "lg:col-start-8 xl:col-start-9",
                  "mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4"
                )}
              >
                <h3 className="text-lg text-center font-medium text-gray-900">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm text-center text-gray-500">
                  {feature.description}
                </p>
              </div>
              <div
                className={classNames(
                  featureIdx % 2 === 0
                    ? " lg:col-start-6 xl:col-start-5"
                    : "lg:col-start-1",
                  "flex-auto lg:col-span-7  lg:row-start-1 xl:col-span-8"
                )}
              >
                <div className="aspect-w-3 aspect-h-2 shadow-2xl overflow-hidden rounded-lg bg-gray-200">
                  <img
                    src={feature.imageSrc}
                    alt={feature.imageAlt}
                    className="object-center object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
