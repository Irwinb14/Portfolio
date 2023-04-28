import Layout from '@/components/layout';
import '@/styles/globals.css';
import { Figtree } from 'next/font/google';
import Head from 'next/head';

const figtree = Figtree({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <div className={figtree.className}>
      <Head>
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
