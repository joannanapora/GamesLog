import React, {useState} from 'react';
import '../index.css'

const SearchBar = ({handleFormSubmit}: any) => {

    const [searchValue, setSearchValue] = useState('Animal Crossing')

    const handleChange = (event:any) => {
        setSearchValue(event.target.value)
    };

    const handleSubmit = (event:any) => {
        event.preventDefault();
        handleFormSubmit(searchValue);
    }

        return (
            <div className='youtube-header' >
            <img style={{width:'200px', height:'100px',justifyContent:'center'}} src='https://www.thatitguy.net/wp-content/uploads/2018/08/1280px-Logo_of_YouTube_2015-2017.svg.png' alt="youtube logo"></img>
            
                <form onSubmit={handleSubmit} className='ui form'>
                        <input className='input' value={searchValue} onChange={handleChange} name='video-search' type="text" placeholder="Search.."/>
                </form>
          
            </div>
        )

};


export default SearchBar;