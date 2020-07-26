import React from 'react'
import PropTypes from 'prop-types'

const Categories = React.memo(({items, onClickCategory, activeCategory}) => {
    const onSelectItem = (index) => {
        onClickCategory(index)
    }

    return (
        <div className="categories">
            <ul>
                <li 
                    className={activeCategory === null ? 'active' : ''}
                    onClick={() => onSelectItem(null)}
                >Все</li>
                {items && items.map((item, index) => (
                    <li 
                        className={activeCategory === index ? 'active': ''}
                        onClick={() => onSelectItem(index)} 
                        key={index}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
})

Categories.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickCategory: PropTypes.func,
    // activeCategory: PropTypes.oneOf([PropTypes.number, null]),
}

Categories.defaultProps = {
    items: [],
    activeCategory: null,
}

export default Categories
