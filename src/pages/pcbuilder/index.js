/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


const PCBuilderPage = () => {
    return (
        <div className='bg-secondary bg-gradient bg-opacity-25 px-md-5 px-2  py-md-3 py-1'>
            <div className='container-fluid px-md-5 px-4 my-5 bg-white py-5'>
                <Card className='shadow mb-3 rounded-0 border-0'>
                    <Card.Header className='bg-warning  rounded-0'>CPU</Card.Header>
                    <Card.Body className='d-flex justify-content-between align-items-center'>

                        <img style={{width:'10%'}} src="https://www.startech.com.bd/image/cache/catalog/processor/amd/amd-ryzen-5-5500/amd-ryzen-5-5500-01-228x228.jpg" alt="" srcset="" />
                        <blockquote className="blockquote mb-0">
                            <footer className="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </footer>
                        </blockquote>
                        <Link href={`/category/CPU`}>
                        <Button variant="outline-secondary">Choose</Button>
                        </Link>
                    </Card.Body>
                </Card>
                <Card className='shadow mb-3 rounded-0 border-0'>
                    <Card.Header className='bg-warning  rounded-0'>Motherboard</Card.Header>
                    <Card.Body className='d-flex justify-content-between align-items-center'>

                        <img style={{width:'10%'}} src="https://www.startech.com.bd/image/cache/catalog/processor/amd/amd-ryzen-5-5500/amd-ryzen-5-5500-01-228x228.jpg" alt="" srcset="" />
                        <blockquote className="blockquote mb-0">
                            <footer className="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </footer>
                        </blockquote>
                        <Link href={`/category/Motherboard`}>
                        <Button variant="outline-secondary">Choose</Button>
                        </Link>
                    </Card.Body>
                </Card>
                <Card className='shadow mb-3 rounded-0 border-0'>
                    <Card.Header className='bg-warning  rounded-0'>Power Supply</Card.Header>
                    <Card.Body className='d-flex justify-content-between align-items-center'>

                        <img style={{width:'10%'}} src="https://www.startech.com.bd/image/cache/catalog/processor/amd/amd-ryzen-5-5500/amd-ryzen-5-5500-01-228x228.jpg" alt="" srcset="" />
                        <blockquote className="blockquote mb-0">
                            <footer className="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </footer>
                        </blockquote>
                        <Link href={`/category/Power Supply`}>
                        <Button variant="outline-secondary">Choose</Button>
                        </Link>
                    </Card.Body>
                </Card>
                <Card className='shadow mb-3 rounded-0 border-0'>
                    <Card.Header className='bg-warning  rounded-0'>Storeage</Card.Header>
                    <Card.Body className='d-flex justify-content-between align-items-center'>

                        <img style={{width:'10%'}} src="https://www.startech.com.bd/image/cache/catalog/processor/amd/amd-ryzen-5-5500/amd-ryzen-5-5500-01-228x228.jpg" alt="" srcset="" />
                        <blockquote className="blockquote mb-0">
                            <footer className="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </footer>
                        </blockquote>
                        <Link href={`/category/Storage`}>
                        <Button variant="outline-secondary">Choose</Button>
                        </Link>
                    </Card.Body>
                </Card>
                <Card className='shadow mb-3 rounded-0 border-0'>
                    <Card.Header className='bg-warning  rounded-0'>RAM</Card.Header>
                    <Card.Body className='d-flex justify-content-between align-items-center'>

                        <img style={{width:'10%'}} src="https://www.startech.com.bd/image/cache/catalog/processor/amd/amd-ryzen-5-5500/amd-ryzen-5-5500-01-228x228.jpg" alt="" srcset="" />
                        <blockquote className="blockquote mb-0">
                            <footer className="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </footer>
                        </blockquote>
                        <Link href={`/category/RAM`}>
                        <Button variant="outline-secondary">Choose</Button>
                        </Link>
                    </Card.Body>
                </Card>
                <Card className='shadow mb-3 rounded-0 border-0'>
                    <Card.Header className='bg-warning  rounded-0'>Monitor</Card.Header>
                    <Card.Body className='d-flex justify-content-between align-items-center'>

                        <img style={{width:'10%'}} src="https://www.startech.com.bd/image/cache/catalog/processor/amd/amd-ryzen-5-5500/amd-ryzen-5-5500-01-228x228.jpg" alt="" srcset="" />
                        <blockquote className="blockquote mb-0">
                            <footer className="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </footer>
                        </blockquote>
                        <Link href={`/category/Monitor`}>
                        <Button variant="outline-secondary">Choose</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default PCBuilderPage