import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FaReddit} from 'react-icons/fa';
import {HiOutlineSearch} from 'react-icons/hi';
import {setSearchTerm} from '../../store/redditSlice';
import './Header.css';

const Header = () => {
    const [searchTermLocal,setSearchTermLocal] = useState('');
    const searchTerm = '';
    const dispatch = useDispatch();

    const onSearchTermChange = (e) => {
        setSearchTermLocal(e.target.value);
    };

    useEffect(() => {
        setSearchTermLocal(searchTerm);
    }, [searchTerm]);

    const onSearchTermSubmit = (e) => {
        e.preventDefault();
        dispatch(setSearchTerm(setSearchTermLocal));
    };

    return(
        <header>
            <div className ='logo'>
                <FaReddit className='logo-icon'/>
                <p>
                    Reddit<span>Mini</span>
                </p>
            </div>
            <form className='search' onSubmit={onSearchTermSubmit}>
                <input 
                    type="text"
                    placeholder='Search'   
                    value ={searchTermLocal}
                    onChange={onSearchTermChange}                 
                    aria-label="Serach posts"
                />
                <button type='submit' onClick={onSearchTermSubmit} aria-label='Search'>
                    <HiOutlineSearch />
                </button>
            </form>
        </header>
    );
};

export default Header;