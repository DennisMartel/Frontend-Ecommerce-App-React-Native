import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    inputSearch: {
        backgroundColor: "#fff",
        color: "black",
        paddingVertical: 7,
        paddingHorizontal: 7,
        borderRadius: 10,
    },
    contentSearch: {
        flex: 1, 
        marginTop: 10, 
        backgroundColor: "#fff", 
        borderRadius: 10, 
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1
    }
});

export default styles;