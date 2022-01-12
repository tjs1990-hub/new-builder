import React from 'react';
import { useSelector } from 'react-redux';
import Image from '../components/Image';
import Link from 'next/link';
import Content from '../components/Content';

const ServicesCards = () => {
  const services = useSelector((state) => state.services);

  return (
    <>
      <div className="grid rid grid-cols-2 gap-4 md:grid-cols-3 md:gap-2 p-10 justify-items-center items-center">
        {Object.keys(services).map((key) => {
          const item = services[key];

          return (
            <span key={item._id}>
              <div className="max-w-sm rounded overflow-hidden shadow-lg mb-10 flex flex-col max-h-c">
                <div className="w-w-full transition-all hover:scale-110">
                  <Image image={item.mainImage.asset._ref} />
                </div>
                <div className="px-6 py-4 flex flex-col">
                  <div className="font-bold text-xl mb-2 text-green hover:underline hover:scale-110 hover:text-gray-dark transition-all ease-in-out">
                    {item.title}
                  </div>
                  <span className="text-gray-light text-base  hover:text-gray-dark ">
                    <Content content={item.excerpt} />
                  </span>
                  <button className=" font-xs bg-green hover:bg-gray-light hover:text-green text-white  font-bold py-1 px-4 rounded mr-4 ml-4 mt-4">
                    Read More
                  </button>
                </div>
                <p className="font-xs text-gray-light text-center">
                  Popular areas
                </p>
                <div className="px-6 pt-4 pb-2 grid grid-cols-3">
                  {item &&
                    item.locations.map((t) => (
                      <>
                        <Link href={`/${t.slug.current}`} key={t._id}>
                          <a>
                            <span
                              className=" bg-gray-dark rounded-full px-3 py-1 text-sm font-semibold text-gray-light mr-2 mb-2  hover:text-white flex justify-evenly"
                              key={t.slug.current}
                            >
                              #{t.slug.current}
                            </span>
                          </a>
                        </Link>
                      </>
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
