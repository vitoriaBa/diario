import React from 'react';
import { useState } from 'react';
import { StyleSheet,TextInput, Text, View, TouchableOpacity,Alert} from 'react-native';
 import { Firebase } from '../Firebase';
 import { firestore } from "../Firebase"; 
import { collection, addDoc } from "firebase/firestore"; 

export default function Cadastrar({navigation}) {
   
   const [titulo , setTitulo] = useState(null);
   const [texto , setTexto] = useState(null);
   const [data, setData] = useState(null);
   const [local, setLocal] = useState(null);

async function addDiario() {
    try {
        const docRef = await addDoc(collection(firestore, 'diario'), {
            titulo:titulo,
            texto:texto,
            data:data,
            local:local
        });
        console.log("Cadastrado com ID: ", docRef.id);
        Alert.alert("Cadastro", "Registros cadastros com sucesso")
        navigation.navigate("Home")    
    } catch (error) {
        console.error("Error ao cadastrar: ", error);
        Alert.alert("Erro", "Erro ao cadastrar . Por favor, tente novamente. ");
    }
}
return(
<View style={styles.container}>
 <View>
                                               
 <Text style={estilo.titulo}> Registre no Seu Diário</Text>
      </View>
      <TextInput autoCapitalize = 'words' style={estilo.input} placeholder="Digite o Título" onChangeText={setTitulo} value={titulo}/>
      <TextInput style={estilo.input} placeholder="Digite o lindo dia" onChangeText={setTexto} value={texto}/>
      <TextInput style={estilo.input} placeholder="Digite a data" onChangeText={setData} value={data}/>
      <TextInput style={estilo.input} placeholder="Digite o seu local agora" onChangeText={setLocal} value={local}/>
      <TouchableOpacity
        style={estilo.btnenviar}
        onPress={() => {
          addDiario();
        }}>
        <Text style={estilo.btntxtenviar}> Enviar </Text>
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