import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SingleRideToy from '../SingleToy/SingleRideToy';
import SingleWaterToy from '../SingleToy/SingleWaterToy';
import SingleFlyingToy from '../SingleToy/SingleFlyingToy';

const ShopCategory = () => {
    const [rideToys, setRideToys] = useState([]);
    const [waterToys, setWaterToys] = useState([]);
    const [flyingToys, setFlyingToys] = useState([]);
    const url1 = 'http://localhost:5500/toys?subcategory=ride-on-toys';
    const url2 = 'http://localhost:5500/toys?subcategory=water-toys';
    const url3 = 'http://localhost:5500/toys?subcategory=flying-toys';
    useEffect(() => {
        fetch(url1).then(res => res.json()).then(data => setRideToys(data))
    }, [])
    useEffect(() => {
        fetch(url2).then(res => res.json()).then(data => setWaterToys(data))
    }, [])
    useEffect(() => {
        fetch(url3).then(res => res.json()).then(data => setFlyingToys(data))
    }, [])





    return (
        <div className='mt-20'>
            <h2 className='text-5xl text-sky-900 font-semibold text-center mb-10'>Shop By Category</h2>
            <div>
                <Tabs>
                    <TabList className='text-center'>
                        <Tab><h1 className='text-xl font-semibold bg-sky-400 px-3 py-1 rounded'>Ride On Toys</h1></Tab>
                        <Tab><h1 className='text-xl font-semibold bg-sky-400 px-3 py-1 rounded'>Water Toys</h1></Tab>
                        <Tab><h1 className='text-xl font-semibold bg-sky-400 px-3 py-1 rounded'>Flying Toys</h1></Tab>
                    </TabList>

                    <TabPanel>
                        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5'>
                            {
                                rideToys.slice(0, 6).map(rideToy => <SingleRideToy key={rideToy.id} rideToy={rideToy}></SingleRideToy>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5'>
                            {
                                waterToys.slice(0, 6).map(waterToy => <SingleWaterToy key={waterToy.id} waterToy={waterToy}></SingleWaterToy>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5'>
                            {
                                flyingToys.slice(0, 6).map(flyingToy => <SingleFlyingToy key={flyingToy.id} flyingToy={flyingToy}></SingleFlyingToy>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
                <div className='text-center'>
                    <button className='text-3xl px-4 py-2 rounded-lg border mt-5 text-sky-900 hover:bg-sky-900 hover:text-white text-center mb-10'>See More</button>
                </div>
            </div>
        </div>
    );
};

export default ShopCategory;