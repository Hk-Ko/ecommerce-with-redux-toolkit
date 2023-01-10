import React from 'react'
import { useSelector } from 'react-redux';
import Card from './Card';
import FavCard from './FavCard';

const Fav = () => {
    const favItems = useSelector(state=>state.product.fav);
  return (
    <div className='d-flex flex-wrap gap-4 my-5 justify-content-center'>
        {favItems?.map(item=><FavCard key={item.id} item={item}/>)}
    </div>
  )
}

export default Fav