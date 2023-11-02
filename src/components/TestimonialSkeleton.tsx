import React from 'react';

const TestimonialSkeleton = () => {
    return (
        <div>
            <div className="border rounded-lg shadow-md p-4 mb-10">
                <div className="animate-pulse">
                    <div className="mt-2 h-6 bg-gray-300 rounded-lg mb-4"></div>
                    <div className="mt-2 h-6 bg-gray-300 rounded-lg mb-4"></div>
                    <div className="mt-2 h-6 bg-gray-300 rounded-lg mb-4"></div>
                    <div className='flex items-center gap-5'>
                        <div className="h-16 w-16 rounded-full bg-gray-500 mb-2"></div>
                        <div className='flex flex-col gap-5 mt-3 h-20 w-full'>
                            <div className="h-4 w-1/2 bg-gray-400 rounded mb-2"></div>
                            <div className="h-4 w-1/2 bg-gray-400 rounded mb-2"></div>
                            <div className="h-4 w-1/2 bg-gray-400 rounded mb-2"></div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default TestimonialSkeleton;