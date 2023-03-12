import { TextInput } from "react-native"
import estiloPadrao from "./estilo";

export default function CampoInteiro({ valor, onChangeAcao, estilo }) {

    const validaOnChangeText = (novoValor, onChangeCallback) => {
        if(!novoValor.match(/^[0-9]*$/)) return;
        //remove left leading zeros
        const novoValorAtualizado = novoValor.replace(/^(0)*(\d+)/, "$2");
        onChangeCallback(novoValorAtualizado);
    }
    const valorString = String(valor);

    return <
        TextInput
            style={[estiloPadrao.campo, estilo]}
            keyboardType="number-pad"
            selectTextOnFocus
            value={valorString}
            onChangeText={(novoValor) => validaOnChangeText(novoValor, onChangeAcao)}
        />
}