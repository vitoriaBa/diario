import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { Firebase } from '../Firebase';

import { useEffect, useState } from 'react';
import { StyleSheet,ImageBackground, Text, View, TouchableOpacity,FlatList, } from 'react-native';
import { firestore } from "../Firebase"; 
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore"; 


export default function Home({navigation}) {   

  const [cine,setCine] = useState([]);

 async function deleteCine(id){
    try{
        await deleteDoc(doc(firestore, "avaliacao",id));
        alert("Deletado");
    } catch (error) {
        console.error("Erro ao deletar", error);
    }
  }

  useEffect(()=> {
    const unsubscribe = onSnapshot(collection(firestore, 'avaliacao'), (querySnapshot) => {
        const lista = [];
        querySnapshot.forEach((doc) => {
            lista.push({ ...doc.data(), id: doc.id});
        });
        setCine(lista);
    });

    return () => unsubscribe();
  },[]);



  return (
  
    <View style={styles.container}>
   
      
      <FlatList
      data={cine}
      renderItem={({item})=>{
      return(
<View style={styles.estiloDiario}>
<TouchableOpacity onPress={()=>navigation.navigate("Alterar",{
  id: item.id,
  filme: item.filme,
  nota: item.nota,
  categoria: item.categoria,
  opiniao: item.opiniao
} )}>
  
  <View style={styles.Items}>
 <Text style={styles.txt}>{item.filme}</Text>
 <Text style={styles.txt}>{item.nota}</Text>
 <Text style={styles.txt}>{item.categoria}</Text>
 <Text style={styles.txt}>{item.opiniao}</Text>
  </View>
</TouchableOpacity>

<TouchableOpacity onPress={()=>{deleteCine(item.id)}}>
<Text>Deletar</Text>
</TouchableOpacity>
</View>


      );
      }}
      />

<TouchableOpacity style={styles.estilobutao} onPress={()=> navigation.navigate('Cadastrar')}>
<Text style={styles.titulo}>Nova avaliação</Text>

</TouchableOpacity>
      
     <StatusBar style="auto" />
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#91C8E4',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',

  },
  txt:{
    marginTop:10,
    fontSize:20,
    fontWeight:'300',
   color:'#F6F4EB',
  },
  titulo:{
    fontWeight:'100',
    marginLeft:50,
    marginRight:50,
    margin:10,
    fontSize:40,
    color:'#F6F4EB',
  },
  Items:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width:300,
    height:390,
    backgroundColor:'#4682A9',
  }
});