import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Community = () => {
    const communityTypes = [
      {
        icon: '/dl1.svg', // Replace with your actual path
        titleLine1: 'Membership',
        titleLine2: 'Organisations',
        description: [
          'Our membership management',
          'software provides full automation of',
          'membership renewals and payments',
        ],
      },
      {
        icon: '/dl2.svg', // Replace with your actual path
        titleLine1: 'National',
        titleLine2: 'Associations',
        description: [
          'Our membership management',
          'software provides full automation of',
          'membership renewals',
          'and payments',
        ],
      },
      {
        icon: '/dl3.svg', // Replace with your actual path
        titleLine1: 'Clubs And',
        titleLine2: 'Groups',
        description: [
          'Our membership management',
          'software provides full automation of',
          'membership renewals and payments',
        ],
      },
    ];
  
    return (
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-2">
            Manage your entire community
            <br />
            in a single system
          </h2>
          <p className="text-center text-gray-600 mb-12">Who is Nextcent suitable for?</p>
          <div className="flex flex-wrap justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            {communityTypes.map((type, index) => (
              <div key={index} className="max-w-sm w-full md:w-1/3 p-4">
                <div className="bg-white p-6 rounded-lg text-center border border-gray-200">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <img src={type.icon} alt={`${type.titleLine1} ${type.titleLine2}`} className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-extrabold mb-2 text-gray-600">
                    {type.titleLine1}
                    <br />
                    {type.titleLine2}
                  </h3>
                  <div className="text-gray-600">
                    {type.description.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Community;
  
  