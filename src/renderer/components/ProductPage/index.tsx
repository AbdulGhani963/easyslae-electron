import React from 'react';
import ProductsList from './ProductsList';


const ProuctPage = () => {
  return (
    <>
      <div className='mb-4 font-comfortaa font-bold text-[#666666]'>
          <h1 className="mb-11 text-3xl">Products</h1>
          <h2 className="mb-1">Search</h2>
          <div
            className="w-full flex items-center justify-between md:flex-row flex-col 
          space-y-4 md:space-y-0 md:space-x-2 space-x-0"
          >
            <div className="md:min-w-[35%] md:w-auto w-full flex md:flex-row flex-col gap-2">
              <input
                type="search"
                className="w-[100%] p-1 pl-[10px] border-[1.5px] border-gray-300 
                rounded-sm focus:outline-none"
              />
            </div>
            <div className="flex w-full justify-between">
              <div>
                <select
                  id="sortby"
                  name="sotyby"
                  className="p-[5.5px] border-[1.5px] rounded-sm border-gray-300 w-[94px] 
                  focus:outline-none"
                  defaultValue="Sort by"
                >
                  <option>sort by</option>
                  <option value="volvo">Column</option>
                  <option value="suzuki">Row</option>
                </select>
              </div>
              <div
                className="px-4 py-1 text-center bg-[#3599db] hover:bg-[#247bb5] 
            text-white text-base rounded-sm font-bold cursor-pointer"
              >
                <button>+</button>
              </div>
            </div>
          </div>
        </div>
      <ProductsList />
    </>
  );
};

export default ProuctPage;
