import React from "react";
import { Card, CardBody } from "@material-tailwind/react";


function Dashboard() {
  let currentDate = new Date();

  return (
    <div className="px-4 py-8">
    
    
      <h1 className="text-4xl font-bold mb-4">Welcome back!</h1>
      <Card>
        <CardBody>
        </CardBody>
      </Card>
      <p className="mt-8 text-gray-700">
        Today is <span className="font-bold">{currentDate.getDate()}</span>.
      </p>
    </div>
  );
}

export default Dashboard;
