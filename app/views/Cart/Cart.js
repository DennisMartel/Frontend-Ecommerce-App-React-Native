import React from 'react'
import { View, Text, TouchableOpacity, TextInput, FlatList, SafeAreaView, ScrollView } from 'react-native'
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome5'
import styles from './Styles';

// components
import CartCard from '../../components/CartCard/CartCard';

const Cart = () => {
    const data = [
        {
            image: 'https://mifunko.com/4010-large_default/figura-pop-marvel-spiderman-no-way-home-spiderman-integrated-suit.jpg',
            name: 'Funko Pop! Spiderman Integrated Suit - Marvel: Spiderman No Way Home',
            price: '23.99',
            color: 'rojo',
            talla: 'unico'
        },
        {
            image: 'https://mifunko.com/3249-large_default/funko-pop-dc-comics-arkham-asylum-batman.jpg',
            name: 'Funko Pop! DC Comics Arkham Asylum Batman',
            price: '23.99',
            color: 'negro',
            talla: 'unico'
        },
        {
            image: 'https://mifunko.com/323-large_default/funko-pop-dragon-ball-z-goku.jpg',
            name: 'Funko Pop! Goku 615 - Dragon Ball Z',
            price: '23.99',
            color: 'anaranjado',
            talla: 'unico'
        },
    ];

    return (
        <SafeAreaView style={{...styles.container}}>
            <View style={{flex: 1, marginTop: 10}}>
                <Text style={{paddingHorizontal: 20, fontSize: 20, paddingBottom: 10, color: "grey", fontWeight: "bold"}}>Resumen del carrito de compras</Text>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={{...styles.content}}
                    data={data}
                    renderItem={({item}) => <CartCard item={item}/>}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>

            <Animatable.View style={{flex: 1, marginTop: 5}} animation="fadeInUpBig">
                <ScrollView style={{...styles.footerCart}} showsVerticalScrollIndicator={false}>
                    <Text style={{color: "grey", fontWeight: "bold", fontSize: 16, marginBottom: 20}}>Resumen de la orden</Text>
                    
                    <Text style={styles.textFooter}>¿Tienes un código promocional?</Text>
                    <View style={styles.action}>
                        <TextInput style={styles.textInput} placeholder="Puedes ingresarlo aquí" autoCapitalize='none' />
                        <TouchableOpacity style={{...styles.btnApplyCoupon}}>
                            <Text style={{color: "#fff", fontWeight: "bold", letterSpacing: 1,}}>Aplicar</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, justifyContent: "space-between", flexDirection: 'row', paddingVertical: 7}}>
                        <Text>Subtotal:</Text>
                        <Text>$99.99</Text>
                    </View>

                    <View style={{ flex: 1, justifyContent: "space-between", flexDirection: 'row', paddingVertical: 7}}>
                        <Text>Descuento cupón:</Text>
                        <Text>$-5.00</Text>
                    </View>

                    <View style={{ flex: 1, justifyContent: "space-between", flexDirection: 'row', paddingVertical: 7}}>
                        <Text>Total:</Text>
                        <Text>$94.99</Text>
                    </View>

                    <TouchableOpacity style={{...styles.btnPayNow}}>
                        <Text style={{fontWeight: "bold", letterSpacing: 1, color: "#fff"}}>
                            <Icon name='credit-card' size={16}/>
                            Finalizar compra
                        </Text>
                    </TouchableOpacity>

                </ScrollView>
            </Animatable.View>
        </SafeAreaView>
    )
}

export default Cart;
