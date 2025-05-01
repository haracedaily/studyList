import React, {useEffect, useRef, useState} from 'react';

function Lotto(props) {
    const [drwNo, setDrwNo] = useState(0);
    const [numbers, setNumbers] = React.useState([]);
    const [myNumbers, setMyNumbers] = React.useState([]);
    const inputRef = useRef(null);

    async function getMyNumbers() {
        // const arr = [...(new Array(6))].map(
        //     (_, i) => Math.trunc(Math.random() * 46) + 1
        // );
        // 중복을 허용하지 않는 set 배열 선언
        const arr = new Set();
        do {
            arr.add(Math.trunc(Math.random() * 46) + 1);
        } while (arr.size !== 6)

        console.log(arr)
        setMyNumbers([...arr]);
    }

    async function getNumbers() {
        // fetch(`/api/common.do?method=getLottoNumber&drwNo=${1163}`)
        //     .then(text => text.json())
        //     .then(json => setNumbers([res.drwtNo1, res.drwtNo2, res.drwtNo3, res.drwtNo4, res.drwtNo5, res.drwtNo6])));
        const inputValue = inputRef.current.value || 1166;
        console.log(inputValue);
        // 로또 서버에 가서 1166회차 가져와
        const text = await fetch(`/api/common.do?method=getLottoNumber&drwNo=${inputValue}`);
        // 가져왔는데이터 text -> json 바꿔줘
        const res = await text.json();
        // 바꿔준걸 출력해줘
        console.log(res);
        setNumbers([res.drwtNo1, res.drwtNo2, res.drwtNo3, res.drwtNo4, res.drwtNo5, res.drwtNo6]);
        setDrwNo(res.drwNo);
    }

    useEffect(() => {
        getNumbers();
    }, []);
    return (
        <div>
            <h1>LOTTO</h1>
            <h1>{drwNo}회</h1>
            <input type="text" ref={inputRef}/>
            <button onClick={getNumbers}>조회</button>
            <div style={{display: "flex", gap: "1rem"}}>
                {numbers.map(number => (
                    <div
                        style={{
                            lineHeight: '3.8rem',
                            textAlign: "center",
                            borderRadius: '50%',
                            backgroundColor: `rgb(100, 200, 255)`,
                            width: '4rem',
                            height: '4rem'
                        }}
                        key={number}>{number}</div>
                ))}
            </div>
            <button onClick={getMyNumbers}>추첨</button>
            <div style={{display: "flex", gap: "1rem"}}>
                {myNumbers.map(number => (
                    <div
                        style={{
                            lineHeight: '3.8rem',
                            textAlign: "center",
                            borderRadius: '50%',
                            backgroundColor: `rgb(100, 200, 255)`,
                            width: '4rem',
                            height: '4rem'
                        }}
                        key={number}>{number}</div>
                ))}
            </div>
        </div>
    );
}

export default Lotto;

/*
import React, { useEffect, useState } from 'react';

const getColorClass = (number) => {
    if (number <= 10) return 'yellow';
    if (number <= 20) return 'blue';
    if (number <= 30) return 'red';
    if (number <= 40) return 'gray';
    return 'green';
};

const Ball = ({ number }) => {
    return <div className={`ball modern ${getColorClass(number)}`}>{number}</div>;
};

const Lotto = () => {
    const [draw, setDraw] = useState(1165);
    const [numbers, setNumbers] = useState([]);
    const [bonus, setBonus] = useState(null);
    const [date, setDate] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchLotto = async (drawNumber) => {
        setLoading(true);
        try {
            const response = await fetch(
                `api/common.do?method=getLottoNumber&drwNo=${drawNumber}`
            );
            const data = await response.json();
            console.log(data);
            if (data.returnValue === 'success') {
                const nums = [
                    data.drwtNo1,
                    data.drwtNo2,
                    data.drwtNo3,
                    data.drwtNo4,
                    data.drwtNo5,
                    data.drwtNo6,
                ];
                setNumbers(nums);
                setBonus(data.bnusNo);
                setDate(data.drwNoDate);
            }
        } catch (error) {
            console.error('로또 데이터를 불러오는 데 실패했습니다:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLotto(draw);
    }, [draw]);

    const handlePrev = () => setDraw((prev) => prev - 1);
    const handleNext = () => setDraw((prev) => prev + 1);

    return (
        <div className="lotto-container modern-container">
            <h1 className="title modern-title">Lotto 6/45</h1>
            <h2 className="round modern-round">{draw}회 당첨결과</h2>
            <p className="date modern-date">({date} 추첨)</p>

            {loading ? (
                <p className="loading">로딩 중...</p>
            ) : (
                <>
                    <div className="numbers modern-numbers">
                        {numbers.map((num, idx) => (
                            <Ball key={idx} number={num} />
                        ))}
                        <span className="plus-sign modern-plus">+</span>
                        <Ball number={bonus} />
                    </div>

                    <div className="arrows modern-arrows">
                        <button className="arrow modern-arrow" onClick={handlePrev}>&lt;</button>
                        <div className="result-box modern-result">
                            <p>1등 총 당첨금</p>
                            <p className="amount modern-amount">285억원</p>
                            <p className="sub modern-sub">(13명 / 22억)</p>
                        </div>
                        <button className="arrow modern-arrow" onClick={handleNext}>&gt;</button>
                    </div>

                    <div className="buttons modern-buttons">
                        <button className="btn modern-btn btn-gray">회차별 결과</button>
                        <button className="btn modern-btn btn-green">구매하기</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Lotto;*/
