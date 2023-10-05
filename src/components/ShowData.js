import Modal from './Modal';
import '../css/ShowData.css';

const ShowData = (props)=>{

    const {image, id, symbol, current_price, price_change_percentage_24h,market_cap
,high_24h,low_24h} = props.data;

    return (
        <Modal onClick={props.hideModal}>
           <div className="show-data">
            <div className='close-btn' onClick={props.hideModal}>x</div>
                <div className='flex'>
                    <div className='image'><img src={image} /></div>
                    <div className='name'>{id}</div>
                    <div className='symbol'>({symbol})</div>
                </div>
                <div className='price'>₹{current_price}</div>
                <div className={'price-change ' + (price_change_percentage_24h.toFixed(2) < 0 ? 'loss' : 'profit')}>{price_change_percentage_24h
}(24h)</div>


            <div className='others'>
                <div>
                    <span>Market cap :</span><span className='mkt-cap'>₹{market_cap}</span>
                </div>
                <div>
                    <span>24h High:</span><span className='profit'>₹{high_24h}</span>
                </div>
                <div>
                    <span>24h Low :</span><span className='loss'>₹{low_24h}</span>
                </div>
            </div>
            </div> 
        </Modal>
    );
}

export default ShowData;