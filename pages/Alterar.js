import React from 'react';
import { useState } from 'react';
import { StyleSheet,TextInput,ImageBackground,Alert, Text, View, TouchableOpacity } from 'react-native';
import { collection, doc, updateDoc } from "firebase/firestore"; 
import { fire } from "../Firebase";
export default function Alterar({navigation,route}) {
   
    const id = route.params.id;

    const [filme , setFilme] = useState(route.params.filme);
    const [categoria , setCategoria]  = useState(route.params.categoria);
    const [nota, setNota]  = useState(route.params.nota);
    const [opiniao, setOpiniao] = useState(route.params.opiniao);

async function alterarFilme(id, filme, categoria, nota, opiniao) {
    try {
        await updateDoc(doc(collection(fire, "avaliacao"), id), {
          filme:filme,
          categoria:categoria,
          nota:nota,
          opiniao:opiniao,
        })
        Alert.alert("Aviso", "deu certo");
        navigation.navigate("Home");
    }
    catch (error) {
        console.error("Erro al alterar: ", error);
        Alert.alert("Erro", "Erro ao alterar. Por favorzinho, tente novamente");
    }
}


return(
<View style={styles.container}>
 <View>
                                               
    <Text style={styles.titulo}>Alterar avaliação</Text>
    <TextInput  style={styles.input} placeholder="filme" onChangeText={setFilme} value={filme}/>
      <TextInput style={styles.input} placeholder="categoria" onChangeText={setCategoria} value={categoria}/>
      <TextInput style={styles.input} placeholder="nota" onChangeText={setNota} value={nota}/>
      <TextInput style={styles.input} placeholder="opiniao" onChangeText={setOpiniao} value={opiniao}/>
     
     
 </View>
 <TouchableOpacity
 style={styles.btnenviar}
 onPress={() => {
  alterarFilme(id,filme,categoria,nota,opiniao);
 }}>
<Text  style={styles.txt}> Enviar</Text>
</TouchableOpacity>

</View>
);

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //margin:20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#B80000',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',

  },
  txt:{
   /// marginTop:10,
    fontSize:20,
    fontWeight:'300',
    fontWeight:'bold',
   color:'#FFF6E0',
  },
  titulo:{
    fontWeight:'100',
    marginLeft:50,
    marginRight:50,
    fontWeight:'bold',
    margin:10,
    fontSize:40,
    color:'#FFF6E0',
  },
  input:{
    backgroundColor:'#820300',
    width:300,
    borderRadius:10,
    marginBottom:20,
    height:40,
    padding:5,
    fontWeight:'bold',
    color:'#FFF6E0',
  },
  btnenviar:
  {
    borderRadius:10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#FF9800',
    width:200,
    height:40,
  }
});