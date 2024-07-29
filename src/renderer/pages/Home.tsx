import React from 'react';
import AppLayout from '../Layout/AppLayout';

const Home = () => {
  return (
    <AppLayout>
      <div className="p-10 bg-white rounded-lg text-center min-h-[30rem]">
        <h1 className='text-center font-bold text-2xl'>Welcome my website</h1>
      </div>
    </AppLayout>
  );
};

export default Home;
