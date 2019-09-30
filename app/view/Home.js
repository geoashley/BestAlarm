import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../sections/Header.js';

export  class Home extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
        <Header message = 'Click here to login' />
        <Text style = {{flex:8}}>Welcome to React Native!</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})