import React, { useState } from "react";
import { Select, Typography } from "@material-tailwind/react";
import { UserUrls } from "../../../utils/Config";
import { useDataFetch } from "../../../hooks/DataHook";
import UserEdtModal from "../Components/UserEdtModal";
import { useFormPost } from "../../../hooks/FormHook";
import loading from '../../../Assets/output-onlinegiftools.gif';


export const UsersList = () => {
  const fetcher = useDataFetch();
  const [usersList, setusersList] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [userId, setUserId] = useState(false);
  const [rowUser, setRowUser] = useState();
  const formPost = useFormPost()
  const [isLoading, setisLoading] = React.useState(false);


  function closeModal() {
    setModalOpen(false);
  }

  function openModal() {
    console.log("open modal");
    setModalOpen(true);
  }

  const loadData = async () => {
    setisLoading(true)
    const response = await fetcher.fetch({ url: UserUrls.AllUserCostomers });
    console.log(response);
    if (response) {
      setusersList(response);
      setisLoading(false)
    }
  };

  const handle_delete = async (id) => {
   try {
    alert('comfirm delete');
    const response = await formPost.deleteRequest({ url: UserUrls.userById + id });
    console.log(response);
    alert('user deleted');
    loadData();
   } catch (error) {
      console.log(error);

   }

  };

  React.useEffect(() => {
    loadData();
  }, []);
  if (isLoading) {
    return(
        <div>
        <div className="text-center px-4 py-8 " style={{minHeight:'300px'}}>
            <img src={loading} class="mx-auto w-10 " style={{backgroundColor:'transparent', alignItems:'center'}}/>
            <Typography className="mt-2" muted small>
                  loading your books..
              </Typography>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Role
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {usersList?.map((person) => (
                  <tr key={person.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {person.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {person.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {person.username}
                      </div>
                      <div className="text-sm text-gray-500">
                        {person.phone}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className="px-2 inline-flex text-xs leading-5
                    font-semibold rounded-full bg-green-100 text-green-800"
                      >
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {person.role === 0 ? "admin" : "costomer"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                        onClick={ () =>{
                          setRowUser(person)
                          setUserId(person.id)
                          openModal();
                        } } 

                      >
                        Edit
                      </a>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a
                        className="text-red-500 hover:text-red-700"
                        onClick={()=>{
                          handle_delete(person.id)
                        }}
                      >
                        {person.role === 0 ? "" : "Delete"}
                      </a>
                    </td>
                    <UserEdtModal
                   user={person}
                   onClose={closeModal}
                   open={modalOpen}
                 />
                  </tr>
                 
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
