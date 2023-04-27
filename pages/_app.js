import Footer from '@/components/footer';
import Layout from '@/components/layout';
import Navbar from '@/components/navbar';
import '@/styles/globals.css';
import { Figtree } from 'next/font/google';

const figtree = Figtree({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <div className={figtree.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
