import React from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text
} from 'react-native';

const HomeScreen= ({ navigation }) =>  {
    return (
      <View style={{flex:1,alignItems:'center',justifyContent:"center"}}>
        <Text>Hone screen</Text>
        <Button title="Go To Details Screen" onPress={()=>navigation.navigate('Details')} />
      </View>
    );
};
const styles = StyleSheet.create({

});

export default HomeScreen