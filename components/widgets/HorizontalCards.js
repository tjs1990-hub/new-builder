import {useState} from 'react'
import { useSelector } from 'react-redux'
import Ratings from 'react-ratings-declarative'
import toPlainText from '../PlainText'





const HorizontalCards = (props) => {

    const services = useSelector((state) => state.services);

    const [rating, setRating] = useState(4)

    



const data = Object.keys(services).map(s => services[s])




    return(
        <div className="flex flex-col bg-white m-auto p-auto h-h-auto w-full">
<span
        className="py-5  text-center lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold  "
      >
      <span className='text-g-blue text-6xl'>G</span>
      <span className='text-g-red text-6xl'>o</span>
      <span className='text-g-yellow text-6xl'>o</span>
      <span className='text-g-blue text-6xl'>g</span>
      <span className='text-g-green text-6xl'>l</span>
      <span className='text-g-red text-6xl'>e</span>

  
    <h2 className='text-gray-dark text-4xl'>Reviews</h2>
    
   
      </span>

      
      <div
        className="flex overflow-x-scroll pb-10 hide-scroll-bar"
      >
        <div
          className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 "
        >


            {data.map(d => (
                      <div className="inline-block px-3" key={d.title}>
                      <div
                        className="w-w-64 h-h-64 text-center flex flex-col  justify-items-center overflow-hidden rounded-lg shadow-md bg-white  hover:shadow-xl transition-shadow duration-300 ease-in-out"
                      >



                   <div className='p-5 flex flex-col'>  <h2 className='mb-5 mt-2 font-semibold text-blue-dark'> {d.title} </h2>

                   <span>{toPlainText(d.excerpt)}...</span>





                   <span className='mt-5'>
                   <Ratings
            rating={rating}
            widgetRatedColors="#00DFB6"
            size='10px'>
          
            <Ratings.Widget        widgetDimension="30px"   />
            <Ratings.Widget    widgetDimension="30px"     />
            <Ratings.Widget    widgetDimension="30px"     />
            <Ratings.Widget     widgetDimension="30px"     />
            <Ratings.Widget      widgetDimension="30px"     />
        
          </Ratings>
                   </span>

          </div> 

                         
                     


                      </div>
                    </div>
            ))}
      
       






        </div>
      </div>

      <style jsx>{`
    .hide-scroll-bar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      .hide-scroll-bar::-webkit-scrollbar {
        display: none;
      }
      `}</style>
</div>
    )
}


export default HorizontalCards