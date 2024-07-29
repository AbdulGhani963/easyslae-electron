import AppLayout from '../Layout/AppLayout';

const Customers = () => {
  return (
    <AppLayout>
      <div className='p-10 bg-white rounded-lg min-h-[30rem]'>
        <h1 className='text-center mt-32 font-bold text-lg'>Oops! No customer found.</h1>
      </div>
    </AppLayout>
  );
};

export default Customers;
