import React, { Component, useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
 
//export default class App extends Component {
const Calendar = (props) => {
    let [ startDate, showDateChange ] = useState(null);


const toggleShowDateChange = (e) => {
    setDateChange(!showDateChange)
} 

const thisDate = showDateChange ? showDateChange.toString() : '';
const renderCalendar = () => {
    return (
        <View style={styles.container}>
    <CalendarPicker
            setDateChange={toggleShowDateChange} />
            <View><Text>Selected Date: { thisDate }</Text></View>
    </View>
);
}
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 100,
  },
});

export default renderCalendar;