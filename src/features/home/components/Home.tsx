import React from 'react';
import CreatePots from 'src/features/post/CreatePots';
import Stories from 'src/features/post/Stories';
import YourPage from 'src/features/settings/components/YourPage';

import FeaturedExperts from './FeaturedExperts';
import HomeGigsView from './HomeGigsView';
import Shortcuts from './Shortcuts';

const Home = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 min-h-screen">
      <div className="flex flex-wrap -mx-4">
        {/* Shortcuts - a la izquierda */}
        <div className="w-full lg:w-1/4 px-4 mb-6 lg:mb-0">
          <Shortcuts />
        </div>

        {/* CreatePots - en el centro */}
        <div className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0">
          <Stories />
          <CreatePots />
        </div>

        {/* YourPage - a la derecha */}
        <div className="w-full lg:w-1/4 px-4">
          <YourPage />
        </div>
      </div>

      {/* HomeGigsView - Debajo de los componentes principales */}
      <div className="mt-6">
        <HomeGigsView gigs={[]} title="post recientes" subTitle="" category="" />
        <FeaturedExperts sellers={[]} />
      </div>
    </div>
  );
};

export default Home;
