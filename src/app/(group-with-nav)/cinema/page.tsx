"use client"
import Cart from '@/components/Cart';
import { useGetCinemaQuery } from '@/redux/feature/cinema/cinemaApi';
import { ICinema } from '@/types/interface';
import React, { useEffect, useState } from 'react';
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md'

const Cinema = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(5);
    const [search, setSearch] = useState("");

    const { data, isLoading } = useGetCinemaQuery({ page: currentPage, size: limit, search })
  
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
            console.log('Naim')
            setTotalPages(data.meta.totalPage)
        }

    }, [currentPage, limit, data?.meta, search]);
    if (isLoading) {
        return <h1 className='text-center font-semibold mt-5 text-xl'>Loading...</h1>
    }
    return (
        <div className='max-w-6xl mx-auto'>
            <div className='flex px-3 items-center mt-5 gap-5'>
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
            <div className='grid p-3 grid-cols-1 my-10 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-6xl mx-auto'>
                {
                    data?.data?.map((cinema: ICinema) => <Cart key={cinema.id} cinema={cinema} />)
                }
            </div>
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

export default Cinema;