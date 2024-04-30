import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { Firebase } from '../Firebase';

import { useEffect, useState } from 'react';
import { StyleSheet,ImageBackground, Text, View, TouchableOpacity,FlatList, } from 'react-native';
import { firestore } from "../Firebase"; 
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore"; 
//import {MaterialCommityIcons} from '@expo/vector-icons';

// // <MaterialCommityIcons name="delete-empty" size={70} color="red"/>
//<MaterialCommityIcons name="plus-circle-outline" size={70} color="red"/>

export default function Home({navigation}) {   

  const [diario,setDiario] = useState([]);

 async function deleteDiario(id){
    try{
        await deleteDoc(doc(firestore, "meudiario",id));
        Alert.alert("O diário foi Deletado");
    } catch (error) {
        console.error("Erro ao deletar", error);
    }
  }

  useEffect(()=> {
    const unsubscribe = onSnapshot(collection(firestore, 'meudiario'), (querySnapshot) => {
        const lista = [];
        querySnapshot.forEach((doc) => {
            lista.push({ ...doc.data(), id: doc.id});
        });
        setDiario(lista);
    });

    return () => unsubscribe();
  },[]);



  return (
  
    <View style={styles.container}>
      <Text style={styles.titulo}>Meu Diario</Text>
      
      <FlatList
      data={diario}
      renderItem={({item})=>{
      return(
<View style={styles.estiloDiario}>
<TouchableOpacity onPress={()=>navigation.navigate("Alterar",{
  id: item.id,
  titulo: item.titulo,
  data: item.data,
  texto: item.texto,
  local: item.local
} )}>
  
  <View style={styles.Items}>
  <Text style={styles.Titulo}>Titulo:</Text> <Text style={styles.Titulo}>{item.titulo}</Text>
  <Text style={styles.txt}>Data:</Text> <Text style={styles.datatxt}>{item.data}</Text>
  <Text style={styles.txt}>Texto:</Text> <Text style={styles.txt}>{item.texto}</Text>
  <Text style={styles.txt}>Texto:</Text> <Text style={styles.txt}>{item.local}</Text>
  </View>
</TouchableOpacity>

<TouchableOpacity onPress={()=>{deleteDiario(item.id)}}>
<Text>AQUi Deletar</Text>
</TouchableOpacity>
</View>


      );
      }}
      />

<TouchableOpacity style={styles.estilobutao} onPress={()=> navigation.navigate('Cadastrar')}>
<Text>AQUi ?</Text>

</TouchableOpacity>
      
     <StatusBar style="auto" />
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