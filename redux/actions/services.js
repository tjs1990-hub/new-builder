import * as actionTypes from '../actions/actionTypes';
import { groq } from 'next-sanity';
import { getClient } from '../../lib/sanity.server';

export const getServiceData = (slug) => async (dispatch) => {
  const query = groq`
    *[_type == "services"]{
      _id,
      title,
      slug,
      body,
      excerpt,
      mainImage,
      locations[]->,
   
      
      
    }
    
    
    
    `;

  try {
    // const client = ...
    const serviceData = await getClient().fetch(query);

    dispatch({
      type: actionTypes.GET_ALL_SERVICES,
      payload: serviceData
    });
  } catch (err) {
    console.log(err);
  }
};
