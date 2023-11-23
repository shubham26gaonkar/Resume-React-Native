import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinkedIn from './assets/LinkedIn';
import Github from './assets/Github';
import Skills from './components/Skills';


function App(): JSX.Element {
  return (
    <ScrollView style={{paddingTop: 40, paddingBottom: 50, flex: 1, height:'auto', backgroundColor: '#17202A'}}>
      <View>
        <Image style={styles.img} 
          source={require('./assets/photo2.jpg')}
        />
        <View>
          <Text style={styles.name}>Shubham Ganesh Gaonkar</Text>
          <Text style={styles.details}>
            Email: mca.2262@unigoa.ac.in</Text>
          <Text style={styles.details}>
            Contact No: 7040375413
          </Text>
          <Text style={styles.details}>
            Address: D-14-E, Altinho Panaji Goa
          </Text>
        </View>
        <View style={styles.icon}>
          <LinkedIn/>
          <Github/>
        </View>
        <View style={styles.descBox}>
          <Text style={styles.desc}>I am interested to be a part of an organization where I can utilize my skills and knowledge to contribute to its growth and my professional and personal development.</Text>
        </View>
      </View>
      <Skills/>
    </ScrollView>
 
  );
}

const styles = StyleSheet.create({
  img:{
    alignSelf: 'center', 
    marginTop: 20, 
    borderRadius: 125, 
    width: 200, 
    height: 200 
  },
  name:{
    textAlign: 'center', 
    paddingTop: 10,
    fontSize: 30,
    color: 'white',
    fontWeight:'bold' 
  },
  details:{
    textAlign: 'center', 
    fontSize: 20 , 
    color: 'white', 
    paddingTop: 12
  },
  descBox:{
    backgroundColor: 'white', 
    borderRadius: 20, 
    margin: 10
  },
  desc:{ 
    textAlign: 'center', 
    fontSize: 20, 
    color: '#000000',
    margin: 10, 
    padding: 5
  },
  icon:{
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    
    margin: 6
  }
});
export default App;
