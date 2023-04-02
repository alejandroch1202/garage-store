import Layout from '@containers/Layout/Layout';
import Search from '@components/Search/Search';
import ProductList from '@containers/ProductList/ProductList';
import ProductInfo from '@components/ProductInfo/ProductInfo';
import Head from 'next/head';

function Home() {
  return (
    <Layout>
      <Head>
        <title>Garage Store</title>
      </Head>
      <Search />
      <ProductInfo />
      <ProductList />
    </Layout>
  );
}

export default Home;
