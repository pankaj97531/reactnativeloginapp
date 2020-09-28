import React from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text
} from 'react-native';

const DetailsScreen= ({navigation}) =>  {
    return (
      <View style={{flex:1,alignItems:'center',justifyContent:"center"}}>
        <Text>Details screen</Text>
        <Button title="Go To Details Screen..." onPress={()=>navigation.navigate('Details')} />
        <Button title="Go To Home Screen" onPress={()=>navigation.navigate('Home')} />
        <Button title="Go Back" onPress={()=>navigation.goBack()} />
        <Button title="Go To First Screen" onPress={()=>navigation.popToTop()} />
      </View>
    );
};
const styles = StyleSheet.create({

});
export default DetailsScreen;