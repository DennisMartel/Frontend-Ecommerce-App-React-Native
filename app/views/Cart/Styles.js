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
        flexDirection: "row",
        marginVertical: 10,
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
        paddingHorizontal: 10,
        color: "grey",
        paddingVertical: 4,
        fontSize: 16,
    },
    btnApplyCoupon: {
        backgroundColor: "grey",
        alignItems: "center",
        borderTopEndRadius: 10,
        borderBottomRightRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    btnPayNow: {
        backgroundColor: "#931f1d", 
        alignItems: 'center', 
        paddingVertical: 10, 
        borderRadius: 20,
        marginVertical: 30,
    }
});

export default styles;