/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard 
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import Note from './app/components/note';

export default class App extends Component {
  state = {
    noteArray : [{'date' : '2014-04-05','note' : 'tejas 1'}],
    noteText : ''
  }
  render() {
    let notes = this.state.noteArray.map((val, key) => {
        return <Note key={key} keyval={key} val={val} deleteMethod={() => this.deleteNote(key)} />
    });
    return (
        <View style={styles.container}>
            <View style={styles.Header}>
              <Text style={styles.headerText}>ToDo App</Text>
            </View>
          <ScrollView style={styles.scrollContainer}>
            {notes}
          </ScrollView>
          <View style={styles.footer}>
              <TouchableOpacity style={styles.addButton} onPress={this.addNote.bind(this)}>
                  <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
              <TextInput style={styles.TextInput}
                  onChangeText={(noteText) => this.setState({noteText})}
                  value={this.state.noteText}
                  placeholder="Add Note" placeholderTextColor="white" underlineColorAndroid="transperent"
              />
          </View>
        </View>
        )
}
  addNote() {
    if(this.state.noteText){
      var d = new Date();
      this.state.noteArray.push({'date' : d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(), 'note': this.state.noteText});
      this.setState({noteArray : this.state.noteArray});
      this.setState({noteText : ''});
      Keyboard.dismiss();
    }
  }

  deleteNote(key){
    this.state.noteArray.splice(key ,1)
    this.setState({noteArray : this.state.noteArray})
    
  }
}

const styles = StyleSheet.create({  
  container: {
    flex : 1
  },
  Header: {
    backgroundColor: '#E91E63',
    alignItems : 'center',
    justifyContent : 'center',
    borderBottomWidth : 5,
    borderBottomColor : '#ddd'
  },
  headerText: {
    color: Colors.white,
    fontSize: 18,
    padding: 20
  },
  scrollContainer: {
    flex : 1,
    marginBottom: 100
  },
  footer : {
    position : "absolute",
    bottom: 0,
    left : 0,
    right : 0,
  },
  addButton: {
    backgroundColor : '#E91E63',
    width : 80,
    height : 80,
    borderRadius : 40,
    borderColor : '#ccc',
    alignItems : 'center',
    justifyContent : 'center',
    elevation : 1,
    marginBottom : -35
  },
  addButtonText : {
    color : '#fff',
    fontSize : 24
  },
  TextInput : {
    alignSelf : 'stretch',
    color : '#fff',
    padding : 20,
    paddingTop : 45,
    backgroundColor : '#252525',
    borderWidth : 5,
    borderTopColor : '#ededed'
  }
});
