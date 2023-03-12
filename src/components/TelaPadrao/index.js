import { KeyboardAvoidingView, Platform, SafeAreaView, StatusBar } from "react-native";
import estilos from "../../estilos";

export default function TelaPadrao({children}) {
    return (
        <SafeAreaView style={estilos.preencher}>
            <StatusBar/>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? "padding" : "height"}
                style={estilos.preencher}
            >
                {children}
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}