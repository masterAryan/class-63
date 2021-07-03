
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import {Header} from 'react-native-elements';

export default class App extends React.Component{
  constructor(){
    super();
    this.state ={
      text:'',
      displayText:''
    }
  }
  render(){
    return(
      <View style = {styles.container}>
          <Header 
          backgroundColor = {'#9c8210'}
          centerComponent = {{
            text : 'Monkey Chunkey',
            style : {color:'#fff',fontSize:20},

          }}
          />
          <TextInput style = {styles.inputBox} 
            onChangeText = {(t) =>{
              this.setState({
                text:t,
              })

              
            }}
          />
          <TouchableOpacity style = {styles.goButton} onPress = {()=>{
            this.setState({
              displayText : this.state.text
            })
          }}>

            <Text style = {styles.buttonText}>GO</Text>

          </TouchableOpacity>
          <Text>
            {this.state.displayText}
          </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
  inputBox : {
    marginTop : 200,
    width :'80%',
    alignSelf:'center',
    height:40,
    textAlign : 'center',
    borderWidth:4,
  },
  goButton : {
    width:'50%',
    height:55,
    alignSelf:'center',
    padding:10,
    margin:10,

  },
  buttonText:{
    textAlign:'center',
    fontSize:30,
    fontWeight:'bold',

  }
});
