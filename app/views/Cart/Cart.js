import React from 'react'
import { View, Text, TouchableOpacity, TextInput, FlatList, SafeAreaView, ScrollView } from 'react-native'
import * as Animatable from 'react-native-animatable';
import styles from './Styles';

// components
import CartCard from '../../components/CartCard/CartCard';

const Cart = () => {
    return (
        <SafeAreaView style={{...styles.container}}>
            <View style={{flex: 1, marginTop: 20,}}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={{...styles.content}}
                    data={[
                        {key: 'A'},
                        {key: 'B'},
                        {key: 'C'},
                    ]}
                    renderItem={({item}) =>  (
                        <CartCard 
                            imgPath={"https://mifunko.com/2767-large_default/funko-pop-marvel-averngers-thor.jpg"}
                            productName="Funko Pop! Marvel Averngers Thor"    
                            colorName={"Gris"}
                            size={"Unico"}
                        />
                    )}
                />
            </View>

            <Animatable.View style={{flex: 1}} animation="fadeInUpBig">
                <ScrollView style={{...styles.footerCart}}>
                    <Text style={{color: "grey", fontWeight: "bold", fontSize: 16, marginBottom: 20}}>Resumen de la orden</Text>
                    
                    <Text style={styles.textFooter}>¿Tienes un código promocional?</Text>
                    <View style={styles.action}>
                        <TextInput style={styles.textInput} placeholder="Puedes ingresarlo aquí" autoCapitalize='none' />
                        <TouchableOpacity style={{...styles.btnApplyCoupon}}>
                            <Text style={{color: "#fff"}}>Aplicar</Text>
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

                    <TouchableOpacity style={{backgroundColor: "#ffcc33", alignItems: 'center', paddingVertical: 10, borderRadius: 20, marginVertical: 30}}>
                        <Text style={{fontWeight: "bold"}}>Finalizar compra</Text>
                    </TouchableOpacity>

                </ScrollView>
            </Animatable.View>
        </SafeAreaView>
    )
}

export default Cart;
