import * as actionTypes from '../actions/actionTypes';
import { groq } from 'next-sanity';
import { getClient } from '../../lib/sanity.server';

export const getPageData = (slug) => async (dispatch) => {
  const query = groq`
    *[_type == "page" && slug.current != $slug]{
      _id,
      title,
      slug
      
    }
    
    
    
    `;

  try {
    // const client = ...
    const pageData = await getClient().fetch(query, { slug: slug });

    dispatch({
      type: actionTypes.GET_ALL_PAGES,
      payload: pageData
    });
  } catch (err) {
    console.log(err);
  }
};
