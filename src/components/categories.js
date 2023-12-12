import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {categoryData} from '../constants'
import {mealData} from '../constants'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { CachedImage } from '../helpers/image';

export default function Categories({categories, activeCategory, handleChangeCategory}) {
  return (
    <Animated.View entering={FadeInDown.duration(500).springify()}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-4"
        contentContainerStyle={{paddingHorizontal: 15}}
      >
        {
            categoryData.map((cat, index)=>{
                let isActive = cat.name==activeCategory;    //Eğer bastığım class ın etrafındaki rengi değişsin  #8B4513
                var activeButtonStyle = isActive? '#8B4513': '#f0f0f0';
                return (
                    <TouchableOpacity
                        key={index}
                        onPress={()=> handleChangeCategory(cat.name)}
                        className="flex items-center space-y-1"
                    >
                        <View className={"rounded-full p-[6px] "} style={{backgroundColor:activeButtonStyle}}>
                       
                            <CachedImage
                                uri= {cat.image}
                                style={{width: hp(6), height: hp(6)}}
                                className="rounded-full"
                            />
                        </View>
                        <Text className="text-neutral-600" style={{fontSize: hp(1.6)}}>
                            {cat.name}
                        </Text>
                    </TouchableOpacity>
                )
            })
        }
      </ScrollView>
    </Animated.View>
  )
}