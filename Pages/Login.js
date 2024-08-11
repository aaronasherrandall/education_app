import { View, Text, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import AntDesign from '@expo/vector-icons/AntDesign';


/**
 * Renders the Login component.
 *
 * @returns {JSX.Element} The rendered Login component.
 */
export default function Login() {
  return (
    <View>
      <Image source={require('./../App/Assets/Image/education_app_splash_screen.png')} />
      <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to CodeBox</Text>
      <Text style={{
        textAlign: 'center', 
        marginTop: 80,
        fontSize: 20,
        }}>Login/Signup</Text>
        <View style={styles.button}>
            <AntDesign name="google" size={24} color="white" style={{marginRight: 10}}/>
            <Text style={{color: Colors.white}}>Sign In with Google</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        // add rounded edges at top
        // move it to top
        marginTop: -25,
        // set background color so we can see it
        backgroundColor: '#fff',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    
    welcomeText: {
        fontSize: 30, 
        textAlign: 'center', 
        fontWeight: 'bold',
    },

    button: {
        backgroundColor: Colors.primary,
        padding: 10,
        margin: 30,
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    }
})
