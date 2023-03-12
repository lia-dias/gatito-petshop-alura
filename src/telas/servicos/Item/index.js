import { useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import Botao from "../../../components/Botao";
import CampoInteiro from "../../../components/CampoInteiro";
import estilo from "./estilo";

export default function Item({nome, preco, descricao}) {

    const [quantidade, setQuantidade] = useState(1);
    const [total, setTotal] = useState(preco);
    const [expandido, setExpandido] = useState(false);

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

    const inverteExpandido = () => {
        setExpandido(!expandido);
        atualizaQuantidadeETotal(1);
    }

    return (
        <>
            <TouchableOpacity
                style={estilo.informacao}
                onPress={inverteExpandido}
            >
                <Text style={estilo.nome}>{nome}</Text>
                <Text style={estilo.descricao}>{descricao}</Text>
                <Text style={estilo.preco}>{
                    formataMoeda(preco)
                }</Text>
            </TouchableOpacity>
            {
                expandido &&
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
                        valor="Adicionar"
                        onPressAcao={() => {}}/>
                </View>
            }
            <View style={estilo.divisor}/>
        </>
    )
}