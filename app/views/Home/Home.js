import React from 'react'
import { View, Text, StatusBar, SafeAreaView } from 'react-native'

const Home = () => {
    return (
       <SafeAreaView>
           <StatusBar backgroundColor={"#d63230"} barStyle="light-content" />
           <Text>Home View</Text>
       </SafeAreaView>
    )
}

export default Home;