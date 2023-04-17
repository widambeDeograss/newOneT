import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
   
  export default function AddUser() {
    return (
      <Card shadow={false} style={{alignItems:'center'}}> 
        <Typography variant="h4" color="blue-gray">
          Add User
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter User Details.
        </Typography>
        <form className="mt-3 mb-2 w-100 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Name" />
            <Input size="lg" label="Email" />
            <Input size="lg" label="phone" type="tel" />
            <Input type="password" size="lg" label="Password" />
          </div>
         
          <Button className="mt-6" fullWidth>
            Add User
          </Button>
        </form>
      </Card>
    );
  }