import { useGetProductsQuery } from '@/redux/features/product/productApi';
import Link from 'next/link';
import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export const FeaturedProduct = () => {
    const { data, error, isLoading } = useGetProductsQuery([]);
    console.log(data);
    return (
        <div className='container-fluid px-md-5 px-4 my-5'>
            <h1 className='text-center fw-bold mb-5'>Featured Products</h1>
            <CardGroup className=''>
                <div className="row">
                    {data?.slice(0, 8).map((product) => (
                        <Link className='col-md-3 p-0 text-decoration-none '  href={`/product/${product?._id}`}>
                        <Card className="rounded-0 p-1" key={product.id}>
                            <Card.Img variant="top" src={product.image} />
                            <Card.Body>
                                <Card.Title className='fs-6'>{product.name}</Card.Title>
                                <Card.Text>
                                    <small className='text-muted'>Category: {product.category}</small>
                                    <p className='m-0'>Price: {product.price}</p>
                                    <p className='m-0'>Status: {product.status}</p>
                                    <p className='m-0'>Rating: {product.averageRating}</p>
                                </Card.Text>
                            </Card.Body>
                            {/* <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                        </Card>
                    </Link>
                    ))}
                </div>
            </CardGroup>
        </div>
    )
}
