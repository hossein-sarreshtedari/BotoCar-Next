import React, { useEffect, useState } from 'react';

//templates
import SingleCarShow from "@/components/templates/SingleCarShow";

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
            <SingleCarShow singleCar={singleCar} />

        </>
    );
};

export default singleCar;