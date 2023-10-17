import { apiSlice } from "@/redux/RootApi/apiSlice";

const imageUploadApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
       
        imageUpload: builder.mutation({
            query: (data) => ({
                url: "/file/upload",
                method: "POST",
                 body:data,
            })
        }),
    })
})

export const { useImageUploadMutation} = imageUploadApi;