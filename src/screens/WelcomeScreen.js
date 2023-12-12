import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {

    const cerceve1 = useSharedValue(0);
    const cerceve2 = useSharedValue(0);

    const navigation = useNavigation();

    useEffect(()=>{
        cerceve1.value = 0;
        cerceve2.value = 0;
        setTimeout(() => {
          setTimeout(()=> cerceve1.value = withSpring(cerceve1.value+hp(5)), 100);
          setTimeout(()=> cerceve2.value = withSpring(cerceve2.value+hp(5.5)), 300);
        }, 1000);
  
        setTimeout(()=> cerceve1.value = withSpring(cerceve1.value+hp(0)), 100);
        setTimeout(()=> cerceve2.value = withSpring(cerceve2.value+hp(0)), 300);

        setTimeout(()=> navigation.navigate('Home'), 4000)
    },[])
  return (
    <View className="flex-1 justify-center items-center space-y-10" style={{backgroundColor:"#8B4513"}}>
      <StatusBar style="light" />

      {/* logo image with rings */}
      <Animated.View className="bg-white/20 rounded-full" style={{padding: cerceve2}}>
        <Animated.View className="bg-white/20 rounded-full" style={{padding: cerceve1}}>
            <Image source={require('../../assets/images/coffe.png')}
                style={{width: hp(20), height: hp(20)}} />
        </Animated.View>
      </Animated.View>

      {/* title and punchline */}
      <View className="flex items-center space-y-2">
        <Text style={{fontSize: hp(7)}} className="font-bold text-white tracking-widest">
            Fast Barista
        </Text>
        <Text style={{fontSize: hp(2)}} className="font-medium text-white tracking-widest">
          Coffee is a language in itself.
        </Text>
      </View>
    </View>
  )
}