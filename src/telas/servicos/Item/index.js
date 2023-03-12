import { useState } from "react";
import { Button, Text, View } from "react-native";
import CampoInteiro from "../../../components/CampoInteiro";
import estilo from "./estilo";

export default function Item({nome, preco, descricao}) {

    const [quantidade, setQuantidade] = useState(1);

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
                        <CampoInteiro estilo={estilo.quantidade} valor={quantidade} onChangeAcao={setQuantidade}/>
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