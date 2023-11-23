import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const Skills = () => {
  return (
    <ScrollView>

        <View style={styles.box}>
        <Text style={styles.heading}>Technical Skills</Text>
            <View style={styles.container}>
                <View style={styles.container1}>
                    <View style={styles.container2}>
                        <Text style={styles.data}>Java</Text>
                    </View>
                    <View style={styles.container2}>
                        <Text style={styles.data}>Python</Text>
                    </View>
                    <View style={styles.container2}>
                        <Text style={styles.data}>C Lang</Text>
                    </View>
                </View>
                <View style={styles.container1}>
                    <View style={styles.container2}>
                        <Text style={styles.data}>HTML</Text>
                    </View>
                    <View style={styles.container2}>
                        <Text style={styles.data}>CSS</Text>
                    </View>
                    <View style={styles.container2}>
                        <Text style={styles.data}>JavaScript</Text>
                    </View>
                </View>
                <View style={styles.container1}>
                    <View style={styles.container2}>
                        <Text style={styles.data}>Git</Text>
                    </View>
                    <View style={styles.container2}>
                        <Text style={styles.data}>Bootstrap</Text>
                    </View>
                    <View style={styles.container2}>
                        <Text style={styles.data}>C++</Text>
                    </View>
                </View>
            </View>
        </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    box:{
        alignItems: 'center',
        paddingBottom: 20,
    },
    heading:{
        paddingTop: 50,
        fontSize:30,
        color: 'white'
    },
    container:{
        flex: 1,
        height:200,
        width: 380,
        flexDirection: 'column',
        paddingBottom: 20
    },
    container1: {
      flex: 1,
      flexDirection: 'row',
      alignContent:'center',
      justifyContent: 'center'
    },
    container2: {
      flex: 1,
      height: 30,
      borderColor: 'white',
      borderRadius: 4,
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
      backgroundColor: 'white'
    },
    data:{
        fontSize: 17,
        color: '#000000'
    }
   ,
  });

export default Skills