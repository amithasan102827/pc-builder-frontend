import { useGetProductsQuery } from '@/redux/features/product/productApi';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const FeaturedProduct = () => {

    const { data, error, isLoading } = useGetProductsQuery([]);

    return (
        <div className='container-fluid px-md-5 px-4 my-5'>
            <CardGroup className=''>
                <div className="row bg-white p-4 shadow-sm">
                <h2 className='text-center fw-bold py-2'>Featured Products</h2>
                    {data?.slice(0, 8).map((product) => (
                        <Link className='col-md-3 p-0 text-decoration-none '  href={`/product/${product?._id}`} key={product._id}>
                        <Card className="rounded-0 h-100 p-1">
                                {/* <Card.Img variant="top" src={product.image} /> */}
                                <Image
                                        src={product.image}
                                        alt="Description of the image"
                                        width={500}
                                        height={300}
                                        layout="responsive"
                                    />
                            <Card.Body>
                                <Card.Title className='fs-6'>{product.name}</Card.Title>
                                <Card.Text>
                                    <small className='text-muted d-block'>Category: {product.category}</small>
                                    <small className='text-muted d-block'>Price: {product.price}</small>
                                    <small className='text-muted d-block'>Status: {product.status}</small>
                                    <small className='text-muted d-block'>Rating: {product.averageRating}</small>
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
export default FeaturedProduct