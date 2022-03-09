//This is an example code for Navigator//
import React, { Component, useEffect, useState } from 'react';
//import react in our code.
import { StyleSheet, View, Text, Button, Image} from 'react-native';
//import all the components we are going to use.
import eppy from './eppy.jpg';
import tp from './911.jpg';
 
function FightBoss() {
  const [health, setHealth] = useState(10);
  
  const BossDefeated = () => {
    if(health < 1){
      return <div>
        <img src={tp} style={{width: 100, height: 100}}/>
        <br></br> 
        You did it!
      </div>
    } else {
      return <div>
        <Button title='Attack'
       onPress={() =>setHealth(health - 1)}
       />
        Health: {health}
        <br></br>
        <img src="http://takitanifoundation.org/wp-content/uploads/2020/05/8-17-Mid-Pacific-Institute-Kyler-Saiki.jpg" style={{width: 100, height: 100}}/> 
        <br></br>
        Keep at it!
      </div>
    }
  }

  return (
    <View style={styles.container}>
       
       <BossDefeated />
     </View>
   );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        margin:50,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
   
export default FightBoss;