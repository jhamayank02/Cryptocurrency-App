import '../css/SearchBox.css';

const SearchBox = (props)=>{

    const {searctText, setSearchText} = props;

    const setSearchTextHandler = (e)=>{
        setSearchText(e.target.value);
    }

    return (
        <>
            <div className='search-box'>
                <input size='30' type='text' placeholder='Search coins' value={searctText} onChange={(e) => setSearchTextHandler(e)}/>
            </div>
        </>
    )
}

export default SearchBox;