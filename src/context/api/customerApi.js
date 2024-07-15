import { api } from "./index";

export const customerApi = api.injectEndpoints({
    endpoints: (build) => ({
        getCustomers: build.query({
            query: (params) => ({
                url: "/get/customers",
                params,
            }),
            providesTags: ["Customer"],
        }),
        // getCustomerById: build.query({
        //     query: (id) => ({
        //         url: `/customers/${id}`,
        //     }),
        //     providesTags: ["Customer"],
        // }),
        // createCustomer: build.mutation({
        //     query: (body) => ({
        //         url: "/customers",
        //         method: "POST",
        //         body,
        //     }),
        //     invalidatesTags: ["Customer"],
        // }),
        // deleteCustomer: build.mutation({
        //     query: (id) => ({
        //         url: `/customers/${id}`,
        //         method: "DELETE",
        //     }),
        //     invalidatesTags: ["Customer"],
        // }),
        // updateCustomer: build.mutation({
        //     query: ({ id, body }) => ({
        //         url: `/customers/${id}`,
        //         method: "PUT", // or "PATCH"
        //         body,
        //     }),
        //     invalidatesTags: ["Customer"],
        // }),
    }),
});

export const {
    useGetCustomersQuery,
    useCreateCustomerMutation,
    useDeleteCustomerMutation,
    useUpdateCustomerMutation,
} = customerApi;
