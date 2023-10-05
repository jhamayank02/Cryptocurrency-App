import '../css/Row.css';

const Row = (props)=>{

    const {id, image, symbol, market_cap, current_price, price_change_percentage_24h
    } = props.data;

    return (
        <>
            <div className='row' onClick={() => props.showModal(props.data)}>
                <div className='image'>
                    <img src={image} />
                </div>
                <div className='symbol'>{symbol}</div>
                <div className='id'>{id}</div>
                <div className='current-price'>₹{current_price}</div>
                <div className={'price-change ' + (price_change_percentage_24h.toFixed(2) < 0 ? 'loss' : 'profit')}>{price_change_percentage_24h.toFixed(2)}%</div>
                <div className='market-cap'>₹{market_cap.toLocaleString()}</div>
            </div>
        </>
    )
}

export default Row;