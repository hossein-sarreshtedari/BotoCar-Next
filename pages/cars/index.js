import React from 'react';

//styles
import styles from "../../styles/Home.module.scss"

//dependencys
import Link from 'next/link';

//shared
import BackBtnDiv from '@/shared/BackBtnDiv';
import ShowCars from '@/shared/ShowCars';


const cars = ({ carsData }) => {

    return (

        <>
            <BackBtnDiv />

            <ShowCars array={carsData} />

        </>
    );
};

export default cars;