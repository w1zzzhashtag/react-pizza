import React, {useState} from 'react'

// class Categories extends React.Component {
//     state = {
//         activeItem: 3,
//     }

//     onSelectItem(index) {
//         this.setState({activeItem: index})
//     }

//     render() {
//         const { items, onClickItem } = this.props
//         return (
//             <div className="categories">
//                 <ul>
//                     <li className="active">Все</li>
//                     {items.map((item, index) => (
//                         <li className={this.state.activeItem === index ? 'active' : ''} onClick={() => this.onSelectItem(index)} key={index}>{item}</li>
//                     ))}
//                 </ul>
//             </div>
//         )
//     }
// }

function Categories({items, onClickItem}) {
    const [activeItem, setActiveItem] = useState(null)
    return (
        <div className="categories">
            <ul>
                <li 
                    className={activeItem === null ? 'active': ''}
                    onClick={() => setActiveItem(null)}
                >Все</li>
                {items && items.map((item, index) => (
                    <li 
                        className={activeItem === index ? 'active': ''}
                        onClick={() => setActiveItem(index)} 
                        key={index}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Categories
