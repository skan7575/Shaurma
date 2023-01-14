import React, {useEffect, useState} from 'react';
import './Sort.scss'
import {useSelector, useDispatch} from "react-redux";
import {setSort, setSortByOrder, setSortSwitchProperty} from "../../Redux/slices/FilterCategorySlice";
import {useRef} from "react";
import {checkNode} from "@testing-library/jest-dom/dist/utils";
import {logDOM} from "@testing-library/react";

export const sortName = [
    {name: 'популярности', sort: 'rating'},
    {name: 'Цене', sort: 'price'},
    {name: 'названию', sort: 'title'}
]

function Sort() {
    const {sortSwitchProperty, sortByOrder, sort} = useSelector(state => state.filter)
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false)
    const sortRef = useRef()


    const onClickSortType = (i) => {
        dispatch(setSort(i))
    }


    const onChangeSortSwitchProperty = () => {
        setIsOpen(false)
        dispatch(setSortSwitchProperty(!sortSwitchProperty))
        if (sortByOrder === 'desc') {
            dispatch(setSortByOrder('asc'))

        } else {
            dispatch(setSortByOrder('desc'))

        }
    }

    useEffect(() => {
        const handleClick = (e) => {
            const path = e.path || (e.composedPath && e.composedPath())
            if (!path.includes(sortRef.current)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('click', handleClick)
        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [])


    return (
        <>
            <div ref={sortRef} className='sort'>
                <div className='sort__container'>
                    <button className={sortSwitchProperty ? 'sort__switch sort__switch_min' : 'sort__switch'}
                            onClick={onChangeSortSwitchProperty}>Сортировка по:
                    </button>
                    <span className='sort__select' onClick={() => {
                        setIsOpen(!isOpen)
                    }}>{sort.name}</span>
                </div>
                {isOpen ?
                    <ul className='sort__popup'>
                        {sortName.map((obj, index) => {
                            return <li
                                className={sort.sort === obj.sort ? `sort__popup-item sort__popup-item_active` : `sort__popup-item`}
                                key={index} onClick={() => {
                                setIsOpen(!isOpen)
                                onClickSortType(obj)
                            }
                            }>{obj.name}</li>
                        })}
                    </ul>
                    : ''
                }
            </div>

        </>


    );
}

export default Sort;