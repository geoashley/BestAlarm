import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';

export class ChangeIcons extends React.Component{

  render(){
    return(<View style={styles.container}>
      <Image style={styles.imageStyle} source={require('../../images/plus.png')}/>
      <Image style={styles.imageStyle} source={require('../../images/minus.png')}/>
    </View>);
  }

}
const styles = StyleSheet.create({
  container:{
    flex:8,
    flexDirection:"row",
    justifyContent:'center',
    backgroundColor:'#BFC9CA'

  },
  imageStyle:{
    width:50,
    height:50
  }
})
