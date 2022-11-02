import type { NextPage } from 'next';
import Head from 'next/head';
import { AirdropView } from '../views';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Airdrop</title>
        <meta name="description" content="Kin SDK-less DApp Demo" />
      </Head>
      <AirdropView />
    </div>
  );
};

export default Home;
