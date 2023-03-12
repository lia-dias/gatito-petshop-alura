import { TextInput } from "react-native"

export default function CampoInteiro({ valor, onChangeAcao }) {
    
    const valorString = String(valor);

    return <
        TextInput
            keyboardType="number-pad"
            selectTextOnFocus
            value={valorString}
            onChangeText={onChangeAcao}
        />
}