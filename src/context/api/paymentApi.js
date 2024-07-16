import { api } from "./index";

export const PaymentApi = api.injectEndpoints({
    endpoints: (build) => ({
        getPayment: build.query({
            query: (params) => ({
                url: "/get/payments",
                params,
            }),
            providesTags: ["Payment", "Customer"],
        }),
        getPaymentById: build.query({
            query: (id) => ({
                url: `/get/payment/${id}`,
            }),
            providesTags: ["Payment", "Customer"],
        }),
        createPayment: build.mutation({
            query: (body) => ({
                url: "/create/payment",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Payment", "Customer"],
        }),
        deletePayment: build.mutation({
            query: (id) => ({
                url: `/delete/payment/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Payment", "Customer"],
        }),
        updatePayment: build.mutation({
            query: ({ id, body }) => ({
                url: `/update/payment/${id}`,
                method: "PUT", // or "PATCH"
                body,
            }),
            invalidatesTags: ["Payment", "Customer"],
        }),
    }),
});

export const {
    useGetPaymentQuery,
    useGetPaymentByIdQuery,
    useCreatePaymentMutation,
    useDeletePaymentMutation,
    useUpdatePaymentMutation,
} = PaymentApi;
