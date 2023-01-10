import React, { useEffect } from 'react'
import { getData } from '../api'
import { useDispatch , useSelector} from 'react-redux';
import { addProducts } from '../services/productSlice';
import Card from './Card';

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector(state=>state.product.products);
    console.log(products);
    const getProductsData = async()=>{
        const data = await getData('/products');
        dispatch(addProducts(data))
    };
    useEffect(()=>{
        getProductsData()
    },[])
  return (
    <div className='my-5 d-flex flex-wrap gap-4 justify-content-center'>
        {products?.map((item)=>(
            <Card key={item.id} item={item}/>
        ))}
    </div>
  )
}

export default Products