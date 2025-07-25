import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '@/constants/themed'
import { useSSO } from '@clerk/clerk-expo'
import { useRouter } from 'expo-router'
import { styles } from '@/style/auth.style'

const login = () => {

    const {startSSOFlow} = useSSO();
    const router = useRouter();

    const handleGoogleSignIn = async() => {
        try {
            const {createdSessionId, setActive} = await startSSOFlow({strategy: "oauth_google"})

            if(setActive && createdSessionId){
                setActive({session: createdSessionId})
                router.replace("/(tabs)")
            }
        } catch (error) {
            console.log("Oauth Error:", error);
        }
    }

  return (
    <View style={styles.container}>
        {/* Banner  */}
        <View style={styles.brandSection}> 
            <View style={styles.logoContainer}>
                <Ionicons name='leaf' size={32} color={COLORS.primary} />
            </View>
            <Text style={styles.appName}>Spotlight</Text>
            <Text style={styles.tagline}>Don't miss anything</Text>
        </View>

        <View style={styles.illustrationContainer}>
            <Image source={require("../../assets/images/Online wishes-bro.png")} 
            style={styles.illustration}
            resizeMode="cover"
            />
        </View>

        <View style={styles.loginSection}>
            <TouchableOpacity style={styles.googleButton} onPress={handleGoogleSignIn} activeOpacity={0.9}>
                <View style={styles.googleIconContainer}>
                    <Ionicons name='logo-google' color={COLORS.surface} size={20} />
                </View>
                <Text style={styles.googleButtonText}>Continue with google</Text>
            </TouchableOpacity>

            <Text style={styles.termsText}>
                By Continuing, you agree to our Terms and Privacy policy
            </Text>
        </View>
    </View>
  )
}

export default login