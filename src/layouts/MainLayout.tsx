import React from "react";
import ReactHelmet from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  title?: string;
  children?: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <ReactHelmet>
        <title>{title}</title>
      </ReactHelmet>
      <Header />
      <main className='w-full'>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
