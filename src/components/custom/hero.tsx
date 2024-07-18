import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-gray-50  flex items-center justify-center">

      <div className="container mx-auto flex flex-col md:flex-row items-center">

        <div className="md:w-1/2 text-center md:text-left">

          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">

            Lessons and insights <br />
            <span className="text-green-500 text-3xl md:text-5xl font-bold">from 8 years</span>
          </h1>
          <p className="mt-4 text-gray-600">
            Where to grow your business as a photographer: site or social media?
          </p>
        <button className="mt-6 bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600">
          Register
        </button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <Image
            src="/hero.svg"
            alt="Illustration"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;