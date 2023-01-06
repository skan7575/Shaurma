import React, {useState} from 'react';
import './Sort.scss'

function Sort({sortByOrder, sort, onChangeSort, sortSwitchProperty}) {

    const sortName = [
        {name: 'популярности', sort: 'rating'},
        {name: 'Цене', sort: 'price'},
        {name: 'названию', sort: 'title'}
    ]

    const onClickSortType = (i) => {
        onChangeSort(i)
    }

    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='sort'>
            <div className='sort__container'>
                <button className={sortSwitchProperty ? 'sort__switch': 'sort__switch sort__switch_min'} onClick={sortByOrder}>Сортировка по:</button>
                <span className='sort__select' onClick={() => {
                    setIsOpen(!isOpen)
                }}>{sort.name}</span>
            </div>
            {isOpen ?
                <ul className='sort__popup'>
                    {sortName.map((obj, index) => {
                        return <li className={ sort.sort === obj.sort ? `sort__popup-item sort__popup-item_active`: `sort__popup-item`} key={index} onClick={() => {
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