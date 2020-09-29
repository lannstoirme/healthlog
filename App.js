import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Calendar from './calendar';

const MeasureScreen = ({navigation}) => {
  return (
    <View>
      <View>
      <View style={styles.container3}><renderCalendar /></View>
      <View style={styles.container}><Text>This is the Home Screen</Text>
        </View>
      <View style={styles.container2}><Text>Another flex box</Text></View>
      
                
                
            <View style={styles.container7}></View>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.container4} >
                <Image source={require('./iconbutton.png')} style={styles.buttonStyle} />
            </TouchableOpacity>
            
    </View>
   
    </View>
  );
}

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <View>
      <View style={styles.container3}><Calendar /></View>
      <View style={styles.container}><Text>This is the Home Screen</Text>
        </View>
      <View style={styles.container2}><Text>Another flex box</Text></View>
      
                
               
          <View style={styles.container7}></View>
          <TouchableOpacity onPress={() => navigation.navigate('Measure')} style={styles.container4}>
                <Image source={require('./iconbutton.png')} style={styles.buttonStyle} />
            </TouchableOpacity>
          
    </View>
   
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer style={styles.navcontainer}>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Measure" component={MeasureScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  text: {
      fontSize: 20,
      paddingTop: 10,
      paddingBottom: 10,
      textAlign: 'center',
      fontWeight: 'bold',
  },
  container:{
      alignItems: 'flex-end',
      height: 100,
      backgroundColor: '#2274A5',
      },
  container2:{
    alignItems: 'flex-end',
    height: 100,
    backgroundColor: '#815c61',
  },
  container3: {
    alignItems: 'flex-end',
    height: 100,
    backgroundColor: '#e7dfc6',
  },
  container4: {
    alignItems: 'stretch',
    height: 100,
    backgroundColor: '#131b23',
  },
  container5: {
    alignItems: 'flex-end',
    height: 100,
    backgroundColor: '#816c61',
  },
  container6: {
    alignItems: 'flex-end',
    height: 100,
    backgroundColor: '#131b23',
  },
  container7: {
    alignItems: 'flex-end',
    height: 300,
    backgroundColor: '#e9f1f7',
  },
  buttonStyle: {
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
    alignContent: 'flex-end',
    height: 150,
    width: 150,
      },
    navcontainer: {
      backgroundColor: '#ffff00',
    }
});

export default App;
