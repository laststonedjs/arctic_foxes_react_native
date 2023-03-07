import { View, Text, Button, Image } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
// constants
import { COLORS, SIZES } from '../constants';

const ImageViewer = ({ selectedImage }) => {
  const imageSource = selectedImage !== null
    ? { uri: selectedImage }
    : 'Poster Img';

  return <Image source={imageSource} resizeMode="contain" />;
}

export default ImageViewer;