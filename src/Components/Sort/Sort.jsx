import React, {useEffect, useState} from 'react';
import './Sort.scss'
import {useSelector, useDispatch} from "react-redux";
import {setSort, setSortByOrder, setSortSwitchProperty} from "../../Redux/slices/FilterCategorySlice";

export const sortName = [
    {name: 'популярности', sort: 'rating'},
    {name: 'Цене', sort: 'price'},
    {name: 'названию', sort: 'title'}
]

function Sort() {
    const {sortSwitchProperty, sortByOrder, sort, desc} = useSelector(state => state.filter)
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false)


    const onClickSortType = (i) => {
        dispatch(setSort(i))
    }

    useEffect(() => {
        if (sortByOrder === 'desc') {
            dispatch(setSortSwitchProperty(false))
        } else {
            dispatch(setSortSwitchProperty(true))
        }
    }, [sortSwitchProperty])

    const onChangeSortSwitchProperty = () => {
        dispatch(setSortSwitchProperty(!sortSwitchProperty))
        if (sortByOrder === 'desc') {
            dispatch(setSortByOrder('asc'))

        } else {
            dispatch(setSortByOrder('desc'))

        }
    }
    console.log(sortSwitchProperty)
    return (
        <div className='sort'>
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

    );
}

export default Sort;