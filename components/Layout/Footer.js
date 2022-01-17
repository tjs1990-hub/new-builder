

const Footer = (props) => {

 const links = ['Home', 'About', 'Services', 'Blog', 'Contact', 'Locations' ]

   
return(
    <>
    
    <footer className='h-h-auto mt-10 border-t-2 border-t-blue-dark'>

 



    <div className="grid grid-cols-1 md:grid-col-4  lg:grid-cols-4 gap-4 justify-items-center items-center  h-h-full p-10 ">

    <div className='md:col-span-1 lg:col-span-1 mb-5 '>
                Logo
            </div>
 
        <ul className='w-w-full pl-5 mr-1 '>
        <h3 className='font-semibold mb-2'>Site Map</h3>
            {links.map((l, i) => (

              
                <li key={i}>{l}</li>
          
            ))}
        </ul>
        <ul className='w-w-full pl-5  mr-1  '>
        <h3 className='font-semibold mb-2'>Related Blogs</h3>
            {links.map((l, i) => (

            
        
                <li key={i}>{l}</li>
          
          
            ))}
        </ul>
        <ul className='w-w-full pl-5  mr-1 
    '>
        <h3 className='font-semibold mb-2'>Follow Us</h3>
            {links.map((l, i) => (

              
                <li key={i}>{l}</li>
          
            ))}
        </ul>
        
        
        
  
        
        
        
           
          </div>




          <div className='h-h-90 w-w-full bg-smoke pt-5 text-center '>Copyright ©  {new Date().getFullYear()} TJM Landscapes Leeds</div>

          <div className='h-h-auto w-w-full bg-green pt-5 text-center '>
              Address: 9 Copley hill, Birstall, WF17 0DT<br/>
              Telephone: 01924477432
          </div>
  </footer>
    </>
)
}


export default Footer