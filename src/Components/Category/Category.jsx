import React from 'react';
import './Category.scss'
import Sort from "../Sort/Sort";
import {setCategoryId} from "../../Redux/slices/FilterCategorySlice";
import {useDispatch, useSelector} from "react-redux";

function Category() {
    const dispatch = useDispatch();
    const {categoryId} = useSelector(state => state.filter)

    const nameCategory = ['Все','Классическая','Для драконов','Сырная','Веганская','Сладкая',];

    const onChangeCategory = (i) => {
        dispatch(setCategoryId(i))
    }
    return (
        <div className='container__sort'>
            <ul className='category'>
                {nameCategory.map((item, index) => {
                    return <li   key={index} className={categoryId === index ? 'category__item active' : 'category__item'} onClick={(e) => {
                        onChangeCategory(index)
                    }
                    }>{item}</li>
                })}
            </ul>
            <Sort />
        </div>


    );
}

export default Category;