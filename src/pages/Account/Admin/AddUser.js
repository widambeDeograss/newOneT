import React, {useState} from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { setAlert,  toggleAlert } from "../../../api/store/appStateSlice";
import { UserUrls } from "../../../utils/Config";
import { useFormPost } from "../../../hooks/FormHook";

export default function AddUser() {
  const formPost = useFormPost()
  const dispatch = useDispatch()
  const [username, setUsername] = useState();
  const [name, setname] = useState();
  const [email, setEmail] = useState();
  const [tel, setTel] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const body = {
      username:username,
      name:name,
      role:1,
      email:email,
      phone:tel,
      password:password

    }
    console.log(body);
    try {
      let severity = "info";
      const response = await formPost.post({url:UserUrls.userRegister , data: body});
      console.log(response);
      if (response.header.responseCode === 0) {
        dispatch(setAlert({message:"user added success" , severity: severity}));
      dispatch(toggleAlert());
      }
    } catch (error) {
      console.log(error);
    }
    event.target.reset();
  }

  return (
    <Card shadow={false} style={{ alignItems: "center" }}>
      <Typography variant="h4" color="blue-gray">
        Add User
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter User Details.
      </Typography>

      <form className="mt-3 mb-2 w-100 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="user Name" name="" type="text" required onChange={(e)=>{
                                setUsername(e.target.value)
                            }}/>
            <Input size="lg" label="Full Name" name="fullName" type="text" required onChange={(e)=>{
                                setname(e.target.value)
                            }}/>
          <Input size="lg" label="Email" type="email" required onChange={(e)=>{
                                setEmail(e.target.value)
                            }}/>
          <Input size="lg" label="phone" type="tel" required onChange={(e)=>{
                                setTel(e.target.value)
                            }}/>
          <Input type="password" size="lg" label="Password" required onChange={(e)=>{
                                setPassword(e.target.value)
                            }} />
        </div>

        <Button className="mt-6" fullWidth type="submit">
          Add User
        </Button>
      </form>
    </Card>
  );
}
