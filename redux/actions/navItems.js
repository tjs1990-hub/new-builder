import * as actionTypes from '../actions/actionTypes';
import { groq } from 'next-sanity';
import { getClient } from '../../lib/sanity.server';

export const getNavItems = () => async (dispatch) => {
  const query = groq`
  *[_type == 'navigation' && title == "Main Nav"]{
      _id,
      title,
      items
      
     
      
    }
    
    
    
    `;

  try {
    // const client = ...
    const navItems = await getClient().fetch(query);

    dispatch({
      type: actionTypes.GET_NAV_ITEMS,
      payload: navItems
    });
  } catch (err) {
    console.log(err);
  }
};
