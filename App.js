import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import TelaPadrao from './src/components/TelaPadrao';
import NavigatorTemplate from './src/routes';

export default function App() {
  return <TelaPadrao>
      <NavigatorTemplate/>
    </TelaPadrao>
}