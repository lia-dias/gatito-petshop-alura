import { KeyboardAvoidingView, Platform, SafeAreaView, StatusBar } from "react-native";
import estiloGlobal from "../../estilos";
import estilo from "./estilos";

export default function TelaPadrao({children}) {
    return (
        <>
        <SafeAreaView style={estilo.ajusteTela}>
            <StatusBar/>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? "padding" : "height"}
                style={estiloGlobal.preencher}
                >
                {children}
            </KeyboardAvoidingView>
        </SafeAreaView>
        <SafeAreaView style={estilo.ajusteTelaBaixo}/>
        </>
    )
}