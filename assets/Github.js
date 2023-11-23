import { TouchableOpacity} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';

const Github = () => {
    const openGithub = () => {
        // Replace 'YOUR_LINKEDIN_PROFILE_URL' with the actual LinkedIn profile URL
        const gitHubProfileURL = 'https://github.com/shubham26gaonkar/';
        Linking.openURL(gitHubProfileURL)
        .catch((err) => console.error('An error occurred', err));
    };
  return (
    <TouchableOpacity style={{paddingRight: 10, paddingLeft: 10}} onPress={openGithub}>
        {/* Use the icon from react-native-vector-icons */}
        <Icon name="github" size={40} color="#ffffff" />
    </TouchableOpacity>
  )
}

export default Github