import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Servicos from './telas/Servicos';
import Carrinho from './telas/Carrinho';

import { cores } from './estilos';

const { Navigator, Screen } = createBottomTabNavigator();

export default function NavigatorTemplate() {
    return (
        <NavigationContainer>
            <Navigator
            tabBarOptions={{
                activeTintColor: cores.roxo,
                inactiveTintColor: cores.claro,
                activeBackgroundColor: cores.roxo,
                inactiveBackgroundColor: cores.laranja,
                keyboardHidesTabBar: true,
                style: {
                    height: 70
                },
                labelStyle: {
                    fontWeight: 'bold',
                    fontSize: 16,
                    lineHeight: 21,
                    width: '100%',
                    flex: 1,
                    marginTop: 3,
                    paddingTop: 21,
                    backgroundColor: cores.laranja
                }
            }}>
                <Screen name='Serviços' component={Servicos}/>
                <Screen name='Carrinho' component={Carrinho}/>
            </Navigator>
        </NavigationContainer>
    );    
}