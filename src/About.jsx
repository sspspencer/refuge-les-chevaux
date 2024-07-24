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
  {
    name: "Brookies des Prairies",
    imageUrl: "/Brookies.jpg",
    socialUrl: "https://www.facebook.com/brookiesdesprairies?mibextid=LQQJ4d",
  },
  {
    name: "Jean Coutu (Hawkesbury Main Est)",
    imageUrl: "/jean-coutu.jpg",
    socialUrl: "https://www.facebook.com/JeanCoutuHawkesburyMainEst/",
  },

  // More sponsors...
];

const About = () => {
  return (
    <div className="overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
          <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Our Mission
            </h1>
            <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
              Our mission is to save as many horses as possible, whether they
              come from slaughterhouses, medical emergencies or abandoned. Our
              priority is to ensure the well-being of each horse welcomed by
              offering them a secure environment and precise care, surrounded by
              a wonderful team of volunteers and specialists. At the shelter,
              each horse receives personalized attention to promote their
              physical and emotional rehabilitation. A comprehensive nutritional
              program, as well as a complete health examination which is
              essential for everyone in order to get them back on their feet as
              quickly as possible. Alternative medicine also plays a big role in
              the rehabilitation of our horses. By uniting the strengths of each
              member of our team, we aspire to create a place where our
              survivors can regain health, confidence and a new start in life.
              When we make the decision that a horse requires too much care to
              be put up for adoption, we commit to providing them with the care
              they need until the end of its days here at the shelter. Raising
              social awareness is also something we attach great importance to.
              By educating people about the challenges horses face, we help
              mobilize support for protection and rescue initiatives and create
              an atmosphere where animal welfare becomes a shared priority.
            </p>
          </div>
          <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
            <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
              <div className="relative">
                <img
                  alt=""
                  src="/about_1.jpg"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            </div>
            <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
              <div className="relative">
                <img
                  alt=""
                  src="/about_2.jpg"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="relative">
                <img
                  alt=""
                  src="/about_3.jpg"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            </div>
            <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
              <div className="relative">
                <img
                  alt=""
                  src="/about_4.jpg"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="relative">
                <img
                  alt=""
                  src="/about_5.jpg"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto text-center max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
        <h1 className="text-4xl font-serif pb-4 font-bold tracking-tight text-gray-900 sm:text-6xl">
          Our Facility
        </h1>
        <video
          className="rounded-xl shadow-lg bg-gray-900/5"
          src="/about_video.mp4"
          loop
          autoPlay
          muted
        ></video>
      </div>
      <div className="mx-auto mb-8 border-8  rounded-2xl border-blue-gray-700 text-center max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
        <h1 className="text-4xl font-serif pb-4 font-bold tracking-tight text-gray-900 sm:text-6xl">
          Our Story
        </h1>
        <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
          <div>
            <p>
              The shelter was started on December 10th, 2021. The founder of the
              Shelter purchased her house on the 22.5-acre land in 2020. The
              large facilities were already there, however, with the help of a
              wonderful team, she had to work tirelessly to make this place a
              dream place to begin her project. Rescue, rehabilitation, a
              heavenly place for survivors, it has always been her dream.
            </p>
            <p className="mt-8">
              The very first horse that Nève took under her wing is called Zeus.
              He is now our mascot of the shelter. They were able to build a
              huge bond since they were both misunderstood by society. Nève then
              asked herself the question; “How many misunderstood horses, like
              me, need this second chance?”
            </p>
          </div>
          <div className="border-l border-blue-800 pl-8 text-left">
            <p className="mt-10">
              It was therefore with a lot of hard work and help from the
              community that the shelter was able to create something concrete.A
              wonderful team of volunteers was then created to help raise
              donations, as well as to give as much love as possible to these
              horses. The shelter team also worked very hard to register as a
              non-profit organization.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto mb-8 border-8 rounded-2xl border-blue-gray-700 text-center max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
        <h1 className="text-4xl font-serif pb-4 font-bold tracking-tight text-gray-900 sm:text-6xl">
          How it all started
        </h1>
        <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
          <div>
            <img
              className="rounded-2xl shadow-xl"
              src="/about_started1.jpg"
              alt=""
            />
            <p className="mt-8">
              Her debut in the equine world was in 2005, in equestrian day
              camps, under the supervision of Isabelle Légaré. Among all the
              horses she had been introduced to, she fell in love with a
              “difficult” little black horse who stood out from the crowd. By
              taking lessons at Isabelle's stable, she learned everything with
              this little horse. Shortly after, Neve's mother and uncle gave her
              that little back horse, Hope, as a gift. With aging, health
              problems appeared in the mare and Nève was able to gain experience
              in equine issues. At that time, science was not as advanced and
              alternative medicine barely existed, but with her interest, she
              also learned a lot about nutrition and other important topics in
              the field.
            </p>
          </div>
          <div className="border-l border-blue-800 pl-8 text-left">
            <p className="">
              Some time later, Nève was able to find an equine massage therapy
              course offered by Caroline Archambault hours away from her home.
              With extreme travel and hard work, she graduated and is now an
              equine massage therapist since 2019. Afterwards, she went to seek
              experience in reproduction and breeding. Since then, Nève has
              traveled throughout Quebec as well as part of Ontario to offer her
              services and valuable advice. She continues to raise awareness
              among people everywhere and her desire to help as many horses as
              possible grows every day.
            </p>
            <img
              className="rounded-2xl mt-8 shadow-xl"
              src="/about_started2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
