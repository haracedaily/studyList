import React, {useState} from 'react';

function Reviews({city:propsCity}) {
    if(propsCity ===null) {
            return <div>Loading...</div>;
    }
    const [city, setCity] = useState(propsCity);
    console.log(propsCity);
    console.log(city);
    return (
        <>
            <div>
                    <h2>city {propsCity?.name}</h2>
            </div>
        </>
    );
}

export default Reviews;