import React, { useEffect, useState } from 'react';


//styles
import styles from "@/styles/categorysPage.module.scss";


//dependencys
import { useRouter } from 'next/router';


//shared
import ShowCars from '@/shared/ShowCars';
import BackBtnDiv from '@/shared/BackBtnDiv';

const categoryName = ({carsData}) => {


    const router = useRouter();
    const {query} = router;

    const [categoryItem , setCategoryItem] = useState([])

    useEffect(() => {

       const temp = carsData.filter(item => item.category === query.categoryName)
        setCategoryItem(temp);


    } , [query])

    


    return (

        categoryItem.length &&
        <>

            <BackBtnDiv />

            
            <div className={styles.nameCat}>

                <h2>{query.categoryName}</h2>

            </div>


            <ShowCars array={categoryItem} />


        </>
    );
};

export default categoryName;