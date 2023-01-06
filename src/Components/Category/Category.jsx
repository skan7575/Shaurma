import React, {useState} from 'react';
import './Category.scss'
import Sort from "../Sort/Sort";

function Category({sortByOrder,onChangeSort, sort, value, onClickCategory, sortSwitchProperty}) {

    const nameCategory = ['Все','Классическая','Для драконов','Сырная','Веганская','Сладкая',];
    return (
        <div className='container__sort'>
            <ul className='category'>
                {nameCategory.map((item, index) => {
                    return <li   key={index} className={value === index ? 'category__item active' : 'category__item'} onClick={(e) => {
                        onClickCategory(index)
                    }
                    }>{item}</li>
                })}
            </ul>
            <Sort
                sortSwitchProperty={sortSwitchProperty}
                sortByOrder={sortByOrder}
                onChangeSort={onChangeSort}
                sort={sort}/>
        </div>


    );
}

export default Category;