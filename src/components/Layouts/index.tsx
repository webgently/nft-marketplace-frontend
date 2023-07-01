import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layouts = ({ children }: ComPropsObject) => {
  return (
    <div className="min-h-100vh flex flex-col bg-primary text-white">
      <Header />
      <div className="flex-1 flex flex-col pt-[100px]">{children}</div>
      <Footer />
    </div>
  );
};
export default Layouts;
