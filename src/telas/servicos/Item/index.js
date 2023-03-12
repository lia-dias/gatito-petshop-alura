import { Text, View } from "react-native";
import estilo from "./estilo";

export default function Item({nome, preco, descricao}) {
    return (
        <View style={estilo.informacao}>
            <Text style={estilo.nome}>{nome}</Text>
            <Text style={estilo.descricao}>{descricao}</Text>
            <Text style={estilo.preco}>${preco}</Text>
        </View>
    )
}