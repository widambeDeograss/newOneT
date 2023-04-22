import React,{useState} from "react";
import { Avatar, Typography, Button } from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import Footer from "./Footer";
import { BooksUrls } from "../../utils/Config";
import { useDataFetch } from "../../hooks/DataHook";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";


export function Profile() {
  const [User, setUser] = useState();
  const fetcher = useDataFetch()
  const [numberBoocs, setnumberBoocs] = useState();
  const navigate = useNavigate()

  const loadData = async () => {
    const subresponse = await fetcher.fetch({url: BooksUrls.AllSubscriptions});
    console.log(subresponse); 
    if(subresponse){
      setUser(subresponse[0]);
      setnumberBoocs(subresponse.length)
    }
}
console.log(User);

React.useEffect(() => {
    loadData();
}, []);

  return (
    <>
      <section className="relative block h-[50vh] ">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 py-16 px-4 ">
        <div className=" mx-auto">
          <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                  <div className="relative">
                    <div className="-mt-9 w-40">
                      <Avatar
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA29za2oYfB6YlZLiz_E8tShFpXXE1vliCbkmPfxufNh2O4CvZk1GSnb9zChJ7qVc2LGU&usqp=CAU"
                        alt="Profile picture"
                        variant="circular"
                        className="h-full w-full shadow-xl"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10 flex w-full justify-center px-4 lg:order-3 lg:mt-0 lg:w-4/12 lg:justify-end lg:self-center">
                  <Button className="bg-blue-400" onClick={() => navigate("/account/books")}>My Books</Button>
                </div>
                <div className="w-full px-4 lg:order-1 lg:w-4/12">
                  <div className="flex justify-center py-4 pt-8 lg:pt-4">
                    <div className="mr-4 p-3 text-center">
                      <Typography
                        variant="lead"
                        color="blue-gray"
                        className="font-bold uppercase"
                      >
                        {numberBoocs}
                      </Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        Active Books Subscriptions
                      </Typography>
                    </div>
                   
                  </div>
                </div>
              </div>
              <div className="my-8 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-2">
                  {User?.user.name}
                </Typography>
                {/* <div className="mb-16 flex items-center justify-center gap-2">
                  <MapPinIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    Los Angeles, California
                  </Typography>
                </div> */}
                <div className="mb-2 flex items-center justify-center gap-2">
                  <BriefcaseIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    {User?.user.email}
                  </Typography>
                </div>
                <div className="mb-2 flex items-center justify-center gap-2">
                  <UserCircleIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                  {User?.user.username}
                  </Typography>
                </div>
              </div>

              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    {/* <Typography className="mb-8 font-normal text-blue-gray-500">
                      An artist of considerable range, Jenna the name taken by
                      Melbourne-raised, Brooklyn-based Nick Murphy writes,
                      performs and records all of his own music, giving it a
                      warm, intimate feel with a solid groove structure. An
                      artist of considerable range.
                    </Typography> */}
                    <Button variant="text" onClick={() => navigate("/account")}>Home</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
