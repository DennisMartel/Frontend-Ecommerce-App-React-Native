import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import styles from './Styles'

const CartCard = ({ item }) => {
    return (
        <View style={{...styles.cartCardContainer}}>
            <Image 
                style={{...styles.cartCardImage}} 
                source={{uri: item.image}} 
            />
            <View style={{...styles.cartCardContent, flex: 2}}>
                <Text style={{...styles.productName}}>{item.name}</Text>
                <Text style={{color: "grey"}}>Color: {item.color}</Text>
                <Text style={{color: "grey"}}>Talla: {item.talla}</Text>
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
