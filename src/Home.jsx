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
      <section className="max-w-3xl mx-auto mt-8 text-center sm:text-start">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-600 mb-8">
          Our rescue's mission is to save as many horses as possible. We save
          horses on their way to the slaughterhouse, with urgent medical needs,
          or that have been abandoned, in order to give them a second chance at
          life
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          How You Can Help
        </h2>
        <p className="text-lg text-gray-600 mb-8">BUBBLES</p>
      </section>
    </div>
  );
};

export default Home;
