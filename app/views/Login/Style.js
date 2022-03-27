import { StyleSheet } from "react-native";
import { Platform } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 20,
        paddingBottom: 30
    },

    footer: {
        flex: 4,
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingTop: 30
    },

    textHeader: {
        color: "#000",
        fontWeight: "bold",
        fontSize: 30
    },

    textFooter: {
        color: "grey",
        fontSize: 16
    },

    action: {
        flexDirection: "row",
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#f2f2f2",
        paddingBottom: 5
    },

    textInput: {
        flex: 1,
        marginTop: Platform === "ios" ? 0 : -6,
        paddingLeft: 10,
        color: "grey",
        fontSize: 16,
    },

    button: {
        alignItems: "center",
        marginTop: 50
    },

    signIn: {
        width: "100%",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        backgroundColor: "#d63230",
        marginTop: 20
    },

    textSign: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
        letterSpacing: 1,
    },

    btnGoogle: {
        backgroundColor: "#e5ece9",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        height: 40,
    },
        
    btnFacebook: {
        marginTop: 25,
        backgroundColor: "#0a2463",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        height: 40,
    },
});

export default styles;