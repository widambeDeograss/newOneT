import {fetchBaseQuery, createApi} from "@reduxjs/toolkit/query/react";
import {logOut, loginAuth} from "../auth/AuthSlice";


const  baseQuery = fetchBaseQuery({
    baseUrl: "http://128.199.15.73:9010/",
    credentials:'include',
    prepareHeaders:(headers, {getState}) => {
        const token = getState().auth.token
        if (token) {
            headers.set("authorization", `Bearer ${token}`)
        }
        return headers
    }
});

const baseQueryReauth = async (args, api, extraOptions) => {
    const results = await baseQuery(args, api, extraOptions)
    if (results?.error?.originalStatus === 401) {
        console.log("send a refresh tocen to the server");
       const refreshResult = await baseQuery('/auth/refresh_log', api, extraOptions)

       console.log(refreshResult);
       if (refreshResult?.data) {
        const user = api.getState().auth.user

        api.dispatch(loginAuth({...refreshResult.data, user}))

        const results = await baseQuery(args, api, extraOptions)
       }
    }

    return results 
}

export const apiSlice = createApi({
    baseQuery:baseQueryReauth,
    endpoints: builder => ({
    })
}) 