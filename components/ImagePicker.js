import { Image } from 'react-native';

const ImageViewer = ({ selectedImage }) => {
  const imageSource = selectedImage !== null
    ? { uri: selectedImage }
    : 'Poster Img';

  return <Image source={imageSource} resizeMode="contain" />;
}

export default ImageViewer;