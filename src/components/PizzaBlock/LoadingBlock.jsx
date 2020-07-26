import React from 'react'
import ContentLoader from 'react-content-loader'


const LoadingBlock = () => {
    return (
        <ContentLoader 
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#ecebeb"
            foregroundColor="#ecebeb"
            className="pizza-block"
        >
            <circle cx="130" cy="130" r="120" /> 
            <rect x="3" y="262" rx="6" ry="6" width="280" height="26" /> 
            <rect x="1" y="296" rx="6" ry="6" width="280" height="84" /> 
            <rect x="4" y="400" rx="6" ry="6" width="106" height="38" /> 
            <rect x="45" y="417" rx="0" ry="0" width="0" height="1" /> 
            <rect x="136" y="390" rx="25" ry="25" width="144" height="48" />
        </ContentLoader>
    )
}

export default LoadingBlock
