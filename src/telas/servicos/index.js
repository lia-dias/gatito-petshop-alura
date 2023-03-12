import { FlatList } from 'react-native';
import TelaPadrao from '../../components/TelaPadrao';
import Item from './Item';

const servicos = [
    {
        id: 1,
        nome: 'Banho',
        preco: 79.90,
        descricao: "Banho no seu petzinho."
    },
    {
        id: 2,
        nome: 'Vacina V4',
        preco: 89.90,
        descricao: "Uma dose da vacina da V4. Seu gato precisa de duas."
    },
    {
        id: 3,
        nome: 'Vacina Antirrábica',
        preco: 99.90,
        descricao: "Uma dose da vacina antirrábica. Seu gato precisa de uma a cada 12 meses."
    },
];

function renderServico ({ item }) {
    return <Item {...item}></Item>;
}

export default function Servicos() {
    return (
        <TelaPadrao>
            <FlatList
                data={servicos}
                renderItem={renderServico}
                keyExtractor={(servico) => servico.id}
                />
        </TelaPadrao>
    )
}