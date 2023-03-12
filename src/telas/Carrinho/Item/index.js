import { useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import Botao from "../../../components/Botao";
import CampoInteiro from "../../../components/CampoInteiro";
import estilo from "./estilo";

export default function Item({nome, preco, descricao, quantidade: quantidadeInicial}) {

    const [quantidade, setQuantidade] = useState(quantidadeInicial);
    const [total, setTotal] = useState(preco * quantidadeInicial);

    const atualizaQuantidadeETotal = (novaQuantidade) => {
        setQuantidade(novaQuantidade);
        calculaTotal(novaQuantidade);
    }
    const calculaTotal = (novaQuantidade) => {
        setTotal(novaQuantidade * preco);
    };

    const formataMoeda = (valor) => {
        return Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(valor)
    }

    return (
        <>
            <View
                style={estilo.informacao}
            >
                <Text style={estilo.nome}>{nome}</Text>
                <Text style={estilo.descricao}>{descricao}</Text>
                <Text style={estilo.preco}>{
                    formataMoeda(preco)
                }</Text>
            </View>
            <View style={estilo.carrinho}>
                <View>
                    <View style={estilo.valor}>
                        <Text style={estilo.descricao}>Quantidade:</Text>
                        <CampoInteiro estilo={estilo.quantidade} valor={quantidade} onChangeAcao={atualizaQuantidadeETotal}/>
                    </View>
                    <View style={estilo.valor}>
                        <Text style={estilo.descricao}>Total:</Text>
                        <Text style={estilo.preco}>{
                            formataMoeda(total)
                        }</Text>
                    </View>
                </View>
                <Botao
                    valor="Remover do Carrinho"
                    onPressAcao={() => {}}/>
            </View>
            <View style={estilo.divisor}/>
        </>
    )
}