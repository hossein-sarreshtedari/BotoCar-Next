import React from 'react';

import styles from "./BackBtnDiv.module.scss";
import { useRouter } from 'next/router';

const BackBtnDiv = () => {

    const router = useRouter();


    const backHandler = () =>{

        router.back();
    }

    return (

        <div className={styles.backBtnDiv}>

            <button onClick={backHandler}>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000"
                    version="1.1"
                    viewBox="0 0 45.58 45.58"
                    xmlSpace="preserve"
                >
                    <path d="M45.506 33.532c-1.741-7.42-7.161-17.758-23.554-19.942V7.047a3.372 3.372 0 00-5.762-2.376L1.305 19.63a4.48 4.48 0 00-.001 6.32L16.19 40.909a3.373 3.373 0 005.763-2.376v-6.331c5.593.007 13.656.743 19.392 4.313a2.766 2.766 0 003.08-.101 2.766 2.766 0 001.081-2.882z"></path>
                </svg>


                Back



            </button>

        </div>
    );
};

export default BackBtnDiv;