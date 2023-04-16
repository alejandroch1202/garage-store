import { useEffect, useState } from 'react';

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(API);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('API error');
      }
    }

    fetchData();
  }, [API]);

  return products;
};

export default useGetProducts;
