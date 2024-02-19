
import React from 'react';


const Header = () => {

  return (
    <div className="container sm:w-[90%] mx-auto py-4 px-6 flex items-center justify-between">
      <div>
       <h2 className='text-lg sm:text-2xl font-bold'> Orders </h2>  
     </div>
      <button className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">Create New</button>
    </div>
  );
};

export default Header;
