import React from 'react';

//shared
import BackBtnDiv from '@/shared/BackBtnDiv';
import ShowCars from '@/components/templates/ShowCars';


const cars = ({ carsData }) => {

    return (

        <>
            <BackBtnDiv />

            <ShowCars array={carsData} />

        </>
    );
};

export default cars;