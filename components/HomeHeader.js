import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Modal,
} from 'react-native';
// components
import { AddModal } from './AddFoxModal';
// constants
import { COLORS, SIZES, FONTS, SHADOWS, assets } from '../constants';

const HomeHeader = ({ onSearch }) => {
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);

  const swapModalVisible = (bool) => {
    setIsAddModalVisible(bool);
  }

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

        {/* ADD FOX MODAL */}
        <View style={{
          maxWidth: "55%",
          alignItems: "center",
        }}>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.cultural,
              paddingVertical: SIZES.base - 3,
              paddingHorizontal: SIZES.medium,
              marginRight: SIZES.medium + 4,
              marginTop: SIZES.large,
              borderRadius: SIZES.medium + 2,
            }}
            onPress={() => swapModalVisible(true)}
          >
            <Text style={{
              marginHorizontal: SIZES.font,
              marginVertical: SIZES.font,
              color: COLORS.chocolateKisses,
              fontFamily: FONTS.bold,
              fontSize: SIZES.regular
            }}>
              Add a New Fox{"   "}💼
            </Text>
          </TouchableOpacity>
          <Modal
            transparent={true}
            animationType="fade"
            visible={isAddModalVisible}
            onRequestClose={() => swapModalVisible(false)}
          >
            <AddModal
              swapModalVisible={swapModalVisible}
            />
          </Modal>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HomeHeader;