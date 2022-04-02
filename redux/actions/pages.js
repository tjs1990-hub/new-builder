import * as actionTypes from '../actions/actionTypes';
import { groq } from 'next-sanity';
import { getClient } from '../../lib/sanity.server';

export const getPageData = (slug) => async (dispatch) => {
  const query =  groq`
  *[_type == "page"]{
    _id,
    title,
    slug
    
  }
  
  
  
  `;
  const queryTwo =  groq`
  *[_type == "page" && slug.current != ${slug}]{
    _id,
    title,
    slug
    
  }
  
  
  
  `;

if(slug) {
  try {
    // const client = ...
  
    const pageData = await getClient().fetch(query);

    dispatch({
      type: actionTypes.GET_ALL_PAGES,
      payload: pageData
    });
  } catch (err) {
    console.log(err);
  }
}


try {
  // const client = ...

  const pageData = await getClient().fetch(queryTwo);

  dispatch({
    type: actionTypes.GET_ALL_PAGES,
    payload: pageData || pagesData
  });
} catch (err) {
  console.log(err);
}
};
