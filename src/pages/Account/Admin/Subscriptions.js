import React from "react";
import { Typography } from "@material-tailwind/react";
import { useDataFetch } from "../../../hooks/DataHook";
import { BooksUrls } from "../../../utils/Config";
import { useFormPost } from "../../../hooks/FormHook";
import { UserUrls } from "../../../utils/Config";
const renderDateTime = (dateString) => {
    const dateTime = new Date(dateString)
    return dateTime.toLocaleDateString()
}

function Subscriptions() {
  const [subscriptions, setsubscriptions] = React.useState([]);
  const fetcher = useDataFetch();
  const formPost = useFormPost()
  // const books = ["art", "science", "history", "Geography"];

  const loadData = async () => {
    const response = await fetcher.fetch({ url: BooksUrls.AllSubscriptions });
    if (response) {
      setsubscriptions(response);
    }
  };

  React.useEffect(() => {
    loadData();
  }, []);
  console.log(subscriptions);

  const handle_delete = async (id) => {
    try {
     alert('comfirm delete');
     const response = await formPost.deleteRequest({ url: BooksUrls.SubscriptionById + id });
     console.log(response);
     alert('user deleted');
     loadData();
    } catch (error) {
       console.log(error);
 
    }
 
   };

  if (!subscriptions || !subscriptions.length) {
    return (
      <div>
        <div className="text-center px-4 py-8">
          <Typography className="mt-2" muted small>
            There is no Subscriptions made start adding!..
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
                    Book
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    user name
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
                    exipired at
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
                {subscriptions?.map((subs) => (
                  <tr key={subs.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={subs.book.image}
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {subs.book.title}
                          </div>
                          <div className="text-sm text-gray-500">
                            {subs.price}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                      {subs.user.name}
                      </div>
                      <div className="text-sm text-gray-500">{subs.phone}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={subs.is_active ? "px-2 inline-flex text-xs leading-5font-semibold rounded-full bg-green-100 text-green-800" : "px-2 inline-flex text-xs leading-5font-semibold rounded-full bg-red-100 text-green-800"}
                      >
                         {subs.is_active ? "Active" : "Expired"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {renderDateTime(subs.expired_at)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Deactivate
                      </a>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a className="text-red-500 hover:text-red-700" 
                      onClick={() => {
                        handle_delete(subs.id)
                      }}
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscriptions;
