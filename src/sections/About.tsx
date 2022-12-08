export const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center px-8 py-24 bg-bottom bg-no-repeat fill-screen snap-start snap-always md:px-32 bg-waveMobile lg:bg-wave"
    >
      <div className="flex flex-col items-center justify-center max-w-3xl">
        <p className="mb-4 text-3xl font-bold md:text-4xl md:mb-8">About</p>
        <div className="mb-8 text-lg md:text-xl md:mb-16">
          <p className="mb-4">
            While building pythons bots and applications with FastAPI and React,
            I'm also building DeFi solutions with Reach-lang and solidity. My main focus in the decentralised world is 
            to build simple yet trusted loan and borrowing solutions to make more accessable to the unreached in Africa 
            and also make finace more transparent.
            I've worked on both Algorand and EVM blockchains.
          </p>
          <p>
            In addition to development, listening to music, reading
            philosophical and theological books.
          </p>
        </div>
        {/* <a
          href="https://www.canva.com/design/DAEyUQhWpg8/IwnuUJD6gle44GvS8r1hFw/view?utm_content=DAEyUQhWpg8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
          target="_blank"
          rel="noreferrer"
        > */}
          <button className="px-8 py-1 bg-white border-2 border-gray-700 rounded-full shadow-md md:text-lg">
            Resume
          </button>
        {/* </a> */}
      </div>
    </section>
  );
};
