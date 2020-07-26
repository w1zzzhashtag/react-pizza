import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Categories, SortPopup, PizzaBlock } from './../components'
import PizzaLoadingBlock from './../components/PizzaBlock/LoadingBlock'
import { setCategory, setSortBy } from './../redux/actions/filters'
import { fetchPizzas } from './../redux/actions/pizzas'


const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые',]
const sortItems = [
    { name: 'популярности', type: 'popular' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'name' }
]

const Home = () => {
    const dispatch = useDispatch()
    const items = useSelector(({ pizzas }) => pizzas.items)
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)
    const {sortBy, category} = useSelector(({ filters }) => filters)

    useEffect(() => {
        dispatch(fetchPizzas(category, sortBy))
    }, [category, sortBy])

    const onSelectCategory = React.useCallback(index => {
        dispatch(setCategory(index))
    }, [])

    const onSelectSortType = React.useCallback(type => {
        dispatch(setSortBy(type))
    }, [])


    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    onClickCategory={onSelectCategory}
                    items={categoryNames}
                    activeCategory={category}
                />
                <SortPopup activeSortType={sortBy} items={sortItems} onClickSortType={onSelectSortType}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoaded ? 
                        items.map(obj => (<PizzaBlock key={obj.id} {...obj} isLoading={true}/>)) : 
                        Array(12).fill(0).map((_, index) => <PizzaLoadingBlock key={index}/>)
                }
            </div>
        </div>
    )
}

export default Home
