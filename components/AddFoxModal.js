import { View, TextInput, Modal, Text, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
// components
import { ActionButton } from './Button';
// constants
import { COLORS, foxData } from '../constants';

const AddFox = ({ isVisible, onClick }) => {
  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      presentationStyle="overFullScreen"
      transparent={false}
    >
      <SafeAreaView style={{ flex: 1 }}>

      </SafeAreaView>
    </Modal>
  )
}

export default AddFox;