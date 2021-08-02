import React, {useState, useEffect, useRef} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

export default function CountTime({setGlobalCounterNumber}) {
  const [buttonStart, setButtonStart] = useState(false);
  const [getTime, setTime] = useState(0);
  const reference = useRef(null);

  function tick() {
    if (buttonStart === true) {
      setTime(getTime => getTime + 1);
      setGlobalCounterNumber();
    } else if (!buttonStart === true && getTime !== 0) {
      clearInterval(reference.current);
    } else {
      return;
    }
  }
  useEffect(() => {
    reference.current = setInterval(() => tick(), 1000);
    return () => clearInterval(reference.current);
  }, [buttonStart, getTime]);

  return (
    <View style={{alignItems: 'center', marginVertical: 10}}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          setButtonStart(() => !buttonStart);
        }}>
        <Text style={{color: '#fff'}}>
          {buttonStart === false ? 'Start Counter' : 'Stop Counter'}
        </Text>
      </TouchableOpacity>
      <View style={styles.localCounterstyle}>
        <Text style={{fontSize: 30}}>{getTime}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonStyle: {
    width: 120,
    height: 50,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'violet',
  },

  localCounterstyle: {
    borderWidth: 1,
    width: 120,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
});
