import { useRouter } from 'next/router';
import React from 'react'
import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Button } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { addToCart } from '@/redux/features/cart/cartSlice';

const CategoryDetails = ({ data }) => {
    const router = useRouter()
    const name = router.query.categoryName;

    const dispatch = useAppDispatch();

    const handleAddProduct = (product) => {
        dispatch(addToCart(product));
    };
    const { products, total } = useAppSelector((state) => state.cart);
    console.log(products);

    return (
        <section className='bg-secondary bg-gradient bg-opacity-25  p-md-3 p-1'>
            <div className='container-fluid px-md-5 px-4 my-5'>
                <CardGroup className=''>
                    <div className="row bg-white p-4 shadow-sm">
                        <h2 className='text-center fw-bold py-2'>{name}</h2>
                        {data?.slice(0, 16).map((product) => (

                            <Card className="col-md-3 rounded-0 p-0" key={product.id}>
                                <Link className='text-decoration-none text-dark' href={`/product/${product?._id}`} >
                                    <Card.Img variant="top" src={product.image} />
                                    <Card.Body>
                                        <Card.Title className='fs-6'>{product.name.slice(0, 29)}</Card.Title>
                                        <Card.Text>
                                            <small className='text-muted d-block'>Category: {product.price}</small>
                                            <small className='text-muted d-block'>Category: {product.status}</small>
                                            <small className='text-muted d-block'>Category: {product.averageRating}</small>
                                        </Card.Text>
                                    </Card.Body>
                                </Link>

                                <Card.Footer>
                                    <Button onClick={() => handleAddProduct(product)} className=' px-5 d-block mx-auto' variant="primary">Add</Button>
                                </Card.Footer>
                            </Card>
                        ))}
                    </div>
                </CardGroup>
            </div >
        </section >
    )
}



export async function getServerSideProps(context) {
    const { params } = context;
    const res = await fetch(`http://localhost:4000/api/products/category/${params.categoryName}`);
    const data = await res.json();

    return {
        props: {
            data: data,
        },
    };
}

export default CategoryDetails