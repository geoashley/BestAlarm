import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../sections/Header.js';
import { TimePicker } from '../sections/TimePicker.js';
import { ChangeIcons } from '../sections/ChangeIcons.js';

export  class Home extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
        <Header message = 'Click here to login' />
        <ChangeIcons/>
        <TimePicker style = {{flex:8}} hh='08' mm='00'></TimePicker>
        <ChangeIcons/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center'
  }

})