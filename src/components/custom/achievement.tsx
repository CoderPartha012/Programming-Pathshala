// components/Achievements.tsx

import React from 'react';
import { FaUsers, FaHandshake, FaCalendarCheck, FaWallet } from 'react-icons/fa';

const Achievements: React.FC = () => {
  return (
    <div className="flex justify-between items-center bg-gray-100 p-8">
      <div className="max-w-md">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Helping a local
        </h2>
        <h2 className="text-3xl font-bold text-green-600 mb-4">
          business reinvent itself
        </h2>
        <p className="text-gray-700">
          We reached here with our hard work and dedication
        </p>
      </div>
      <div className="flex space-x-10">
        <div className="flex items-center space-x-2">
          <FaUsers className="text-green-600 text-2xl" />
          <div>
            <p className="text-2xl font-bold text-gray-900">2,245,341</p>
            <p className="text-gray-600">Members</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <FaHandshake className="text-green-600 text-2xl" />
          <div>
            <p className="text-2xl font-bold text-gray-900">46,328</p>
            <p className="text-gray-600">Clubs</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <FaCalendarCheck className="text-green-600 text-2xl" />
          <div>
            <p className="text-2xl font-bold text-gray-900">828,867</p>
            <p className="text-gray-600">Event Bookings</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <FaWallet className="text-green-600 text-2xl" />
          <div>
            <p className="text-2xl font-bold text-gray-900">1,926,436</p>
            <p className="text-gray-600">Payments</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
