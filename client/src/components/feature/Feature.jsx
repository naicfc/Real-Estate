import React from 'react'
import {FaAddressBook} from 'react-icons/fa'
import FeatureCard from './FeatureCard'

export default function Feature() {
  return (
    <div className="px-28 py-10 bg-zinc-200">
      <div className="text-center mb-10">
        <p className="text-xl tracking-wider font-semibold">
          Featured Property Types
        </p>
        <p className="text-sm text-gray-600 font-medium">
          Find All Types of Property
        </p>
      </div>
      <div className="flex justify-between">
        <FeatureCard
          icon={<FaAddressBook />}
          color={"bg-blue-400 p-2 rounded-full"}
          
        />
        <FeatureCard icon={<FaAddressBook />} />
        <FeatureCard icon={<FaAddressBook />} />
        <FeatureCard icon={<FaAddressBook />} />
        <FeatureCard icon={<FaAddressBook />} />
      </div>
    </div>
  );
}
