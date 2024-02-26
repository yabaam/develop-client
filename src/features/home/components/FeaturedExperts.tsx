/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, ReactElement } from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// import { ISellerDocument } from 'src/features/sellers/interfaces/seller.interface';
// import StarRating from 'src/shared/rating/StarRating';
// import { lowerCase, rating } from 'src/shared/utils/utils.service';
// import { v4 as uuidv4 } from 'uuid';
import { IFeaturedExpertProps } from '../interfaces/home.interface';

const FeaturedExperts: FC<IFeaturedExpertProps> = ({ sellers }): ReactElement => {
  return (
    <div className="mx-auto my-8 flex flex-col w-full">
      <div className="flex w-full flex-col justify-between self-center">
        <h2 className="flex self-center text-base font-bold md:text-2xl lg:text-3xl">Negocios mas Populares</h2>
        <h4 className="pt-1 text-center text-sm md:text-base lg:text-lg">
          This sections mostrar los negocios mas rankiados de la semana en una cuidad
        </h4>
      </div>
      <div className="mt-6">
        <div className="grid gap-8 pt-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[1, 2, 3, 4].map((item: number) => (
            <div key={item} className="w-full rounded-lg border border-grey bg-white shadow">
              <div className="flex flex-col items-center pb-10 pt-5">
                <img
                  className="mb-3 h-24 w-24 rounded-full shadow-lg"
                  src="https://placehold.co/330x220?text=Profile+Image"
                  alt="Profile image"
                />
                <h5 className="mb-1 xl:text-xl font-medium text-gray-900 ">Panaderia</h5>
                <span className="text-sm w-[90%] mb-1 text-gray-500 text-center dark:text-gray-500">Ranting</span>
                <div className="flex justify-center w-full gap-x-1 self-center h-6">
                  <div className="mt-1 w-20 gap-x-2 flex">
                    <FaRegStar className="mr-1 text-orange-400" />
                    <FaRegStar className="mr-1 text-orange-400" />
                    <FaRegStar className="mr-1 text-orange-400" />
                    <FaRegStar className="mr-1 text-orange-400" />
                  </div>
                  <div className="ml-2 flex self-center gap-1 rounded bg-orange-400 px-1 text-xs">
                    <span className="font-bold text-white">5</span>
                  </div>
                </div>
                <div className="mt-4 flex space-x-3 md:mt-6">
                  <Link
                    to=""
                    className="rounded bg-sky-500 px-6 py-3 text-center text-sm font-bold text-white hover:bg-sky-400 focus:outline-none md:px-4 md:py-2 md:text-base"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedExperts;
