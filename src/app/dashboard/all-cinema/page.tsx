'use client'
import TableBody from '@/components/TableBody';
import TableHeade from '@/components/TableHeade';
import { useAllUserQuery } from '@/redux/feature/auth/authApi';
import { IUser } from '@/redux/feature/auth/authSlice';
import { useDeleteCinemaMutation, useGetCinemaQuery } from '@/redux/feature/cinema/cinemaApi';
import { useDeleteUserMutation, useUpdateUserRoleMutation } from '@/redux/feature/superAdmin/superAdminApi';
import { useAppSelector } from '@/redux/hooks/hooks';
import { ICinema } from '@/types/interface';
import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import { useFormState } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md'

const AllUser = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(5);
    const [search, setSearch] = useState("");

    const { data, isLoading } = useGetCinemaQuery({ page: currentPage, size: limit, search })
    const { sidebar } = useAppSelector(state => state.sidebar)
    console.log(data)
    const [deleteCinema] = useDeleteCinemaMutation()
    const cinemaDelete = async (id:string) => {
        try{
            const {success, message} = await deleteCinema(id).unwrap();
            if(success){
                console.log(success)
                toast.success(message)
            }

        }
        catch (err: any) {
            toast.error(err?.data?.message, { id: 'Signup' })
        }
    }
    const [totalPages, setTotalPages] = useState(data?.meta?.totalPage);
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };


    const handlePageLimit = (num: string) => {
        setLimit(parseInt(num))
    }
    useEffect(() => {
        if (data?.meta?.totalPage > 0) {
            setTotalPages(data.meta.totalPage)
        }

    }, [currentPage, limit, data?.meta, search]);
    return (
        <div className='border h-full w-full lg:mt-10'>
            <Toaster />
            <div className='flex items-center mt-5 gap-5 p-5'>
                <div className="font-semibold">
                    Per Page
                    <select defaultValue={limit} onChange={(event) => handlePageLimit(event.target.value)} className="border-2 p-0.5 ml-2 rounded text-gray-800">
                        <option value="5">05</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="50">50</option>
                    </select>
                </div>
                <div>
                    <input onChange={(e) => setSearch(e.target.value)} className='py-2 px-3 w-full rounded-full border' type="text" placeholder='Search Cinema' />
                </div>
            </div>
             <table className={`table-auto w-full ${sidebar? "hidden": null}`}>
             <thead>
                    <tr>
                        <TableHeade>No</TableHeade>
                        <TableHeade>Image</TableHeade>
                        <TableHeade>Movie Name</TableHeade>
                        <TableHeade>Category</TableHeade>
                        <TableHeade>Production Manager</TableHeade>
                        <TableHeade>Producer Name</TableHeade>
                        <TableHeade>Realease Date</TableHeade>
                        <TableHeade>Price</TableHeade>
                        <TableHeade>Edit</TableHeade>
                        <TableHeade>Action</TableHeade>
                    </tr>
                </thead>
                <tbody>

                    {
                        data?.data?.map((cinema:ICinema, index:number) => <tr key={cinema.id}>
                            <TableBody>{index + 1}</TableBody>
                            <TableBody><img className='w-12 h-12' src={cinema.image} alt="" /></TableBody>
                            <TableBody>{cinema.name}</TableBody>
                            <TableBody>{cinema.category?.name}</TableBody>
                            <TableBody>{cinema.productionManager}</TableBody>
                            <TableBody>{cinema.producerName}</TableBody>
                            <TableBody>{cinema.realeaseDate}</TableBody>
                            <TableBody>{cinema.price}</TableBody>
                            {/* <Link href={`/dashboard/profile/edit/${cinema.id}`}><TableBody><button className='bg-[#00246a] text-white px-3 py-1 rounded-md'>Edit</button></TableBody></Link> */}
                            <TableBody><Link href={`/dashboard/all-cinema/edit/${cinema.id}`}><button className='bg-[#00246a] text-white px-3 py-1 rounded-md'>Edit</button></Link> </TableBody>
                            <TableBody><button className='bg-red-700 text-white px-3 py-1 rounded-md' onClick={()=> cinemaDelete(cinema.id as string)}>Delete</button></TableBody>
                            
                        </tr>)
                    }
                </tbody>
             </table>
             <div className="px-5 py-3 flex justify-end">
                <nav>
                    <ul className="flex items-center space-x-2">
                        <li>
                            <button
                                className="px-2 py-1 rounded-lg mx-2"
                                onClick={handlePreviousPage}
                                disabled={currentPage === 1}
                            >
                                <MdOutlineArrowBackIosNew />
                            </button>
                        </li>
                        {Array.from({ length: totalPages }, (_, index) => {
                            const pageNumber = index + 1;
                            const isCurrentPage = currentPage === pageNumber;
                            const isFirstPage = pageNumber === 1;
                            const isLastPage = pageNumber === totalPages;

                            if (isFirstPage || isLastPage || (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)) {
                                return (
                                    <li
                                        key={pageNumber}
                                        className={`${isCurrentPage ? "font-semibold bg-[#00246a] text-white rounded-full h-8 w-8 text-center" : ""} mr-2`}
                                    >
                                        <button className="px-2 py-1 rounded-lg" onClick={() => handlePageChange(pageNumber)}>
                                            {pageNumber}
                                        </button>
                                    </li>
                                );
                            } else if ((pageNumber === currentPage - 2 && currentPage > 3) || (pageNumber === currentPage + 2 && currentPage < totalPages - 2)) {
                                return (
                                    <li key={pageNumber} className="mr-2">
                                        ...
                                    </li>
                                );
                            }
                        })}
                        <li>
                            <button
                                className={`px-2 py-1 rounded-lg`}
                                onClick={handleNextPage}
                                disabled={currentPage === totalPages}
                            >
                                <MdOutlineArrowForwardIos />
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default AllUser;