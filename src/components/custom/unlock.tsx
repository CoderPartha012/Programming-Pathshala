// components/Unlock.tsx

import Image from 'next/image';
import React from 'react';

const Unlock: React.FC = () => {
  return (
    <div className="flex justify-center items-center bg-white p-8 min-h-screen">
      <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10">
        <div className="relative w-60 h-60 md:w-72 md:h-72">
          <Image
            src="/Frame 35.svg"
            alt="Unlock Illustration"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="max-w-lg text-left">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            <span className="block">The unseen of spending three</span>
            <span className="block">years at Pixelgrade</span>
          </h2>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed
            accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed
            porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
          </p>
          <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Unlock;
