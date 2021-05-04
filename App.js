import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native';
import { NativeRouter,Link,Route } from 'react-router-native';
import {Provider} from 'react-redux'
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import store from './store';

const image = { uri: "https://images.pexels.com/photos/8892/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" };
export default function App() {
  
  return (
    <Provider store={store}>
      <NativeRouter>
          <View style={styles.container}>
          <ImageBackground source={image} style={styles.image}>
            
            <View>
              <StatusBar style="auto" />
              <Text style={styles.textVertMarg}> Engineering School </Text>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </View>         
            
            
          </ImageBackground>
          </View>
      </NativeRouter>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems:'center',
    flexDirection:'column',
    width:'100%',
    height:'100%',

  },
  textVertMarg:{
    marginVertical:20,
    color:'white',
    fontSize:30,
    alignItems:'center',
    justifyContent:'center',

    fontWeight:"700",
    marginLeft:110
  },
  image: {
    flex: 1  ,
    resizeMode: "cover",
    justifyContent: "center",
  }
});
