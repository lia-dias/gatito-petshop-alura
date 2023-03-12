import { TextInput } from "react-native"

export default function CampoInteiro({ valor, onChangeAcao }) {

    const validaOnChangeText = (novoValor, onChangeCallback) => {
        if(!novoValor.match(/^[0-9]*$/)) return;
        //remove left leading zeros
        const novoValorAtualizado = novoValor.replace(/^(0)*(\d+)/, "$2000");
        onChangeCallback(novoValorAtualizado);
    }
    const valorString = String(valor);

    return <
        TextInput
            keyboardType="number-pad"
            selectTextOnFocus
            value={valorString}
            onChangeText={(novoValor) => validaOnChangeText(novoValor, onChangeAcao)}
        />
}