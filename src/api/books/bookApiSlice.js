import { apiSlice } from "../app/app";

export const booksApiSice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAllbooks: builder.query({
            query: () => "/allBooks"
        })
    })
})

export const {
    useGetAllbooksQuery
} = booksApiSice