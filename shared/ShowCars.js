import React from 'react';

//styles
import styles from "./ShowCars.module.scss";

//dependencys
import Link from 'next/link';



const ShowCars = ({array}) => {

    return (

        <div className={styles.cars}>

            {array.map((item, index) => {

                return <Link key={item.id} href={`/cars/${item.id}`}> <div className={styles.cartCars}>

                    <img src={item.image} alt="carPics" className={styles.picCart} />

                    <div className={styles.bottomCart}>

                        <div className={styles.info}>

                            <span className={styles.nameCar}>{`${item.name} ${item.model}`}</span>
                            <span className={styles.speedCar}>{`${item.year} . ${item.distance}km`}</span>

                        </div>
                        <div className={styles.price}>

                            <span className={styles.PriceCount}>{`$ ${item.price}`}</span>

                            <div className={styles.countryandLoc}>

                                <span className={styles.countryName}>{item.location}</span>
                                <svg id={styles.locSvg} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <g
                                        stroke="#000"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    >
                                        <path d="M12 21c3.5-3.6 7-6.824 7-10.8C19 6.224 15.866 3 12 3s-7 3.224-7 7.2 3.5 7.2 7 10.8z"></path>
                                        <path d="M12 13a3 3 0 100-6 3 3 0 000 6z"></path>
                                    </g>
                                </svg>

                            </div>


                        </div>

                    </div>


                </div>

                </Link>

            })}



        </div>
    );
};

export default ShowCars;