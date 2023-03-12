import { TouchableOpacity, Text } from "react-native";
import estiloFn from "./estilo";

export default function Botao({estiloPequeno = false, estiloInvertido = false, valor, onPressAcao, estiloCustomizado = {}}) {
    const estiloPadrao = estiloFn(estiloPequeno, estiloInvertido);
    return (
        <TouchableOpacity
            onPress={onPressAcao}
            style={[estiloPadrao.botao, estiloCustomizado]}
        >
            <Text style={estiloPadrao.valor}>{valor}</Text>
        </TouchableOpacity>
    )
}