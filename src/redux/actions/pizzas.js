import axios from 'axios'


export const fetchPizzas = (category, sortBy) => { 
    console.log(sortBy, category)

    return (dispatch) => {
        dispatch(setLoaded(false))
        axios.get(`http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy}&_order=asc`)
        .then(({ data }) => {
            dispatch(setPizzas(data))
        })
    }
}

export const setLoaded = (payload) => {
    return {
        type: 'SET_LOADED',
        payload
    }
}

export const setPizzas = (items) => {
    return {
        type: 'SET_PIZZAS',
        payload: items
    }
}

