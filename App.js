import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native-web";
import BottomTabs from "./app/Navigator/BottomTabs";

const App = () => {
    return (
        <NavigationContainer>
            <StatusBar />
            <BottomTabs />
        </NavigationContainer>
    )
}

export default App;