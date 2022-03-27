import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import styles from './Styles'

const CartCard = ({imgPath, productName, colorName, size}) => {
    return (
        <View style={{...styles.cartCardContainer}}>
            <Image 
                style={{...styles.cartCardImage}} 
                source={{uri: imgPath}} 
            />
            <View style={{...styles.cartCardContent, flex: 2}}>
                <Text style={{...styles.productName}}>{productName}</Text>
                <Text style={{color: "grey"}}>Color: {colorName}</Text>
                <Text style={{color: "grey"}}>Talla: {size}</Text>
            </View>

            <View style={{...styles.cartCardAction}}>
                <TouchableOpacity style={{...styles.cartCardBtn}}>
                    <Icon name='trash-alt' size={15} color={"#fff"}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CartCard
