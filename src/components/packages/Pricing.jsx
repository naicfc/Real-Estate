import React from "react";
import PricingCard from "./PricingCard";
import CheckPrice from "././CheckPrice";
import CrossPrice from "././CrossPrice";

export default function Pricings() {
  return (
    <div className=" px-4 lg:px-28 py-16">
      <div className="text-center mb-10">
        <p className="text-xl mb-2 tracking-wider text-gray-800 font-semibold capitalize">
          select your package
        </p>
        <p className="text-sm text-gray-600 font-medium w-full md:w-[70%] mx-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia at
          asperiores praesentium mollitia ipsam similique consectetur veniam
          doloribus voluptas commodi.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingCard
          packageName={"Basic"}
          subscription={"per user, per month"}
          price={"$29"}
          check1={<CheckPrice text={"99.5% Uptime Guaranteed"} />}
          check2={<CheckPrice text={"129GB CDN Bandwidth"} />}
          check3={<CheckPrice text={"5GB Cloud Storage"} />}
          cross1={<CrossPrice text={"Personal Help Support"} />}
          cross2={<CrossPrice text={"Enterprise SLA"} />}
        />
        <PricingCard
          bestValue={true}
          packageName={"Standard"}
          subscription={"per user, per month"}
          price={"$49"}
          check1={<CheckPrice text={"99.5% Uptime Guaranteed"} />}
          check2={<CheckPrice text={"129GB CDN Bandwidth"} />}
          check3={<CheckPrice text={"5GB Cloud Storage"} />}
          check4={<CheckPrice text={"Personal Help Support"} />}
          cross2={<CrossPrice text={"Enterprise SLA"} />}
        />
        <PricingCard
          packageName={"Platinum"}
          subscription={"2 users, per month"}
          price={"$79"}
          check1={<CheckPrice text={"99.5% Uptime Guaranteed"} />}
          check2={<CheckPrice text={"129GB CDN Bandwidth"} />}
          check3={<CheckPrice text={"5GB Cloud Storage"} />}
          check4={<CheckPrice text={"Personal Help Support"} />}
         check5={<CheckPrice text={"Enterprise SLA"} />}
        />
      </div>
    </div>
  );
}
