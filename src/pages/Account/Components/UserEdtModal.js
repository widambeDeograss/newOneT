import React,{useState} from "react";
import {
  Textarea,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import Modal from "./Modal";
import ModalBody from "./ModalBody";
import { useDispatch } from "react-redux";
import { UserUrls } from "../../../utils/Config";
import { useFormPost } from "../../../hooks/FormHook";
import { setAlert, toggleAlert } from "../../../api/store/appStateSlice";



export default function UserEdtModal({
  loading,
  onAdd,
  onClose,
  open,
  user,
}) { 
  const [username, setUsername] = useState(user != null ? user.username : '');
  const [email, setEmail] = useState(user != null ? user.email : '');
  const [name, setname] = useState(user != null ? user.name : '');
  const [id, setId] = useState(user != null ? user.id : '');
  const [tel, setTel] = useState(user != null ? user.phone : '');
  const [password, setPassword] = useState();
  const formPost = useFormPost()
  const dispatch = useDispatch()
  console.log(id);


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
        const response = await formPost.put({url:UserUrls.userById + id  , data: body});
        console.log(response);
        if (response.header.responseCode === 0) {
        dispatch(setAlert({message:"user added success" , severity: severity}));
        dispatch(toggleAlert());
        }
      } catch (error) {
        console.log(error);
      }
    }
;

  return (
    <Modal closeModal={onClose} open={open}>

      <form onSubmit={handleSubmit}>
        
        <ModalBody>
        <h1 className="mb-4 gap-6 text-center">Edit User</h1>

        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="user Name" name="" type="text" value={username}required onChange={(e)=>{
                                setUsername(e.target.value)
                            }}/>
            <Input size="lg" label="Full Name" name="fullName" value={name} type="text" required onChange={(e)=>{
                                setname(e.target.value)
                            }}/>
          <Input size="lg" label="Email" type="email" value={email} required onChange={(e)=>{
                                setEmail(e.target.value)
                            }}/>
          <Input size="lg" label="phone" type="tel" required onChange={(e)=>{
                                setTel(e.target.value)
                            }}/>
          <Input type="password" size="lg" label="Password" required onChange={(e)=>{
                                setPassword(e.target.value)
                            }} />
          </div>
        </ModalBody>
        <CardFooter>
          <Button
            className="w-full sm:ml-3 sm:w-auto"
            color="primary"
            disabled={loading}
            loading={loading}
            type="submit"
          >
            Submit
          </Button>
          <Button
            className="w-full mt-3 sm:mt-0 sm:ml-3 sm:w-auto"
            color="ghost-primary"
            onClick={onClose}
          >
            Cancel
          </Button>
        </CardFooter>
      </form>
    </Modal>
  );
}
