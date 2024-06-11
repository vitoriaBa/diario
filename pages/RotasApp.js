import {createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator();
import Home from './Home';
import Alterar from './Alterar';
import Cadastrar from './Cadastrar';
import Filmes from './Filmes';

export default function RotasApp(){
    return(
<Stack.Navigator>
    <Stack.Screen name ="Home" component={Home} options={{ headerShown: false }}/>
    <Stack.Screen name ="Alterar" component={Alterar} options={{ headerShown: false }}/>
    <Stack.Screen name ="Cadastrar" component={Cadastrar} options={{ headerShown: false }}/>
    <Stack.Screen name ="Filmes" component={Filmes} options={{ headerShown: false }}/>
    
</Stack.Navigator>
    );
}