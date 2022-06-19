import React, { useState, useEffect } from 'react';
import { Col, Row, Image,  ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Rating from './Rating';

function ResturantDetais() {
    const params = useParams()
    const { id } = params
    console.log(id);
    const [hotels, setHotels] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            await fetch('/restaurants.json')
                .then((res) => res.json())
                .then((hotels) => setHotels(hotels.restaurants))
        }
        fetchData();
    }, []);

    const details = hotels.find((i) => i.id == id)
    return <div>
        <Link className="btn btn-outline-dark my-2 rounded bf-sm" to='/' >Back</Link>
        {details ? (
            <Row className="my-3">
                <Col md={3}>
                    <Image className="img" src={details.photograph} alt={details.name} fluid/>
                </Col>
                <Col md={4}>
                    <ListGroup.Item>
                        <h2>{details.name}</h2>
                        <p>{details.neighborhood}</p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <p>Cuisine : {details.cuisine_type}</p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <p>Address : {details.address}</p>
                    </ListGroup.Item>
                </Col>
                <Col md={4}>
                    <ListGroup.Item>
                        <h4>Operating Hours:</h4>
                        <p>Monday : {details.operating_hours.Monday}</p>
                        <p>Tuesday : {details.operating_hours.Tuesday}</p>
                        <p>Wednesday : {details.operating_hours.Wednesday}</p>
                        <p>Thursday : {details.operating_hours.Thursday}</p>
                        <p>Friday : {details.operating_hours.Friday}</p>
                        <p>Saturday : {details.operating_hours.MoSaturdaynday}</p>
                        <p>Sunday: {details.operating_hours.Sunday}</p>
                    </ListGroup.Item>
                </Col>
                <Row>
                    <Col className="my-3 mx-3 p-3 card rounded">
                    <Rating data={details.reviews}/>
                    </Col>
                </Row>
            </Row>
        ) : null}
    </div>;
}

export default ResturantDetais;
