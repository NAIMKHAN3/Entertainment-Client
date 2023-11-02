import React from 'react';

const CartSkeleton = () => {
    return (
        <div className="border  shadow-md p-4">
        <div className="animate-pulse">
          <div className="h-48 bg-gray-300  mb-4"></div>
          <div className="h-4 w-1/2 bg-gray-300 rounded mb-2"></div>
          <div className="flex justify-between items-center gap-5 mt-3">
            <div className="h-4 w-full bg-gray-300 rounded mb-2"></div>
            <div className="h-4 w-full bg-gray-300 rounded mb-2"></div>
          </div>
        </div>
  
        {/* Buttons */}
        <div className="flex justify-between items-center mt-2 animate-pulse">
          <button className="text-[#4d4d4d] w-full h-8 mr-1 font-inter bg-[#474747] text-lg font-semibold rounded-lg"></button>
          <button className="text-sm text-white w-full h-8 ml-1 bg-[#474747] rounded-lg"></button>
        </div>
      </div>
    );
};

export default CartSkeleton;