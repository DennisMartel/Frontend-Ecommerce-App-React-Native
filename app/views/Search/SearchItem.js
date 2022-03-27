import React from 'react';
import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'
import styles from './Styles';

const SearchItem = ({ item }) => {
    return (
        <TouchableOpacity style={{...styles.contentSearch}}>
            <View style={{flexDirection: "row", paddingBottom: 7, paddingHorizontal: 3, paddingVertical: 3}}>
                <Image 
                    style={{
                        width: 60,
                        height: 60,
                        resizeMode: 'contain',
                    }}
                    source={{uri: item.image}} 
                />
                <View style={{flex: 12, paddingHorizontal: 9,}}>
                    <Text style={{color: "grey"}}>{ item.name }</Text>
                    <Text style={{color: "#d63230", fontWeight: "bold", marginTop: 4}}>${ item.price }</Text>
                </View>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Icon name='chevron-right' size={20} color={"grey"}/>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default SearchItem