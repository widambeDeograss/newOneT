import React from "react";
import { Card, CardBody } from "@material-tailwind/react";

import profileImage from "../../Assets/prof.jpg";

function Dashboard() {

  let currentDate = new Date();

  return (
    <div className="px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Welcome back!</h1>
      <div className="flex items-center mb-4">
        <img
          src={profileImage}
          alt="Profile"
          className="h-12 w-12 rounded-full mr-4"
        />
        <div>
          <p className="text-xl font-bold">{'currentUser.displayName'}</p>
          <p className="text-gray-700">{'currentUser.email'}</p>
        </div>
      </div>
      <Card>
        <CardBody>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Profile Information</h2>
            <p className="text-lg font-bold">
              Current Balance: $1000.00
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-700 mb-2">Name:</p>
              <p className="text-lg font-semibold mb-4">
                {'currentUser.displayName'}
              </p>
            </div>
            <div>
              <p className="text-gray-700 mb-2">Email:</p>
              <p className="text-lg font-semibold mb-4">
                {'currentUser.email'}
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="bg-blue-500 text-white py-2 px-4 rounded">
              Edit Profile
            </button>
          </div>
        </CardBody>
      </Card>
      <p className="mt-8 text-gray-700">
        Today is <span className="font-bold">{currentDate.getDate()}</span>.
      </p>
    </div>
  );
}

export default Dashboard;
