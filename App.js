import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, FlatList} from 'react-native';
import CountTime from './src/components/CountTime';

const App = () => {
  const [counterNumber, setCounterNumber] = useState(0);
  const [globalCounter, setGlobalCounter] = useState(0);
  function setGlobalCounterFunction() {
    return setGlobalCounter(globalCounter => globalCounter + 1);
  }
  function getData() {
    let temp = [...Array(counterNumber).keys()];
    return temp;
  }
  const addCounter = () => {
    setCounterNumber(counterNumber => counterNumber + 1);
  };
  const handleReset = () => {
    setCounterNumber(0);
    setGlobalCounter(0);
  };
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{margin: 10}}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => addCounter()}>
            <Text style={styles.buttonText}>Add Counter</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginVertical: 10}}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => handleReset()}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: 'flex-end',
            flex: 1,
            margin: 10,
          }}>
          <Text style={styles.globalCounterstyle}>{globalCounter}</Text>
        </View>
      </View>
      <View style={{flex: 4}}>
        <FlatList
          data={getData()}
          keyExtractor={item => item}
          renderItem={({item, index}) => (
            <CountTime setGlobalCounterNumber={setGlobalCounterFunction} />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    width: 120,
    height: 50,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#38ABFD',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
  globalCounterstyle: {
    color: '#000',
    width: 80,
    height: 50,
    borderWidth: 1,
    textAlign: 'center',
    backgroundColor: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    borderRadius: 20,
  },
});

export default App;
