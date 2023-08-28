import { useSingleProductQuery } from '@/redux/features/product/productApi';
import { useRouter } from 'next/router'
import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';

const ProductDetailsPage = ({ product }) => {
    // const router = useRouter()
    // const id = router.query.productId;
    return (
        <Container className='py-md-5'>
            <Row className='justify-content-center align-items-center'>
                <Col md={6}>
                    {/* <Image src={product.image} alt="Product Image" fluid /> */}
                    <Image
                        src={product.image}
                        alt="Description of the image"
                        width={500}
                        height={500}
                        layout="responsive"
                    />
                </Col>
                <Col md={6}>
                    <h2>{product.name}</h2>
                    <p className='my-4'>
                        {product.description}
                    </p>
                    <h4 className='mb-3'><span className='fs-2 me-1'>&#2547;</span>{product.price}</h4>
                    <button className="btn btn-primary">Buy Now</button>
                </Col>
            </Row>
        </Container>
    )
}



export async function getServerSideProps(context) {
    const { params } = context;
    const res = await fetch(`https://pc-builder-5vdz.onrender.com/api/products/${params.productId}`);
    const data = await res.json();

    return {
        props: {
            product: data,
        },
    };
}

export default ProductDetailsPage


