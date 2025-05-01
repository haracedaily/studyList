import React, {useState} from 'react';
import Header from "../layout/Header.jsx";

function Home(props) {
    const [count, setCount] = useState(0)
    return (
        <>
            <Header/>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>

            </div>

        </>
    );
}

export default Home;