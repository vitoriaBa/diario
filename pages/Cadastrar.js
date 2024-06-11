import React from 'react';
import { useState } from 'react';
import { StyleSheet,TextInput, Text, View, TouchableOpacity,Alert} from 'react-native';
 import { Firebase } from '../Firebase';
 import { fire } from "../Firebase"; 
 import { getFirestore, collection, addDoc } from 'firebase/firestore';
 

export default function Cadastrar({navigation}) {
   
   const [filme , setFilme] = useState(null);
   const [categoria , setCategoria] = useState(null);
   const [nota, setNota] = useState(null);
   const [opiniao, setOpiniao] = useState(null);

async function addfilme() {
    try {
        const docRef = await addDoc(collection(fire, 'avaliacao'), {
          filme:filme,
            categoria:categoria,
            nota:nota,
            opiniao:opiniao
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
                                               
 <Text style={styles.titulo}>filme</Text>
      </View>
      <TextInput style={styles.input} placeholder="filme" onChangeText={setFilme} value={filme}/>
      <TextInput style={styles.input} placeholder="categoria" onChangeText={setCategoria} value={categoria}/>
      <TextInput style={styles.input} placeholder="nota" onChangeText={setNota} value={nota}/>
      <TextInput style={styles.input} placeholder="opiniao" onChangeText={setOpiniao} value={opiniao}/>
      <TouchableOpacity
        style={styles.btnenviar}
        onPress={() => {
          addfilme();
        }}>
        <Text style={styles.txt}> Enviar </Text>
      </TouchableOpacity>
    </View>
);
//paleta #5F8670 #FF9800 #B80000  #820300
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