
import React from 'react';

const Header = () => {
  return (
    <div className="container mx-auto py-4 px-6 flex items-center justify-between">
      <div>
       <h2 className='text-lg font-semibold'> Order </h2>  
     </div>
      <button className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">Create New</button>
    </div>
  );
};

export default Header;
