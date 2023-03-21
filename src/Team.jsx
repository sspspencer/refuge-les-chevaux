const people = [
  {
    name: "Nève Lavigne",
    role: "Founder",
    imageUrl: "/neve.jpg",
    bio: "I am a passionate horse lover and founder of Refuge- Les Chevaux D'Espoir. Our mission is to rescue and rehabilitate horses that have suffered neglect or injury, and find them loving forever homes.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Vicky",
    role: "Volunteer",
    imageUrl: "/vicky.jpg",
    bio: "Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Vanessa Franche ",
    role: "Volunteer",
    imageUrl: "/vanessa.jpg",
    bio: "Hi, I'm Vanessa and I've been part of the volunteer team since the summer of 2022. Every week, I get to greet not only the horses at the shelter, but also the dogs, cats and chickens that live there! For the past few months, I have been helping with the daily care of Blaze, \"the tall, beautiful blonde\" as he is known! Blaze requires daily exercises and the addition of support for his front legs. I take the opportunity to pet him and brush him at the same time! Animal protection is a subject that is close to my heart and I feel lucky to be able to support the shelter. Each small gesture counts!",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Krystina Beaulne ",
    role: "Volunteer",
    imageUrl: "/krystina.jpg",
    bio: "I deeply love all animals and when given a chance to volunteer at this wonderful shelter, I jumped at the opportunity.  There are no words to describe how I feel when I am there,  Time stands still. I feel so happy and privileged to be able to help as well as being able to  spend time with all these beautiful horses.    ",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Maria Michalska ",
    role: "Volunteer",
    imageUrl: "/maria.jpg",
    bio: "This is the place of plenty of food and fresh water. Where the human voice is calm, the hand is gentle. The air is soaked in friendship, respect and joy. Teamwork makes the dream come true and there is always hope",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Julie",
    role: "Volunteer",
    imageUrl: "/julie.jpg",
    bio: "Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Mélanie Lacelle",
    role: "Volunteer",
    imageUrl: "/melanie.jpg",
    bio: "Peace, Serenity, Calm, Tranquility, Balance Mutual help, Solidarity, Fraternity, Support, Hope",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Jasmine Chagnon",
    role: "Volunteer",
    imageUrl: "/jasmine.jpg",
    bio: "A rescue that prioritizes the health and happiness of the horses.  A haven of peace offering a second chance to the horses.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Caro Myre",
    role: "Volunteer",
    imageUrl: "/caro.jpg",
    bio: "I am very grateful to be part of such a wonderful team.  It brings me hope.  It's a very special feeling to be able to make a difference in the life of these magnificent animals.  When I am there, I forget all my problems.  The horses help me remain calm and live in the moment.  To see them so well treated and happy brings joy to my heart.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Suzanne Martin",
    role: "Volunteer",
    imageUrl: "/suzanne.jpg",
    bio: 'At this barn you will find peace, love and volunteers of all ages working together towards a common goal. The horses are given plenty of love on a daily basis and receive all the necessary care.  Food and fresh water are plentiful. I feel very privileged to be a part of  this great team and to be able to make a difference in the lives of these horses.  They are finally at peace and feel safe . I came across this rescue by chance but believe there is always a reason for such encounters. These horses bring me so much :  peace, grounding and love and I hope I bring as much to them as they do to me.  It is indeed a place of "Hope".',
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  // More people...
];

export default function Example() {
  return (
    <div className="bg-white py-24 md:py-32 lg:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Meet the dedicated and compassionate team behind our horse rescue
            organization. Our team is made up of experienced and knowledgeable
            individuals who share a passion for equine welfare. Together, we
            work tirelessly to provide a safe and loving environment for our
            rescued horses. Get to know our team members below.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <img
                className="aspect-[3/2] w-full rounded-2xl object-cover"
                src={person.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">
                {person.name}
              </h3>
              <p className="text-base leading-7 text-gray-600">{person.role}</p>
              <p className="mt-4 text-base leading-7 text-gray-600">
                {person.bio}
              </p>
              <ul role="list" className="mt-6 flex gap-x-6">
                <li>
                  <a
                    href={person.twitterUrl}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href={person.linkedinUrl}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
