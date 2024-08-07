const features = [
  {
    name: "Sacha",
    description:
      "Hi,My name is Sasha. I was born in 2006. I am a mixed breed horse. I was in an emergency situation. My owner was about to euthanize me because he could no longer take care of me, so the shelter quickly came to my aid to prevent that from happening. I have multiple personalities depending on the other horses or humans. Despite my multiple personalities, I am a very kind horse. I like being brushed and cuddled",
    problemTitle: "My Health Problems",
    problemDescripton:
      "My 4 suspensors are remodeled because they have been working too long like that. Due to this problem I have a lot of arthritis and inflammation.",
    imageSrc: "/Sacha3.jpg",
    imageAlt:
      "White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.",
  },
  {
    name: "Zeus",
    description:
      "Hi,My name is Zeus. I was born on April 20th 1998. I am the oldest horse in the shelter! I am a solid paint horse. I was misunderstood in my pain by my humans so the shelter took me under its wing to be able to understand the pain I felt. I love living in my old days with all the wonderful people at the shelter! I am a rather independent horse. I love being brushed and receiving treats. I love to smile and make silly faces, as you can see in my picture!",
    problemTitle: "My Health Problems",
    problemDescripton:
      "I have major problems with my teeth, which means that I am losing all of them and some of them are unfortunately fractured and rotten. I'm starting to get a little osteoarthritis but despite that I'm still a bomb in the field and despite my age I'm the fastest horse in my herd!",
    imageSrc: "/zeus.png",
    imageAlt:
      "White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.",
  },
  {
    name: "Bella",
    description:
      "Hi, My name is Bella. I was born in 2003. I am a quarter horse. The shelter took me on its wings given the condition I was in before arriving here. The shelter gave me the opportunity to have a second chance at life. I don't know much about humans but I enjoy being cuddled and brushed with lots of patience.",
    problemTitle: "My Health Problems",
    problemDescripton:
      "I have major problems with my back, feet and pelvis. I have a lot of rotten teeth, and they are unfortunately not very good.",
    imageSrc: "/bella.png",
    imageAlt:
      "White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.",
  },
  {
    name: "Flash",
    description:
      "Hi, My name is Flash. I was born on October 7, 2012. I am an oldenburg horse. I am in rehabilitation at the shelter. My story is private. I like humans and I love to be brushed and cuddled. I also love getting treats. ",
    problemTitle: "My Health Problems",
    problemDescripton:
      "I have major neurological problems which affect my cervicals and my vertebrae. I lost control of my posterior, Which also affected my digestive system.",
    imageSrc: "/flash.jpg",
    imageAlt:
      "White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.",
  },
  {
    name: "Federal",
    description:
      "Hi, My name is Federal. I was born on March 30th, 2007. I am a paint horse. The shelter came to my aid as I was in an emergency. I didn't believe I was going to survive where I was before. When I arrived at the shelter I was very thin. You could see my ribs. The shelter saved my life. I like getting cuddles and being brushed and I like to give love to the shelter volunteers.",
    problemTitle: "My Health Problems",
    problemDescripton:
      "I have a fractured pelvis as well as degeneration of osteoarthritis at the level of the patella and unfortunately I have almost no cartilage at the level of the kneecaps.",
    imageSrc: "/federal.png",
    imageAlt:
      "White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Horses() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-3xl flex flex-col text-center items-center justify-center ">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Support Our Horses
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            By joining our sponsorship program, you are giving our horses a
            better life, while sharing unforgettable moments with them. Whether
            you choose the basic package or the diamond, each involvement
            improves the care we can provide to our furry friends.🤎
          </p>
        </div>
        <div className="mx-auto max-w-3xl mt-20 flex flex-col text-center items-center justify-center ">
          <h2 className="text-3xl mb-10 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Sponsorship Tiers
          </h2>
          <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
            Bronze tier:
          </h2>
          <p className="mt-2 mb-4 text-gray-500">
            - 🎁 Welcome gift - 👀Access to the private Facebook group - Special
            launch rate (You keep this price for life): - The first 30 days:
            **$4.99/month** - After 30 days: **$9.99/month** - After 3 months:
            **$14.99/month** - **These starting prices are guaranteed for
            life!** So, if in 2 years, the prices increase to $40/month, you
            will continue to pay the rate you initially subscribed to.
          </p>
          <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
            Silver tier:
          </h2>
          <p className="mt-2 mb-4 text-gray-500">
            - 🎁 Welcome gift - 👀 Access to the private Facebook group - 🐴
            Visit 1x per month - ✨ Brushing 1x per month - **$49.99/month**
          </p>
          <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
            Gold tier:
          </h2>
          <p className="mt-2 mb-4 text-gray-500">
            - 🎁 Welcome gift - 👀 Access to the private Facebook group - ✨
            Brushing 1x per month - 🌾 2-hour session + learning how to care 1x
            per month - **$99.99/month**
          </p>
          <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
            Diamond tier:
          </h2>
          <p className="mt-2 mb-4 text-gray-500">
            - 🎁 Welcome gift - 👀 Access to the private Facebook group - ✨
            Brushing 1x per month - 🌾 2-hour session + learning how to care 1x
            per month - 🔮 Animal communication 1x per month - 🎟️ VIP entry to
            events - 📸 Right to 3 photos at each of our photoshoots -
            **$199.99/month**
          </p>
          <div className="h-1 w-3/5 mt-2 rounded-full bg-gray-200"></div>
        </div>

        <div className="mt-20 space-y-16">
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
                <h3 className="text-lg mt-4 text-center font-medium text-gray-900">
                  {feature.problemTitle}
                </h3>
                <p className="mt-2 text-sm text-center text-gray-500">
                  {feature.problemDescripton}
                </p>
                <h3 className="text-lg text-center my-4 font-medium text-gray-900">
                  Choose a Sponsorship tier:
                </h3>
                <a
                  href="#"
                  className=" h-10 bg-brown-500 mx-2  outline outline-2 outline-black  hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded"
                >
                  Bronze
                </a>
                <a
                  href="#"
                  className=" h-10 bg-blue-gray-200 mx-2  outline outline-2 outline-black  hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded"
                >
                  Silver
                </a>
                <a
                  href="#"
                  className=" h-10 bg-amber-400 mx-2  outline outline-2 outline-black  hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded"
                >
                  Gold
                </a>
                <a
                  href="#"
                  className=" h-10 bg-teal-100 mx-2  outline outline-2 outline-black  hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded"
                >
                  Diamond
                </a>
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
