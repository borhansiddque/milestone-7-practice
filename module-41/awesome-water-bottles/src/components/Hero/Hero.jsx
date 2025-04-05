import React from "react";

const Hero = () => {
  return (
    <div
      className="hero h-[400px]"
      style={{
        backgroundImage:
          "url(https://www.swell.com/cdn/shop/collections/Swell-Drink-Original-Bottle-Collection-Banner.jpg?v=1732716006&width=1000)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
