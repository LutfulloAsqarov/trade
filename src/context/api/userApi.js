import { api } from "./index";

export const userApi = api.injectEndpoints({
    endpoints: (build) => ({
        getAdmins: build.query({
            query: (params) => ({
                url: "/get/admins",
                params,
            }),
            providesTags: ["User"],
        }),
        getAdminById: build.query({
            query: (id) => ({
                url: `/get/admin/${id}`,
            }),
            providesTags: ["User"],
        }),
        signInAdmin: build.mutation({
            query: (body) => ({
                url: "/admin/sign-in",
                method: "POST",
                body,
            }),
            invalidatesTags: ["User"],
        }),
    }),
});

export const {
    useGetAdminsQuery,
    useGetAdminByIdQuery,
    useSignInAdminMutation,
} = userApi;
