import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  SafeAreaView,
} from 'react-native';
// constants
import { COLORS, SIZES, FONTS, SHADOWS, assets } from '../constants';

const HomeHeader = ({ onSearch }) => {

  return (
    <SafeAreaView>
      <View style={{
        color: COLORS.primary,
        padding: SIZES.font
      }}>
        <View style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between"
        }}>
          <Image
            source={assets.logo}
            resizeMode="contain"
            style={{ width: 90, height: 55 }}
          />

          <View style={{ marginVertical: SIZES.font }}>
            <Text style={{
              fontFamily: FONTS.regular,
              fontSize: SIZES.small,
              color: COLORS.white
            }}>
              Hello, User 👋
            </Text>
            <Text style={{
              fontFamily: FONTS.bold,
              fontSize: SIZES.large,
              color: COLORS.white,
              marginTop: SIZES.base / 2
            }}>
              Let's explore Arctic Foxes
            </Text>
          </View>
        </View>

        {/* TEXT INPUT */}
        <View style={{ marginTop: SIZES.font }}>
          <View style={{
            width: "100%",
            borderRadius: SIZES.font,
            backgroundColor: COLORS.gray,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small
          }}>
            <Image
              source={assets.search}
              resizeMode="contain"
              style={{ width: 20, height: 20, marginRight: SIZES.base }}
            />
            <TextInput
              placeholder='Search Foxes'
              style={{ flex: 1 }}
              onChangeText={onSearch}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HomeHeader;