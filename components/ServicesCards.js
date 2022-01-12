import React from 'react';
import { useSelector } from 'react-redux';
import Image from '../components/Image';
import Link from 'next/link';

const ServicesCards = () => {
  const services = useSelector((state) => state.services.services);

  return (
    <>
      <div className="grid rid grid-cols-1 md:grid-cols-3 md:gap-2 p-10 justify-items-center items-center  ">
        {Object.keys(services).map((key) => {
          const item = services[key];

          return (
            <span key={item._id}>
              <div className="max-w-sm rounded overflow-hidden shadow-lg mb-10">
                <div className="w-w-full">
                  <Image image={item.mainImage.asset._ref} />
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{item.title}</div>
                  <p className="text-gray-dark text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <p className="font-xs text-gray-light text-center">
                  Popular areas
                </p>
                <div className="px-6 pt-4 pb-2 grid grid-cols-3">
                  {item.locations.map((t) => (
                    <>
                      <Link href={`/locations/${t.slug.current}`} key={t._id}>
                        <a>
                          <span className="inline-block bg-gray-dark rounded-full px-3 py-1 text-sm font-semibold text-gray-light mr-2 mb-2 hover:text-white ">
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
