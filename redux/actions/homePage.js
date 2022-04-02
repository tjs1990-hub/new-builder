import * as actionTypes from '../actions/actionTypes';
import { groq } from 'next-sanity';
import { getClient } from '../../lib/sanity.server';

export const getHomePage = () => async (dispatch) => {
  const query = groq`
*[_type == "siteConfig"][0]{
  title,
  _id,
  frontpage->{
    _id,
  title,
  slug,
  bodytop,
  mainImage,
  body,
  seotitle,
  seodesc,
  callout
  },
  
}
    
    
    
    `;

  try {
    // const client = ...
    const homePageData = await getClient().fetch(query);

    dispatch({
      type: actionTypes.GET_HOME_PAGE,
      payload: homePageData
    });
  } catch (err) {
    console.log(err);
  }
};
