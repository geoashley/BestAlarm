import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class TimePicker extends React.Component{
  constructor(props){
    super(props)
    this.state={hour:props.hh, minute:props.mm}
  }
  render(){
    return(
    <View style ={styles.container}>
      <Text style ={styles.textHHStyle}>{this.state.hour}</Text>
      <Text style ={styles.textOtherStyle}>:</Text>
      <Text style ={styles.textMMStyle}>{this.state.minute}</Text>

    </View>);
  }
}
const styles = StyleSheet.create({
  container:{
    flex:8,
    paddingTop:300,
    flexDirection:"row",
    justifyContent:'center',
    backgroundColor:'#BFC9CA'

  },
  textHHStyle:{
    flex:4,
    paddingLeft:5,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign:'right',
    backgroundColor:'#BFC9CA'

  },
  textMMStyle:{
    flex:4,
    paddingLeft:5,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign:'left'

  },
  textOtherStyle:{
    flex:1,
    padding:1,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign:'center'

  }

})