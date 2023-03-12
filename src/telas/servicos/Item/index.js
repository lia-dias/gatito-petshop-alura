import { Button, Text, TextInput, View } from "react-native";
import estilo from "./estilo";

export default function Item({nome, preco, descricao}) {
    return (
        <>
            <View style={estilo.informacao}>
                <Text style={estilo.nome}>{nome}</Text>
                <Text style={estilo.descricao}>{descricao}</Text>
                <Text style={estilo.preco}>${preco}</Text>
            </View>
            <View style={estilo.carrinho}>
                <View>
                    <View style={estilo.valor}>
                        <Text style={estilo.descricao}>Quantidade:</Text>
                        <TextInput value="0"/>
                    </View>
                    <View style={estilo.valor}>
                        <Text style={estilo.descricao}>Preço:</Text>
                        <Text style={estilo.preco}>0</Text>
                    </View>
                </View>
                <Button title="Adicionar" />
            </View>
            <View style={estilo.divisor}/>
        </>
    )
}