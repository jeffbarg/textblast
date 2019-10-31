import React from "react";
import ProfileSection from "../components/ProfileSection";
import { useUser } from "../context/user-context";

export default () => {
  let { user, profile } = useUser();
  return (
    <div className="bg-indigo-500 p-4 h-full">
      <div className="container mx-auto">
        <div className="mb-2 bg-orange-600 shadow rounded text-white w-full p-3 text-lg">{JSON.stringify(user)}</div>
        <div className="mb-2 bg-orange-500 shadow rounded text-white w-full p-3 text-lg">{JSON.stringify(profile)}</div>
        <ProfileSection />
      </div>
    </div>
  );
};
