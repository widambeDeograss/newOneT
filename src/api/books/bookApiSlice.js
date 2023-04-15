import { apiSlice } from "../app/app";


export const booksApiSice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAllbooks: builder.query({
            query: () => "/allBooks"
        })
    })
})

export const UserbooksApiSice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUserbooks: builder.query({
            query:  (args) => {
                // Destructuring Object
                const { id } = args;
                return {
                    // Returns url with multiple args
                    url: `/userBooks/${id}`
                }
            }
        })
    })
})

export const {
    useGetUserbooksQuery
} = UserbooksApiSice

export const {
    useGetAllbooksQuery
} = booksApiSice