import React from 'react';
import { Header } from 'antd/lib/layout/layout';
import { Button } from 'antd';

interface ILayout {
  component: React.ReactNode;
}

function PageLayout({ component }: ILayout) {

  return (
    <div className='bg-black'>
      <Header className={`bg-black flex items-center justify-between`}>
        <h1 className="text-dark-pink-contrast text-4xl font-bold capitalize">Flixer</h1>
        <Button className='bg-dark-pink-contrast text-white hover:bg-dark-pink-contrast hover:text-white border-none'>Sign In</Button>
      </Header>
      {component}
    </div>
  );
}

export default PageLayout;
