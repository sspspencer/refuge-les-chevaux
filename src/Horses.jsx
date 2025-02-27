const features = [
  {
    name: "Federal",
    description:
      "A Paint Horse born on March 30, 2007, was rescued by the shelter due to an emergency situation. His condition had progressed beyond the ability of his previous owners to manage. Upon arrival at the shelter, Fédéral was very underweight, with his ribs visibly showing.",
    problemTitle: "My Health Problems",
    problemDescripton:
      "Fédéral suffers from severe neurological issues that have led to arthritis in his cervical vertebrae and problems with his supraspinous ligaments. He experiences posterior imbalance and has a unique gait, which also affects his digestive system. As a result, he requires a highly specific diet to address the numerous nutritional deficiencies caused by these issues.",
    imageSrc: "/federal.png",
    imageAlt:
      "White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.",
  },
  {
    name: "Sacha",
    description:
      " A mixed-breed horse born in 2006, was rescued by the shelter in an emergency situation. Her owner, unable to care for her, was on the verge of euthanizing her. The shelter intervened quickly to prevent this unfortunate outcome.",
    problemTitle: "My Health Problems",
    problemDescripton:
      "Sasha was diagnosed with severe arthritis in all four fetlocks, as well as some old tendinitis. To ensure she can maintain a good quality of life, she receives a highly specialized diet tailored to support her joints and help her live comfortably despite her condition.",
    imageSrc: "/Sacha3.jpg",
    imageAlt:
      "White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.",
  },
  {
    name: "Forest",
    description:
      "A magnificent 19-year-old Thoroughbred with a huge heart. Forest was taken in during an emergency, as his condition had severely deteriorated. His needs are unique and costly. ",
    problemTitle: "My Health Problems",
    problemDescripton:
      "Forest is no longer rideable due to several kissing spines. He also suffers from an old injury to his hind leg, which causes arthritis, occasionally leading to stiffness or lameness. Forest requires a great deal of attention: he struggles to maintain his weight, making his care particularly expensive. However, thanks to constant and compassionate care, he improves every day.",
    imageSrc: "/forest.jpg",
    imageAlt:
      "White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.",
  },
  {
    name: "Pot Colle",
    description:
      "A charming Morgan horse born around 2008, has found a safe haven at the shelter. Despite his gentle and resilient nature, Pot Colle faces significant health challenges that require special attention. He suffers from metabolic issues and arthritic knees, which necessitate a tailored approach to his care.",
    problemTitle: "My Health Problems",
    problemDescripton:
      "His condition calls for a specialized diet designed to support his overall health and manage his metabolic concerns. Additionally, Pot Colle receives ongoing, focused care to alleviate the discomfort caused by arthritis, ensuring his joints remain as comfortable as possible. With dedicated care and a nurturing environment, Pot Colle continues to thrive, enjoying a peaceful and supportive life at the shelter.",
    imageSrc: "/PotColle.jpg",
    imageAlt:
      "White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.",
  },
  {
    name: "Merlin",
    description:
      "born in 2007 and a Paint Horse mix, is a tall and gentle horse who was rescued by the shelter from an abattoir. Unfortunately, Merlin developed neurological issues and suffers from severe anxiety, which affects his digestive system. He also occasionally experiences epileptic seizures and has several dental problems.",
    problemTitle: "My Difficulties",
    problemDescripton:
      "When Merlin first arrived at the shelter, we believe he had been living alone, which made his socialization with other horses challenging. Understanding equine body language was difficult for him, and his introduction to other horses required a great deal of patience. This has resulted in significant costs and care needs. Despite his challenges, Merlin is a giant love with humans, showing immense gratitude for the care he receives.",
    imageSrc: "/Merlin.jpg",
    imageAlt:
      "White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Horses() {
  return (
    <div className="bg-brown-50">
      <div className="mx-auto max-w-2xl py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-3xl flex flex-col text-center items-center justify-center ">
          <h1 className="text-3xl font-serif font-bold tracking-tight text-gray-800 sm:text-6xl">
            Horses of the shelter
          </h1>

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
                <p className="mt-2 text-sm text-center text-gray-600">
                  {feature.description}
                </p>
                <h3 className="text-lg mt-4 text-center font-medium text-gray-900">
                  {feature.problemTitle}
                </h3>
                <p className="mt-2 text-sm text-center text-gray-600">
                  {feature.problemDescripton}
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
                <div className="aspect-w-3 aspect-h-2 shadow-2xl overflow-hidden rounded-lg bg-brown-50">
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
        <div className="mx-auto max-w-3xl mt-40 flex flex-col text-center items-center justify-center ">
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
          <p className="mt-2 mb-4 text-gray-600">
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
          <p className="mt-2 mb-4 text-gray-600">
            - 🎁 Welcome gift - 👀 Access to the private Facebook group - 🐴
            Visit 1x per month - ✨ Brushing 1x per month - **$49.99/month**
          </p>

          <div className="h-1 w-3/5 mt-2 rounded-full bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
}
