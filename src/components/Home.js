import { useState, useEffect } from 'react';
import '../css/Home.css';
import SearchBox from './SearchBox';
import Row from './Row';
import loading_gif from '../assets/loading.gif'
import ShowData from './ShowData';

const Home = ()=>{
    
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({});

    const showDataModalHandler = (data)=>{
        setModalData({...data});
        setShowModal(true);
    }
    
    const hideDataModalHandler = ()=>{
        setModalData({});
        setShowModal(false);
    }
    
    const fetchData = async ()=>{
        const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false';
        try{
            setIsLoading(true);
            const response =  await fetch(url, {mode: 'cors'});
            const data = await response.json();
            setData(data);
            setIsLoading(false);
        }
        catch(e){
            setIsLoading(false);
            setError(true);
            setErrorMsg("Something went wrong!!!");
        }
    }

    const filteredCoins = data.filter(item => item.symbol.includes(searchText) || item.id.includes(searchText));

    useEffect(() => {
      fetchData();
    }, []);   
    

    return (
        <div className='home-page'>
            <SearchBox searchText={searchText} setSearchText={setSearchText} />
            {showModal && <ShowData hideModal={hideDataModalHandler} data={modalData} />}

            {error && <div className='error'>{errorMsg}</div>}

            {isLoading && <div className='loading'><img src={loading_gif} /></div>}

            {!isLoading && (!error === true) && filteredCoins.length === 0 && <div className='not-found'>No coin found.</div>}

            {!isLoading && (!error === true) && filteredCoins.length>0 && <div className='attribution'>Data provided by CoinGecko</div>}

            {!isLoading && (!error === true) && filteredCoins.length>0 && <div className='heading-row'>
                <div className='image'>Image</div>
                <div className='symbol'>Id</div>
                <div className='id'>Name</div>
                <div className='current-price'>Current Price</div>
                <div className='price-change'>Price Change (24h)</div>
                <div className='market-cap'>Market Cap</div>
            </div>}
            {!isLoading && (!error === true) && filteredCoins.map((item)=> {return <Row key={item.id} data={item}  showModal={showDataModalHandler} />})}
        </div>
    )
}

export default Home;