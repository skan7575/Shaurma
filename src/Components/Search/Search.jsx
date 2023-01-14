import React, {useCallback, useContext, useRef} from 'react';
import styles from './Search.module.scss'
import clear from '../../Images/clearSearch.svg'
import SearchContext from "../../Context/SearchValue";

function Search() {

    const {searchValue, setSearchValue} = useContext(SearchContext)
    const inputRef = useRef()
    const onClickClearInput = () => {
        setSearchValue('')
        inputRef.current.focus()
    }


    const onChangeSearchValue = (e) => {
        setSearchValue(e.target.value)

    }

    return (
        <div className={styles.root}>
            {searchValue === '' ? '' :
                <img
                    className={styles.clear}
                    src={clear}
                    alt="очистить текст"
                    title='очистить текст'
                    onClick={onClickClearInput}
                />
            }
            <input
                ref={inputRef}
                value={searchValue}
                onChange={onChangeSearchValue}
                className={styles.input}
                placeholder='Что ищем? :)'>
            </input>
        </div>
    );
}

export default Search;