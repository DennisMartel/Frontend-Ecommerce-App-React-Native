import React from 'react'
import { View, Text, FlatList, TextInput, SafeAreaView, Dimensions } from 'react-native'
import SearchItem from './SearchItem';
import styles from './Styles';

const Search = () => {
    const data = [
        {
            image: 'https://mifunko.com/4010-large_default/figura-pop-marvel-spiderman-no-way-home-spiderman-integrated-suit.jpg',
            name: 'Funko Pop! Spiderman Integrated Suit - Marvel: Spiderman No Way Home',
            price: '23.99'
        },
        {
            image: 'https://mifunko.com/3249-large_default/funko-pop-dc-comics-arkham-asylum-batman.jpg',
            name: 'Funko Pop! DC Comics Arkham Asylum Batman',
            price: '23.99'
        },
        {
            image: 'https://mifunko.com/323-large_default/funko-pop-dragon-ball-z-goku.jpg',
            name: 'Funko Pop! Goku 615 - Dragon Ball Z',
            price: '23.99'
        },
        {
            image: 'https://mifunko.com/2767-large_default/funko-pop-marvel-averngers-thor.jpg',
            name: 'Funko Pop! Marvel Averngers Thor',
            price: '23.99'
        },
        {
            image: 'https://m.media-amazon.com/images/I/51-gDwbKPKL._AC_UL320_.jpg',
            name: 'Funko Pop! Games: Pokemon S8 - Dragonita',
            price: '23.99'
        },
        {
            image: 'https://mifunko.com/4489-home_default/funko-pop-vegeta-super-saiyan-154-dragon-ball-z.jpg',
            name: 'Funko Pop! Vegeta Super Saiyan 154 - Dragon Ball Z',
            price: '23.99'
        },
        {
            image: 'https://mifunko.com/1997-home_default/figura-pop-dragon-ball-z-s8-majin-vegeta.jpg',
            name: 'Funko Pop! Majin Vegeta - Dragon Ball Z S8',
            price: '23.99'
        },
        {
            image: 'https://mifunko.com/2884-home_default/funko-pop-fortnite-rex-exclusivo.jpg',
            name: 'Funko Pop! Rex Exclusivo - Fortnite',
            price: '23.99'
        },
        {
            image: 'https://mifunko.com/1653-home_default/funko-pop-inuyasha-inuyasha.jpg',
            name: 'Funko Pop! Inuyasha - Inuyasha',
            price: '23.99'
        },
        {
            image: 'https://mifunko.com/1656-home_default/funko-pop-inuyasha-sesshomaru.jpg',
            name: 'Funko Pop! Inuyasha Sesshomaru',
            price: '23.99'
        }
    ];

    return (
       <SafeAreaView style={{flex: 1, marginHorizontal: 20, marginVertical: 10}}>
            <TextInput 
                placeholder='Busca tú producto favorito'
                style={{...styles.inputSearch}}
            />
           <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={({item}) =>  <SearchItem item={item}/>}
                keyExtractor={(item, index) => index.toString()}
            />
       </SafeAreaView>
    )
}

export default Search;
