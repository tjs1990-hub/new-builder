import { PhoneIncomingIcon, StarIcon, MapIcon, MailIcon} from '@heroicons/react/solid';

const GetQuote = () => {
  return (
    <>
      <div className="w-w-full h-h-auto    grid grid-cols-2 p-5">
        <div className=" mr-2 mb-2 bg-blue-dark hover:bg-green items-center grid justify-items-center flex-col rounded">
          <MailIcon className="h-h-5 w-w-33 text-white  pt-3 pb-3 rounded-full" />
          <h3 className="text-white text-xs  font-semibold uppercase p-2">Get A Quote </h3>
        </div>
        <div className=" mr-2 mb-2 bg-blue-dark hover:bg-green items-center grid justify-items-center flex-col rounded">
            
         <StarIcon className="h-h-5 w-w-33  text-white  pt-3 pb-3 rounded-full" />
          <h3 className="text-white font-semibold uppercase p-2">Google Rated </h3>

        </div>
        <div className=" mr-2 bg-blue-dark hover:bg-green items-center grid justify-items-center flex-col rounded">
            
          <MapIcon className="h-h-5 w-w-33  text-white  pt-3 pb-3 rounded-full" />
          <h3 className="text-white font-semibold uppercase p-2">Locations  </h3>

        </div>
        <div className=" mr-2 bg-blue-dark hover:bg-green items-center grid justify-items-center flex-col rounded">
            
          <StarIcon className="h-h-5 w-w-33  text-white  pt-3 pb-3 rounded-full" />
          <h3 className="text-white font-semibold uppercase p-2">Read Reviews </h3>

        </div>

      </div>
    </>
  );
};

export default GetQuote;
