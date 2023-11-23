import {TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'

const LinkedIn = () => {
    const openLinkedIn = () => {
        // Replace 'YOUR_LINKEDIN_PROFILE_URL' with the actual LinkedIn profile URL
        const linkedInProfileURL = 'www.linkedin.com/in/shubham-ganesh-gaonkar';
        Linking.openURL(linkedInProfileURL)
        .catch((err) => console.error('An error occurred', err));
    };
  return (
    <TouchableOpacity style={{paddingRight: 20, paddingLeft: 10}} onPress={openLinkedIn}>
        <Icon name="linkedin-square" size={40} color="#ffffff" />
    </TouchableOpacity>
  )
}

export default LinkedIn