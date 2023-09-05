import '@/styles/globals.css';
import styles from "../styles/app.module.scss";
import carsData from '@/data/carsData';

import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {

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


        <Component {...pageProps} carsData={carsData} />


      </div>

      <div className={styles.footerDiv}>

        <span>This project made by @Hossein</span>

      </div>




    </div>
  )
}
