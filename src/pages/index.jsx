import Layout from '@containers/Layout/Layout';
import Search from '@components/Search/Search';
import ProductList from '@containers/ProductList/ProductList';
import ProductInfo from '@components/ProductInfo/ProductInfo';
import ShoppingCartItem from '@containers/ShoppingCartItem/ShoppingCartItem';
import Head from 'next/head';

function Home() {
  return (
    <Layout>
      <Head>
        <title>Garage Store</title>
      </Head>
      <Search />
      {/* <ShoppingCartItem /> */}
      {/* <ProductInfo /> */}
      <ProductList />
    </Layout>
  );
}

export default Home;
