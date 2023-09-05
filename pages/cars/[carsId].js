import React, { useEffect, useState } from 'react';

//styles
import styles from "../../styles/singleCar.module.scss";

//dependencys
import { useRouter } from 'next/router';

//shared
import BackBtnDiv from '@/shared/BackBtnDiv';

const singleCar = ({ carsData }) => {

    const router = useRouter();
    const { query } = router;



    const [singleCar, setSingleCar] = useState({});

    useEffect(() => {

        const single = carsData.filter(item => item.id === +query.carsId);
        setSingleCar(single[0]);

    }, [query]);



    return (

        singleCar &&
        <>
            <BackBtnDiv />
            <div className={styles.singleCarDiv}>


                <img src={singleCar.image} alt="singlePic" className={styles.picSingleCart} />
                <h2 className={styles.NameCar}>{singleCar.name} {singleCar.model}</h2>

                <div className={styles.carData}>

                    <div className={styles.itemData}>

                        <div className={styles.iconText}>

                            <svg
                                className={styles.svgIcons}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#000"
                                version="1.1"
                                viewBox="0 0 512 512"
                                xmlSpace="preserve"
                            >
                                <g>
                                    <path
                                        d="M502.467 493.933H459.8V50.2h17.067c5.12 0 8.533-3.413 8.533-8.533V7.533c0-5.12-3.413-8.533-8.533-8.533H33.133C28.013-1 24.6 2.413 24.6 7.533v34.133c0 5.12 3.413 8.533 8.533 8.533H50.2v443.733H7.533c-5.12 0-8.533 3.413-8.533 8.533S2.413 511 7.533 511h494.934c5.12 0 8.533-3.413 8.533-8.533s-3.413-8.534-8.533-8.534zM41.667 16.067h426.667v17.067H41.667V16.067zm170.666 477.866V357.4h34.133v136.533h-34.133zm51.2 0V357.4h34.133v136.533h-34.133zm51.2 0V348.867c0-5.12-3.413-8.533-8.533-8.533H203.8c-5.12 0-8.533 3.413-8.533 8.533v145.067h-128V50.2h375.467v443.733H314.733z"
                                        transform="translate(1 1)"
                                    ></path>
                                    <path
                                        d="M229.4 84.333H92.867c-5.12 0-8.533 3.413-8.533 8.533v68.267c0 5.12 3.413 8.533 8.533 8.533H229.4c5.12 0 8.533-3.413 8.533-8.533V92.867c0-5.12-3.413-8.534-8.533-8.534zm-128 17.067h51.2v51.2h-51.2v-51.2zm119.467 51.2h-51.2v-51.2h51.2v51.2zM169.667 340.333h-76.8c-5.12 0-8.533 3.413-8.533 8.533v68.267c0 5.12 3.413 8.533 8.533 8.533h76.8c5.12 0 8.533-3.413 8.533-8.533v-68.267c0-5.119-3.413-8.533-8.533-8.533zm-8.534 68.267H101.4v-51.2h59.733v51.2zM417.133 340.333h-76.8c-5.12 0-8.533 3.413-8.533 8.533v68.267c0 5.12 3.413 8.533 8.533 8.533h76.8c5.12 0 8.533-3.413 8.533-8.533v-68.267c.001-5.119-3.413-8.533-8.533-8.533zM408.6 408.6h-59.733v-51.2H408.6v51.2zM417.133 84.333H280.6c-5.12 0-8.533 3.413-8.533 8.533v68.267c0 5.12 3.413 8.533 8.533 8.533h136.534c5.12 0 8.533-3.413 8.533-8.533V92.867c0-5.12-3.414-8.534-8.534-8.534zm-128 17.067h51.2v51.2h-51.2v-51.2zM408.6 152.6h-51.2v-51.2h51.2v51.2zM229.4 203.8H92.867c-5.12 0-8.533 3.413-8.533 8.533V280.6c0 5.12 3.413 8.533 8.533 8.533H229.4c5.12 0 8.533-3.413 8.533-8.533v-68.267c0-5.12-3.413-8.533-8.533-8.533zm-128 17.067h51.2v51.2h-51.2v-51.2zm119.467 51.2h-51.2v-51.2h51.2v51.2zM417.133 203.8H280.6c-5.12 0-8.533 3.413-8.533 8.533V280.6c0 5.12 3.413 8.533 8.533 8.533h136.534c5.12 0 8.533-3.413 8.533-8.533v-68.267c0-5.12-3.414-8.533-8.534-8.533zm-128 17.067h51.2v51.2h-51.2v-51.2zm119.467 51.2h-51.2v-51.2h51.2v51.2z"
                                        transform="translate(1 1)"
                                    ></path>
                                </g>
                            </svg>

                            <span className={styles.text}>Company</span>

                        </div>

                        <span className={styles.valueText}>{singleCar.name}</span>

                    </div>


                    <div className={styles.itemData}>

                        <div className={styles.iconText}>

                            <svg className={styles.svgIcons} xmlns="http://www.w3.org/2000/svg" viewBox="0 -7 48 48">
                                <g>
                                    <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                                        <g fill="#0B0B0A" transform="translate(-500 -567)">
                                            <path d="M515.467 570.63c0-1.602-.976-3.63-5.078-3.63h-6.315l-1.796 8.351h6.584c5.14 0 6.605-2.446 6.605-4.72zm17.012 0c0-1.602-.973-3.63-5.073-3.63h-6.317l-1.794 8.35h6.58c5.143.001 6.604-2.445 6.604-4.72zm-19.29 12.57c0-1.603-.977-3.636-5.078-3.636h-6.316L500 587.92h6.582c5.141 0 6.606-2.453 6.606-4.72zm17.012 0c0-1.603-.977-3.636-5.075-3.636h-6.316l-1.798 8.356h6.585c5.142 0 6.604-2.453 6.604-4.72zM548 578.101c0-1.603-.977-3.635-5.075-3.635h-6.315l-1.798 8.355h6.581c5.143 0 6.607-2.447 6.607-4.72zm-2.454 13.086c0-1.603-.974-3.63-5.074-3.63h-6.316l-1.795 8.351h6.581c5.142 0 6.604-2.453 6.604-4.72zm-17.79 5.099c0-1.61-.973-3.642-5.071-3.642h-6.32L514.57 601h6.582c5.143.001 6.604-2.445 6.604-4.713z"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>

                            <span className={styles.text}>Model</span>

                        </div>

                        <span className={styles.valueText}>{singleCar.model}</span>

                    </div>

                    <div className={styles.itemData}>

                        <div className={styles.iconText}>

                            <svg className={styles.svgIcons} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <g>
                                    <path
                                        stroke="#000"
                                        strokeLinecap="round"
                                        strokeWidth="2"
                                        d="M20 10V7a2 2 0 00-2-2H6a2 2 0 00-2 2v3m16 0v9a2 2 0 01-2 2H6a2 2 0 01-2-2v-9m16 0H4m4-7v4m8-4v4"
                                    ></path>
                                    <rect width="3" height="3" x="6" y="12" fill="#000" rx="0.5"></rect>
                                    <rect width="3" height="3" x="10.5" y="12" fill="#000" rx="0.5"></rect>
                                    <rect width="3" height="3" x="15" y="12" fill="#000" rx="0.5"></rect>
                                </g>
                            </svg>

                            <span className={styles.text}>First Registration</span>

                        </div>

                        <span className={styles.valueText}>{singleCar.year}</span>

                    </div>


                    <div className={styles.itemData}>

                        <div className={styles.iconText}>

                            <svg
                                className={styles.svgIcons}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#000"
                                version="1.1"
                                viewBox="0 0 480.369 480.369"
                                xmlSpace="preserve"
                            >
                                <g>
                                    <path d="M240.185.016c-7.543 0-13.66 6.117-13.66 13.66v13.66c0 7.543 6.116 13.659 13.66 13.659 7.542 0 13.66-6.115 13.66-13.659v-13.66c0-7.543-6.117-13.66-13.66-13.66zM240.185 348.663c-7.543 0-13.66 6.117-13.66 13.66v27.912c0 7.543 6.116 13.66 13.66 13.66 7.542 0 13.66-6.117 13.66-13.66v-27.912c0-7.543-6.117-13.66-13.66-13.66zM240.185 257.937c-7.543 0-13.66 6.117-13.66 13.66v27.912c0 7.543 6.116 13.658 13.66 13.658 7.542 0 13.66-6.115 13.66-13.658v-27.912c0-7.543-6.117-13.66-13.66-13.66zM240.185 76.482c-7.543 0-13.66 6.116-13.66 13.66v27.919c0 7.543 6.116 13.659 13.66 13.659 7.542 0 13.66-6.116 13.66-13.659V90.143c0-7.543-6.117-13.661-13.66-13.661zM240.185 167.209c-7.543 0-13.66 6.116-13.66 13.66v27.913c0 7.543 6.116 13.659 13.66 13.659 7.542 0 13.66-6.116 13.66-13.659V180.87c0-7.544-6.117-13.661-13.66-13.661zM240.185 439.39c-7.543 0-13.66 6.117-13.66 13.66v13.66c0 7.543 6.116 13.658 13.66 13.658 7.542 0 13.66-6.115 13.66-13.658v-13.66c0-7.543-6.117-13.66-13.66-13.66zM404.563 464.976L346.491 11.941c-.96-7.484-7.75-12.806-15.287-11.812-7.481.954-12.771 7.804-11.811 15.28l58.071 453.035c.888 6.896 6.763 11.925 13.532 11.925.58 0 1.168-.033 1.755-.113 7.484-.954 12.773-7.804 11.812-15.28zM149.165.129c-7.497-1.041-14.327 4.321-15.287 11.812L75.806 464.976c-.961 7.477 4.328 14.326 11.812 15.279.587.08 1.174.113 1.754.113 6.77 0 12.646-5.027 13.533-11.925l58.072-453.035c.96-7.474-4.329-14.325-11.812-15.279z"></path>
                                </g>
                            </svg>

                            <span className={styles.text}>Kms driven</span>

                        </div>

                        <span className={styles.valueText}>{singleCar.distance}</span>

                    </div>


                </div>

                <div className={styles.carData}>

                    <div className={styles.itemData}>

                        <div className={styles.iconText}>

                            <svg className={styles.svgIcons} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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

                            <span className={styles.text}>Location</span>

                        </div>

                        <span className={styles.valueText}>{singleCar.location}</span>

                    </div>

                </div>

                <div className={styles.carData}>

                    <p className={styles.descrip}>{singleCar.description}</p>

                </div>

                <div className={styles.carData}>

                    <div className={styles.itemData}>

                        <div className={styles.iconText}>

                            <svg
                                id={styles.MonySvg}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#000"
                                data-name="Layer 1"
                                viewBox="0 -8 72 72"
                            >
                                <g>
                                    <path d="M59.16 11.18H12.83a5.39 5.39 0 00-5.22 5.56v22.44a6.77 6.77 0 001.88 4.38 5.54 5.54 0 003.34 1.26h46.33a5.47 5.47 0 005.23-5.64V16.74a5.4 5.4 0 00-5.23-5.56zm1.34 21.7a12.27 12.27 0 00-7 7.74h-35a13 13 0 00-7-7.66V23a11.59 11.59 0 004.5-3.21 13 13 0 002.53-4.48h35a11.52 11.52 0 007 7.76v9.81z"></path>
                                    <path d="M36 18c-5.09 0-9.21 4.45-9.21 9.94s4.12 9.93 9.21 9.93 9.21-4.45 9.21-9.93S41 18 36 18zm.75 15.62v1.86h-1.66v-1.69a6.25 6.25 0 01-2.9-.79l.5-2.14a5.68 5.68 0 002.82.8c1 0 1.63-.4 1.63-1.13s-.54-1.14-1.8-1.6c-1.82-.66-3.06-1.58-3.06-3.36a3.31 3.31 0 012.88-3.27v-1.75h1.68v1.63a5.82 5.82 0 012.45.6l-.49 2.08a5.26 5.26 0 00-2.46-.63c-1.1 0-1.46.51-1.46 1s.59 1 2 1.58c2 .77 2.83 1.78 2.83 3.43a3.43 3.43 0 01-3 3.42z"></path>
                                </g>
                            </svg>

                            <span className={styles.text} style={{fontSize : "1.1rem"}}>Price</span>

                        </div>

                        <span className={styles.valueText} style={{fontSize : "1.1rem" , fontWeight : "bold"}}>{singleCar.price} $</span>

                    </div>

                </div>

                <button className={styles.butBtn}>Buy</button>

            </div>

        </>
    );
};

export default singleCar;