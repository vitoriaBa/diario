import React from 'react';
import { Firebase, } from '../Firebase';
import { useState } from 'react';
import { StyleSheet,TextInput,ImageBackground,Alert, Text, View, TouchableOpacity } from 'react-native';


export default function Alterar({navigation,route}) {
   
    const id = route.params.id;

   const [titulo , setTitulo] = useState(route.params.titulo);
   const [texto , setTexto] = useState(route.params.texto);
   const [data, setData] = useState(route.params.data);
   const [local, setLocal] = useState(route.params.local);

async function alterarDiario(id, titulo, texto, data, local) {
    try {
        await updateDoc(doc(collection(firestore, "meudiario"), id), {
            titulo: titulo,
            texto: texto,
            data: data,
            local: local
        })
        Alert.alert("Aviso", "Diário Alterado com Sucesso")
        navigation.navigate("Home")
    }
    catch (error) {
        console.error("Erro al alterar: ", error);
        Alert.alert("Erro", "Erro ao alterar. Por favorzinho, tente novamente");
    }
}


return(
<View style={styles.container}>
 <View>
                                               
    <Text style={styles.Titulo}>Alterar dados do Diario</Text>
    <TextInput 
    style={styles.input} placeholder='Digite seu Titulo'
    onChangeText={setTitulo} value={titulo}/>


<TextInput 
     style={styles.input} placeholder='Digite a Data'
    onChangeText={setData} value={data}/>

<TextInput 
     style={styles.input} placeholder='Digite seu Texto do dia :)'
    onChangeText={setTexto} value={texto}/>

<TextInput 
     style={styles.input} placeholder='Digite seu Local'
    onChangeText={setLocal} value={local}/>
     
 </View>
 <TouchableOpacity
 style={styles.bntenviar}
 onPress={() => {
    alterarDiario(id,titulo,texto,data,local);
 }}>
<Text> Enviar</Text>
</TouchableOpacity>

</View>
);

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',

  },
  txt:{
    marginTop:10,
    fontSize:20,
    fontWeight:'300',
   color:'#FFF6E0',
  },
  titulo:{
    fontWeight:'100',
    marginLeft:50,
    marginRight:50,
    margin:10,
    fontSize:40,
    color:'#FFF6E0',
  },
});