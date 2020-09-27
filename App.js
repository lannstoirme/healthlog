import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const MeasureScreen = ({navigation}) => {
  return (
    <View>
      <View><Text>This is the Measure Screen</Text>
        </View>
        <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('Home')} >
                <Image source={require('./iconbutton.png')} style={styles.FloatingButtonStyle} />
            </TouchableOpacity>
    </View>
  );
}

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <View><Text>This is the Home Screen</Text>
        </View>
        <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('Measure')} >
                <Image source={require('./iconbutton.png')} style={styles.FloatingButtonStyle} />
            </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
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
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'green',
      },
      FloatingButtonStyle: {
          resizeMode: 'contain',
          width: 200,
          height: 200,
      },
  
});

export default App;
