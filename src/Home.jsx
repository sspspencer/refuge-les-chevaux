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
            Welcome to Refuges Les Chevaux D'Espoir!
          </h1>
          <p className="text-lg text-white mb-8">
            Make a horse's dreams come true, give it the hope of a second
            chance!
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Donate Now
          </button>
        </div>
      </section>
      <section className="max-w-3xl mx-auto mt-8 text-center sm:text-start">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-600 mb-8">
          Our rescue's mission is to save as many horses as possible. We take in
          horses on their way to be slaughtered or horses with urgent medical
          needs and that have been abandonned, in order to give them a second
          chance. We rehabilitate them with the help of our veterinarian,
          dentist, also using alternative medicine and foot care. Once they have
          been rehabilitated, and only if their condition allows it, we adopt
          them out to an approved family, under contract, and certain families
          have rules to abide by. If the horse has many health issues, he will
          spend the rest of his life in our fields and we commit to give him the
          appropriate care for the rest of his life.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          How You Can Help
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          There are many ways you can support our mission. You can make a
          donation, volunteer your time and skills, or adopt one of our rescued
          horses. Every little bit helps, and we appreciate your support!
        </p>
      </section>
    </div>
  );
};

export default Home;
