import React, { useEffect, useState } from 'react';

//styles
import styles from "@/styles/filterPage.module.scss";

//dependencys
import { useRouter } from 'next/router';
import BackBtnDiv from '@/shared/BackBtnDiv';
import ShowCars from '@/components/templates/ShowCars';

const filterKey = ({ carsData }) => {

    const router = useRouter();
    const { query } = router;

    if (query.filterKey) {

        var minPrice = query.filterKey[0];
        var maxPrice = query.filterKey[1];
    }

    const [showFilter, setShowFilter] = useState([]);

    useEffect(() => {

        const temp = carsData.filter(item => {

            if (query?.filterKey?.length === 1) return item.price >= minPrice;
            else return item.price >= minPrice && item.price <= maxPrice;

        })

        setShowFilter(temp);


    }, [query]);




    return (

        <>
            <BackBtnDiv />

            {showFilter.length ?


                <ShowCars array={showFilter} />

                :

                <div className={styles.NorCarDiv}>

                    <span>Sorry, there is no car</span>

                </div>}

        </>
    );
};

export default filterKey;