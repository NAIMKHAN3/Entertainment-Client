"use client"
import { useGetBlogQuery } from '@/redux/feature/blog/blogApi';
import React from 'react';

const Blog = () => {
    const { data , isLoading} = useGetBlogQuery(undefined)
    if(isLoading){
      return  <h1 className='text-center font-semibold text-xl mt-5'>Loading...</h1>
    }
    return (
       <div>
        <h1 className='text-center font-semibold text-xl mt-5'>Blog List</h1>
         <div className='grid grid-cols-1 p-3 lg:grid-cols-2 gap-3 max-w-6xl mx-auto my-5'>
            {
                data?.data?.map((blog: any) => <div key={blog.id} className='flex flex-col lg:flex-row border p-3 rounded-md'>
                    <img className='w-full lg:w-36 ' src={blog.image} alt="" />
                    <div className='p-3'>
                        <h1 className='font-semibold text-xl my-2'>{blog?.title}</h1>
                        <p>{blog?.description}</p>
                    </div>
                </div>)
            }
        </div>
       </div>
    );
};

export default Blog;