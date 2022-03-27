import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StatusBar, SafeAreaView, ScrollView } from 'react-native'
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome5'
import styles from './Style'

const Login = ({ navigation}) => {
    return (
        <SafeAreaView style={{...styles.container}}>

            <StatusBar backgroundColor={"#d63230"} barStyle="light-content" />
            
            {/* text header */}
            <View style={{...styles.header}}>
                <Text style={{...styles.textHeader}}>Iniciar sesión</Text>
            </View>

            {/* animate view for container of signIn */}
            <Animatable.View style={{...styles.footer}} animation="fadeInUpBig" duration={2000}>
                
                {/* Scroll inside animatable view and scrollbar desactivation vertical */}
                <ScrollView showsVerticalScrollIndicator={false}>

                    {/* input for email */}
                    <Text style={styles.textFooter}>Correo</Text>
                    <View style={styles.action}>
                        <Icon name='envelope' size={16} color={'grey'} />
                        <TextInput style={styles.textInput} placeholder="Ingresa tu correo electrónico" autoCapitalize='none' />
                        <Icon name='check-circle' size={16} color={'grey'} />
                    </View>

                    {/* input for password */}
                    <Text style={{...styles.textFooter, marginTop: 20 }}>Contraseña</Text>
                    <View style={styles.action}>
                        <Icon name='key' size={16} color={'grey'} />
                        <TextInput secureTextEntry={true} style={styles.textInput} placeholder="Ingresa tu clave" autoCapitalize='none' />
                        <Icon name='eye' size={16} color={'grey'} />
                    </View>

                    {/* button sigIn */}
                    <TouchableOpacity style={styles.signIn}>
                        <Text style={styles.textSign}>Iniciar sesión</Text>
                    </TouchableOpacity>

                    {/* button signUp */}
                    <TouchableOpacity style={{...styles.signIn, backgroundColor: "#fff", borderWidth: 1, borderColor: "#d63230" }}>
                        <Text style={{...styles.textSign, color: "#d63230" }}>Registrate</Text>
                    </TouchableOpacity>

                    {/* link reset password */}
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Text style={{ textAlign: "right", marginTop: 30, color: "grey" }}>Olvidastes tú contraseña</Text>
                    </TouchableOpacity>

                    {/* text for signIn or signUp a social network */}
                    <View style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 20,}}>
                        <View style={{flex: 1, height: 1, backgroundColor: 'grey'}} />
                            <View>
                                <Text style={{textAlign: 'center', paddingHorizontal: 10, color: "grey"}}>O también</Text>
                            </View>
                        <View style={{flex: 1, height: 1, backgroundColor: 'grey'}} />
                    </View>

                    {/* button signIn with Google */}
                    <TouchableOpacity style={{...styles.btnGoogle}} onPress={() => navigation.navigate('Home')}>
                        <Text style={{ ...styles.textSign, color: "#000" }}>Acceder con Google</Text>
                    </TouchableOpacity>

                    {/* button signIn with Facebook */}
                    <TouchableOpacity style={{...styles.btnFacebook, marginBottom: 30,}} onPress={() => navigation.navigate('Home')}>
                        <Text style={{ ...styles.textSign, color: "#fff" }}>Acceder con Facebook</Text>
                    </TouchableOpacity>

                </ScrollView>

            </Animatable.View>

        </SafeAreaView>
    )
}

export default Login;
