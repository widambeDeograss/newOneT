import React from 'react'
import {
  Avatar,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Progress ,
  Button,
} from "@material-tailwind/react";
import ListItem from '../Components/ListItem';
import ProgressCircle from '../Components/ProgressCircle';

const overviews = [
  {
    name: "Users",
    value: "12 500"
  },
  {
    name: "Subscriptions",
    value: "12 500"
  },
  {
    name: "Books",
    value: "12 500"
  },
  {
    name: "Unsubscribed Books",
    value: "12 500"
  }
];

const users = [
  {
    firstName: "John",
    lastName: "Smith",
    job: "Web developer"
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    job: "Designer"
  }
];

const orders = [
  {
    amount: "$234.99",
    createdAt: "07-08-2021",
    id: "202108070001",
    status: "In Progress"
  },
  {
    amount: "$456.99",
    createdAt: "07-08-2021",
    id: "202108070002",
    status: "Done"
  }
];

const statusColorMap = {
  Done: "success",
  "In Progress": "warning"
};

const targets = [
  {
    name: "Visits",
    value: 90
  },
  {
    name: "Income",
    value: 75
  },
  {
    name: "subscriptions",
    value: 50
  }
];


const AdminDashboard = () => {
  return (
    <div className="p-6">
  <div className="flex items-center justify-between">
      <Typography variant="h1">Admin Home</Typography>
    </div>
    <div className="grid py-6 grid-cols-1 md:grid-cols-12 gap-4">
      {overviews.map((overview) => (
        <Card className="md:col-span-3" key={overview.name}>
          <CardBody>
            <Typography className="mb-2" bold>{overview.value}</Typography>
            <Typography muted smaller>
              {overview.name}
            </Typography>
          </CardBody>
        </Card>
      ))}
      <Card className="md:col-span-12">
        <CardHeader title="Orders"></CardHeader>
        <CardBody>
        <table className="min-w-full">
            <thead className='text-sm bg-gray-50 text-gray-500'>
              <tr className='text-sm'>
                <td className='px-4 py-3 whitespace-nowrap' head={true}>Date</td>
                <td className='px-4 py-3 whitespace-nowrap' head={true}>ID</td>
              <td className='px-4 py-3 whitespace-nowrap' head={true}>Status</td>
                <td className='px-4 py-3 whitespace-nowrap' head={true}>Amount</td>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map((order) => (
                <tr className='text-sm' key={order.id}>
                  <td className='px-4 py-3 whitespace-nowrap'>{order.createdAt}</td>
                  <td className='px-4 py-3 whitespace-nowrap'>{order.createdAt}</td>
                  <td className='px-4 py-3 whitespace-nowrap'>
                    <div className='inline-block font-bold text-xs rounded-full px-3 py-2' color={statusColorMap[order.status]}>
                      {order.status}
                    </div>
                  </td>
                  <td className='px-4 py-3 whitespace-nowrap'>{order.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardBody>
      </Card>
      <Card className="md:col-span-4">
        <CardHeader title="Top Users"></CardHeader>
        <CardBody>
          <div className='flex flex-col'>
            {users.map((user, index) => (
               <ListItem
               avatar={
                 <Avatar>
                   {/* <HiUser /> */}
                 </Avatar>
               }
               key={index}
               subTitle={user.job}
               title={`${user.firstName} ${user.lastName}`}
             />
            ))}
          </div>
        </CardBody>
      </Card>
      <Card className="md:col-span-4">
        <CardHeader title="Targets"></CardHeader>
        <CardBody>
          {targets.map((target) => (
            <div key={target.name}>
              <div className="flex justify-between items-center mb-1">
                <Typography bold muted small>
                  {target.name}
                </Typography>
                <Typography bold small>{`${target.value}%`}</Typography>
              </div>
              <Progress  value={target.value} />
            </div>
          ))}
        </CardBody>
      </Card>
      <Card className="md:col-span-4">
        <CardHeader title="Progress"></CardHeader>
        <CardBody>
          <ProgressCircle  />
        </CardBody>
      </Card>
    </div>
  </div>
  )
}

export default AdminDashboard