import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Resturant from './Resturant';
import { listRestaurants } from '../actions/restaurantAction'
import { useDispatch, useSelector } from 'react-redux'
function Home() {
    // const [hotels, setHotels] = useState([])

    const [search, setSearch] = useState("")
    const dispatch = useDispatch();
    const restaurantData = useSelector(state => state.restaurantReducer)
    const { restaurants } = restaurantData

    useEffect(() => {

        dispatch(listRestaurants())




        // inorder use fetchdata without axios.....
        // const fetchData = async () => {
        //     await fetch('./restaurants.json')
        //         .then((res) => res.json())
        //         .then((data) => setHotels(data.restaurants))
        // }
        // fetchData();
    }, []);
    // console.log(hotels);
    console.log(restaurants);

    return <div>
        <Row>
            <input placeholder="Search Here" value={search} type="text" onChange={e => setSearch(e.target.value)} />

            {
                // hotels ? ( ----change hotels to resturants method using axios
                restaurants ? (
                    restaurants.filter(item => {
                        if (search === "") { return item }
                        else if (item.neighborhood.toLowerCase().includes(search.toLowerCase())) { return item }
                    })
                        .map(item => (
                            <Col sm={12} md={8} lg={6} xl={3} >
                                <Resturant item={item} />
                            </Col>
                        ))

                ) : ("error")
            }
        </Row>
    </div>;
}

export default Home;
