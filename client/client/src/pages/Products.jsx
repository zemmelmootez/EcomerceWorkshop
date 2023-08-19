import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/slices/ProductSlice'
import CardProduct from '../Components/CardProduct'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Products() {

  const dispatch=useDispatch()

  const {products}=useSelector(state=>state.productReducer)
  useEffect(()=>{
    dispatch(getProducts())
  })
  return (
    <div className='d-flex' style={{gap:"20px",flexWrap:"wrap"}}>

        {products&&products.map(e=><div className=''>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={e.imgLink} />
      <Card.Body>
        <Card.Title>{e.name}</Card.Title>
        <Card.Text>
        {e.description}
        </Card.Text>
        <Card.Text>
        {e.price} dt
        </Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
        </div>)}
      
    </div>
  )
}

export default Products
