import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ResponsiveImage from './ResponsiveImage';
import Link from 'next/link';
import Content from '../components/Content';
import toPlainText from '../components/PlainText';

const ServicesCards = () => {
  const services = useSelector((state) => state.services);

  return (
    <>
      <div className="grid rid grid-cols-2 h-max-h-c gap-4  md:grid-cols-3 md:gap-2 p-14 justify-items-center items-center transition-all ease-in-out  ">
        {Object.keys(services).map((key) => {
          const item = services[key];

          return (
            <span key={item._id}>
              <div className=" max-w-xs  rounded overflow-hidden shadow-lg hover:shadow-2xl mb-5 flex flex-col max-h-c">
                <div className="w-w-full transition-all hover:scale-110">
                  <ResponsiveImage image={item.mainImage.asset._ref} />
                </div>
                <div className="px-6 py-4 flex flex-col">
                  <div className="font-bold text-xl mb-2 text-blue-dark hover:underline hover:scale-110 hover:text-gray-dark transition-all ease-in-out">
                    {item.title}
                  </div>
                  <span className="text-gray-dark text-base  ">
                    {toPlainText(item.excerpt)}...
                  </span>
                  <Link href={`services/${item.slug.current}`}>
                  <button className=" duration-200 font-xs bg-green hover:bg-blue-dark hover:text-white text-blue-dark  font-bold py-1 px-4 rounded mr-4 ml-4 mt-4">
                    Learn More
                  </button>
                  </Link>
                </div>
                <p className="font-xs text-dark-blue text-center">
                  Popular areas
                </p>
                <div className="px-6 pt-4 pb-2 grid grid-cols-3">
                  {item &&
                    item.locations.map((t) => (
                      <Link href={`/locations/${t.slug.current}`} key={t._id}>
                        <a>
                          <span
                            className=" bg-blue-dark rounded-full px-3 py-3 text-sm font-semibold text-gray-light mr-2 mb-2  hover:text-white flex justify-evenly"
                            key={t.slug.current}
                          >
                            #{t.slug.current}
                          </span>
                        </a>
                      </Link>
                    ))}
                </div>
              </div>
            </span>
          );
        })}
      </div>
    </>
  );
};
export default ServicesCards;
