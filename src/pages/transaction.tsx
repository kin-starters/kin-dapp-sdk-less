import type { NextPage } from 'next';
import Head from 'next/head';
import { SendKinView } from '../views';

const SendKin: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Kin SDK-less DApp Demo</title>
        <meta name="description" content="Basic Functionality" />
      </Head>
      <SendKinView />
    </div>
  );
};

export default SendKin;
