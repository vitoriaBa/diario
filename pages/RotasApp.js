import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import Alterar from './Alterar';
import Cadastrar from './Cadastrar';
const Stack = createStackNavigator();



export default function RotasApp(){
    return(
<Stack.Navigator>
    <Stack.Screen name ="Home" component={Home} options={{ headerShown: false }}/>
    <Stack.Screen name ="Alterar" component={Alterar} options={{ headerShown: false }}/>
    <Stack.Screen name ="Cadastrar" component={Cadastrar} options={{ headerShown: false }}/>
</Stack.Navigator>
    );
}