/* eslint-disable @next/next/no-img-element */
import { removeFromCart, resetCart } from '@/redux/features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


const PCBuilderPage = () => {
    const { products, total } = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch();

    const useCartProductsByCategory = (category) => {
        const categoryProduct = products?.filter(product => product.category === category);
        return categoryProduct;
    };


    const cpu = useCartProductsByCategory('CPU');
    const Motherboard = useCartProductsByCategory('Motherboard');
    const Storage = useCartProductsByCategory('Storage');
    const RAM = useCartProductsByCategory('RAM');
    const Monitor = useCartProductsByCategory('Monitor');
    const PowerSupply = useCartProductsByCategory('Power Supply');

    const handleOrder = () => {
        dispatch(resetCart()); // Dispatch the resetCart action
        alert('Order Place Successfully')
    };


    return (
        <div className='bg-secondary bg-gradient bg-opacity-25 px-md-5 px-2  py-md-3 py-1 '>
            <div className='container-fluid px-md-5 px-4 my-5 bg-white py-5'>
                <h5 className='mb-4'>Total: <span className='fw-bold fs-3'>&#2547; </span>{total}</h5>


                {cpu?.length > 0 ? (
                    cpu.map(product => (
                        <Card className='shadow-sm mb-4 rounded-0  p-0' key={product._id}>
                            <Card.Header className=' rounded-0'>CPU</Card.Header>
                            <Card.Body className='d-flex justify-content-between align-items-center'>
                                <div className=''>
                                    {/* <img style={{ width: '15%' }} src={product?.image} alt={product?.name} /> */}
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        width={80}
                                        height={80}
                                    />
                                </div>
                                <footer className="">
                                    <small className='d-block text-muted'>{product.name}</small>
                                    <small>&#2547; {product.price}</small>
                                </footer>

                                <Button onClick={() => dispatch(removeFromCart(product))} variant="outline-danger">Remove</Button>

                            </Card.Body>
                        </Card>
                    ))
                ) : (
                    <Card className='shadow-sm mb-4 rounded-0'>
                        <Card.Header className=' rounded-0'>CPU</Card.Header>
                        <Card.Body className='d-flex justify-content-between align-items-center'>
                            <div className=''>
                                <Image
                                    src=''
                                    alt=""
                                    width={80}
                                    height={80}
                                />
                            </div>
                            <blockquote className="blockquote mb-0">
                                <footer className="blockquote-footer">
                                    {/* Someone famous in <cite title="Source Title">Source Title</cite> */}
                                </footer>
                            </blockquote>
                            <Link href={`/pcbuilder/CPU`}>
                                <Button variant="outline-secondary">Choose</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                )}


                {Motherboard?.length > 0 ? (
                    Motherboard.map(product => (
                        <Card className='shadow-sm mb-4 rounded-0  p-0' key={product._id}>
                            <Card.Header className=' rounded-0'>Motherboard</Card.Header>
                            <Card.Body className='d-flex justify-content-between align-items-center'>
                                <div className=''>
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        width={80}
                                        height={80}
                                    />
                                </div>
                                <footer className="">
                                    <small className='d-block text-muted'>{product.name}</small>
                                    <small>&#2547; {product.price}</small>
                                </footer>

                                <Button onClick={() => dispatch(removeFromCart(product))} variant="outline-danger">Remove</Button>
                            </Card.Body>
                        </Card>
                    ))
                ) : (
                    <Card className='shadow-sm mb-4 rounded-0'>
                        <Card.Header className=' rounded-0'>Motherboard</Card.Header>
                        <Card.Body className='d-flex justify-content-between align-items-center'>
                            <div className=''>
                                <Image
                                    src=''
                                    alt=""
                                    width={80}
                                    height={80}
                                />
                            </div>
                            <blockquote className="blockquote mb-0">
                                <footer className="blockquote-footer">
                                    {/* Someone famous in <cite title="Source Title">Source Title</cite> */}
                                </footer>
                            </blockquote>
                            <Link href={`/pcbuilder/Motherboard`}>
                                <Button variant="outline-secondary">Choose</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                )}


                {Storage?.length > 0 ? (
                    Storage.map(product => (
                        <Card className='shadow-sm mb-4 rounded-0  p-0' key={product._id}>
                            <Card.Header className=' rounded-0'>Storage</Card.Header>
                            <Card.Body className='d-flex justify-content-between align-items-center'>
                                <div className=''>
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        width={80}
                                        height={80}
                                    />
                                </div>
                                <footer className="">
                                    <small className='d-block text-muted'>{product.name}</small>
                                    <small>&#2547; {product.price}</small>
                                </footer>
                                <Button onClick={() => dispatch(removeFromCart(product))} variant="outline-danger">Remove</Button>
                            </Card.Body>
                        </Card>
                    ))
                ) : (
                    <Card className='shadow-sm mb-4 rounded-0'>
                        <Card.Header className=' rounded-0'>Storage</Card.Header>
                        <Card.Body className='d-flex justify-content-between align-items-center'>
                            <div className=''>
                                <Image
                                    src=''
                                    alt=""
                                    width={80}
                                    height={80}
                                />
                            </div>
                            <blockquote className="blockquote mb-0">
                                <footer className="blockquote-footer">
                                    {/* Someone famous in <cite title="Source Title">Source Title</cite> */}
                                </footer>
                            </blockquote>
                            <Link href={`/pcbuilder/Storage`}>
                                <Button variant="outline-secondary">Choose</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                )}



                {PowerSupply?.length > 0 ? (
                    PowerSupply.map(product => (
                        <Card className='shadow-sm mb-4 rounded-0  p-0' key={product._id}>
                            <Card.Header className=' rounded-0'>Power Supply</Card.Header>
                            <Card.Body className='d-flex justify-content-between align-items-center'>
                                <div className=''>
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        width={80}
                                        height={80}
                                    />
                                </div>
                                <footer className="">
                                    <small className='d-block text-muted'>{product.name}</small>
                                    <small>&#2547; {product.price}</small>
                                </footer>
                                <Button onClick={() => dispatch(removeFromCart(product))} variant="outline-danger">Remove</Button>
                            </Card.Body>
                        </Card>
                    ))
                ) : (
                    <Card className='shadow-sm mb-4 rounded-0'>
                        <Card.Header className=' rounded-0'>PowerSupply</Card.Header>
                        <Card.Body className='d-flex justify-content-between align-items-center'>
                            <div className=''>
                                <Image
                                    src=''
                                    alt=""
                                    width={80}
                                    height={80}
                                />
                            </div>
                            <blockquote className="blockquote mb-0">
                                <footer className="blockquote-footer">
                                    {/* Someone famous in <cite title="Source Title">Source Title</cite> */}
                                </footer>
                            </blockquote>
                            <Link href={`/pcbuilder/Power Supply`}>
                                <Button variant="outline-secondary">Choose</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                )}

                {RAM?.length > 0 ? (
                    RAM.map(product => (
                        <Card className='shadow-sm mb-4 rounded-0  p-0' key={product._id}>
                            <Card.Header className=' rounded-0'>RAM</Card.Header>
                            <Card.Body className='d-flex justify-content-between align-items-center'>
                                <div className=''>
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        width={80}
                                        height={80}
                                    />
                                </div>
                                <footer className="">
                                    <small className='d-block text-muted'>{product.name}</small>
                                    <small>&#2547; {product.price}</small>
                                </footer>
                                <Button onClick={() => dispatch(removeFromCart(product))} variant="outline-danger">Remove</Button>
                            </Card.Body>
                        </Card>
                    ))
                ) : (
                    <Card className='shadow-sm mb-4 rounded-0'>
                        <Card.Header className=' rounded-0'>RAM</Card.Header>
                        <Card.Body className='d-flex justify-content-between align-items-center'>
                            <div className=''>
                                <Image
                                    src=''
                                    alt=""
                                    width={80}
                                    height={80}
                                />
                            </div>
                            <blockquote className="blockquote mb-0">
                                <footer className="blockquote-footer">
                                    {/* Someone famous in <cite title="Source Title">Source Title</cite> */}
                                </footer>
                            </blockquote>
                            <Link href={`/pcbuilder/RAM`}>
                                <Button variant="outline-secondary">Choose</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                )}


                {Monitor?.length > 0 ? (
                    Monitor.map(product => (
                        <Card className='shadow-sm mb-4 rounded-0  p-0' key={product._id}>
                            <Card.Header className=' rounded-0'>Monitor</Card.Header>
                            <Card.Body className='d-flex justify-content-between align-items-center'>
                                <div className=''>
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        width={80}
                                        height={80}
                                    />
                                </div>
                                <footer className="">
                                    <small className='d-block text-muted'>{product.name}</small>
                                    <small>&#2547; {product.price}</small>
                                </footer>
                                <Button onClick={() => dispatch(removeFromCart(product))} variant="outline-danger">Remove</Button>
                            </Card.Body>
                        </Card>
                    ))
                ) : (
                    <Card className='shadow-sm mb-4 rounded-0'>
                        <Card.Header className=' rounded-0'>Monitor</Card.Header>
                        <Card.Body className='d-flex justify-content-between align-items-center'>
                            <div className=''>
                                <Image
                                    src=''
                                    alt=""
                                    width={80}
                                    height={80}
                                />
                            </div>
                            <blockquote className="blockquote mb-0">
                                <footer className="blockquote-footer">
                                    {/* Someone famous in <cite title="Source Title">Source Title</cite> */}
                                </footer>
                            </blockquote>
                            <Link href={`/pcbuilder/Monitor`}>
                                <Button variant="outline-secondary">Choose</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                )}


                <Button onClick={()=>(handleOrder())} className='d-block float-end px-4' disabled={products?.length < 6 ? 'true' : ''} variant="success">Order</Button>

            </div>
        </div>
    )
}

export default PCBuilderPage