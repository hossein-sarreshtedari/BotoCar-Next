import React from 'react';

import { useRouter } from 'next/router';
import styles from "./layout.module.scss";


const Layout = ({children}) => {

    const router = useRouter();

    return (

        <div className={styles.container}>

            <div className={styles.mainContainer}>

                <div className={styles.headerDiv}>
                    <div className={styles.header}>

                        <h1 onClick={() => router.push("/")}>BOTOCAR</h1>
                        <span>choose and buy car</span>

                    </div>
                </div>


                {children}


            </div>

            <div className={styles.footerDiv}>

                <span>This project made by @Hossein</span>

            </div>

        </div>
    );
};

export default Layout;