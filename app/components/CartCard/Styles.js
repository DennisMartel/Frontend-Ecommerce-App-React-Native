import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    cartCardContainer: {
        justifyContent: "space-between",
        flexDirection: "row",
        paddingVertical: 10,
        paddingHorizontal: 5,
        backgroundColor: "#fff",
        marginBottom: 10,
        borderRadius: 4.65,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    cartCardImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
        borderColor: "#f0f7ee",
    },
    cartCardContent: {
        flexDirection: "column",
    },
    productName: {
        color: "grey",
        fontSize: 14,
        fontWeight: "bold"
    },
    cartCardAction: {
    },
    cartCardBtn: {
        backgroundColor: "#d63230",
        paddingVertical: 7,
        paddingHorizontal: 7,
        borderRadius: 6,
    }
});

export default styles;