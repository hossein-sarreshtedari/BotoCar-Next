import React from 'react';

//styles
import styles from "./ShowCars.module.scss";

//dependencys
import Link from 'next/link';
import CartCar from '../modules/CartCar';



const ShowCars = ({array}) => {

    return (

        <div className={styles.cars}>

            {array.map((item, index) => {

                return <Link key={item.id} href={`/cars/${item.id}`}> 

                 <CartCar item={item} />

                </Link>

            })}



        </div>
    );
};

export default ShowCars;