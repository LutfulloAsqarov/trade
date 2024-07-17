import { api } from "./index";

export const AdminApi = api.injectEndpoints({
    endpoints: (build) => ({
        getAdmin: build.query({
            query: (params) => ({
                url: "/get/admins",
                params,
            }),
            providesTags: ["Admin", "Customer"],
        }),
        getProfile: build.query({
            query: (id) => ({
                url: `/get/profile`,
            }),
            providesTags: ["Admin", "Customer"],
        }),
        // createAdmin: build.mutation({
        //     query: (body) => ({
        //         url: "/create/Admin",
        //         method: "POST",
        //         body,
        //     }),
        //     invalidatesTags: ["Admin", "Customer"],
        // }),
        // deleteAdmin: build.mutation({
        //     query: (id) => ({
        //         url: `/delete/Admin/${id}`,
        //         method: "DELETE",
        //     }),
        //     invalidatesTags: ["Admin", "Customer"],
        // }),
        // updateAdmin: build.mutation({
        //     query: ({ id, body }) => ({
        //         url: `/update/admin/${id}`,
        //         method: "PUT", // or "PATCH"
        //         body,
        //     }),
        //     invalidatesTags: ["Admin", "Customer"],
        // }),
    }),
});

export const {
    useGetAdminQuery,
    useGetProfileQuery,
    useCreateAdminMutation,
    useDeleteAdminMutation,
    useUpdateAdminMutation,
} = AdminApi;
