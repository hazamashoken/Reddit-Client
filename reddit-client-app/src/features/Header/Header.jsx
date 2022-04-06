import React from 'react';
import {FaReddit} from 'react-icons/fa';
import {HiOutlineSearch} from 'react-icons/hi';
import './Header.css';

const Header = () => {
    return(
        <header>
            <div className ='logo'>
                <FaReddit className='logo-icon'/>
                <p>
                    Reddit<span>Mini</span>
                </p>
            </div>
            <form className='search'>
                <input 
                    type="text"
                    placeholder='Search'                    
                    aria-label="Serach posts"
                />
                <button type='submit' aria-label='Search'>
                    <HiOutlineSearch />
                </button>
            </form>
        </header>
    );
};

export default Header;