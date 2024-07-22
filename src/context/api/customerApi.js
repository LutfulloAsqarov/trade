import { api } from "./index";

export const customerApi = api.injectEndpoints({
    endpoints: (build) => ({
        getCustomers: build.query({
            query: ({ limit, page, paid, debt, created, budget }) => ({
                url: `/get/customers?limit=${limit}&skip=${page}&paidToday=${paid}&debt=${debt}&createdAt=${created}&budget=${budget}`,
            }),
            providesTags: ["Customer"],
        }),
        getCustomerById: build.query({
            query: (id) => ({
                url: `/get/customer/${id}`,
            }),
            providesTags: ["Customer"],
        }),
        createCustomer: build.mutation({
            query: (body) => ({
                url: "/create/customer",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Customer"],
        }),
        // deleteCustomer: build.mutation({
        //     query: (id) => ({
        //         url: `/customers/${id}`,
        //         method: "DELETE",
        //     }),
        //     invalidatesTags: ["Customer"],
        // }),
        updateCustomer: build.mutation({
            query: ({ id, body }) => ({
                url: `/update/customer/${id}`,
                method: "PATCH", // or "PATCH"
                body,
            }),
            invalidatesTags: ["Customer"],
        }),
    }),
});

export const {
    useGetCustomersQuery,
    useGetCustomerByIdQuery,
    useCreateCustomerMutation,
    useDeleteCustomerMutation,
    useUpdateCustomerMutation,
} = customerApi;
