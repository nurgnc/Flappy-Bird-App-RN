import React from 'react'
import { View } from 'react-native'

const Obstacles = ({randomBottom, color, obstacleHeight, obstacleWidth, obstaclesLeft, gap}) => {
    
    return (
        <>
            <View style={{
                position: 'absolute',
                backgroundColor: color,
                width: obstacleWidth,
                height: obstacleHeight,
                left: obstaclesLeft,
                bottom: randomBottom + obstacleHeight + gap,
            }}/>
            <View style={{
                position: 'absolute',
                backgroundColor: color,
                width: obstacleWidth,
                height: obstacleHeight,
                left: obstaclesLeft,
                bottom: randomBottom,
            }}/>
        </>
    )
}

export default Obstacles

