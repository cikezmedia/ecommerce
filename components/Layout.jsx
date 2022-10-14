import React from 'react';
import { Header, Footer } from './';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col bg-white text-black min-h-screen'>
      <Header />
      <ToastContainer position='top-right' autoClose={5000} limit={1} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
