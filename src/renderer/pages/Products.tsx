import AppLayout from '../Layout/AppLayout';
import ProductPage from '../components/ProductPage';

const Products = () => {

  return (
    <AppLayout>
      <div className="p-3 min-h-[33rem]">
        <ProductPage />
      </div>
    </AppLayout>
  );
};

export default Products;
