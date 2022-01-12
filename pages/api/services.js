import {groq} from 'next-sanity'
import {getClient} from '../../lib/sanity.server'



const handler = async (req, res) => {

    
    const query = groq`
    *[_type == "services"]{
      _id,
      title,
      body,
      mainImage,
      body,
      slug
    }
    
    
    
    `;

    try {

        const services = await getClient.fetch(query);

        if(services)  return res.status(200).json(services)
        
    } catch (error) {
        res.status(500).send('Internal server error in services API endpoint')
    }






}



export default handler