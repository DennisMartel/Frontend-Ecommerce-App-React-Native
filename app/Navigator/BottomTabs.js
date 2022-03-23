import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'

import Home from '../views/Home/Home';
import Categories from '../views/Categories/Categories';
import Cart from '../views/Cart/Cart';
import Account from '../views/Account/Account';
import Search from '../views/Search/Search';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    const screensOptions = (route, color) => {
        let iconName;
        switch (route.name) {
            case 'Home':
                iconName = 'home'
                break;

            case 'Categorias':
                iconName = 'th-list'
                break;

            case 'Mi Carrito':
                iconName = 'shopping-cart'
                break;

            case 'Buscar':
                iconName = 'search'
                break;

            case 'Mi Cuenta':
                iconName = 'user-circle'
                break;
        }

        return <Icon name={iconName} size={17} color={color} />
    }

    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: "#d63230",
                tabBarInactiveTintColor: "#000",
                tabBarStyle: {backgroundColor: "#fff"},
                tabBarIcon: ({ color }) => screensOptions(route, color),
                headerShown: false
            })}
        >
            <Tab.Screen options={{ title:'Inicio' }} name='Home' component={Home}/>
            <Tab.Screen options={{ title:'Categorias' }} name='Categorias' component={Categories}/>
            <Tab.Screen options={{ title:'Buscar' }} name='Buscar' component={Search}/>
            <Tab.Screen options={{ title:'Mi Carrito' }} name='Mi Carrito' component={Cart}/>
            <Tab.Screen options={{ title:'Mi Cuenta' }} name='Mi Cuenta' component={Account}/>
        </Tab.Navigator>
    )
}

export default BottomTabs