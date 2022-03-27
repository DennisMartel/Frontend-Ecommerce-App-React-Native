import { StyleSheet } from "react-native"
import { Platform } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    content: {
        flex: 1,
        paddingHorizontal: 5,
    },

    footerCart: {
        backgroundColor: "#fff",
        paddingTop: 15,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
    },
    textFooter: {
        color: "grey",
        fontWeight: "bold",
        fontSize: 13,
        paddingBottom: 5,
    },
    action: {
        // alignItems: "center",
        flexDirection: "row",
        marginTop: 10,
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderBottomColor: "grey",
        borderTopColor: "grey",
        borderLeftColor: "grey",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        marginTop: Platform === "ios" ? 0 : -6,
        paddingHorizontal: 10,
        color: "grey",
        paddingVertical: 4,
        fontSize: 16,
    },
    btnApplyCoupon: {
        backgroundColor: "grey",
    }
});

export default styles;