import { TouchableOpacity, View, Text, Image } from 'react-native';
// constants
import { COLORS, SIZES, SHADOWS, FONTS } from '../constants';

export const DetailButton = ({ minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity style={{
      backgroundColor: COLORS.primary,
      borderRadius: SIZES.extraLarge,
      minWidth: minWidth,
      padding: SIZES.small,
      ...props
    }}
      onPress={handlePress}
    >
      <Text style={{
        fontFamily: FONTS.semiBold,
        fontSize: fontSize,
        color: COLORS.white,
        textAlign: "center"
      }}>
        Fox Details
      </Text>
    </TouchableOpacity>
  )
}

export const EditButton = ({ minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity style={{
      backgroundColor: COLORS.primary,
      borderRadius: SIZES.extraLarge,
      minWidth: minWidth,
      padding: SIZES.small,
      ...props
    }}
      onPress={handlePress}
    >
      <Text style={{
        fontFamily: FONTS.semiBold,
        fontSize: fontSize,
        color: COLORS.white,
        textAlign: "center"
      }}>
        Edit A Fox
      </Text>
    </TouchableOpacity>
  )
}

export const ActionButton = ({ minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity style={{
      backgroundColor: COLORS.primary,
      borderRadius: SIZES.extraLarge,
      minWidth: minWidth,
      padding: SIZES.small,
      ...props
    }}
      onPress={handlePress}
    >
      <Text style={{
        fontFamily: FONTS.semiBold,
        fontSize: fontSize,
        color: COLORS.white,
        textAlign: "center"
      }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity style={{
      width: 40,
      height: 40,
      backgroundColor: COLORS.white,
      position: "absolute",
      borderRadius: SIZES.extraLarge,
      alignItems: "center",
      justifyContent: "center",
      ...SHADOWS.light,
      ...props
    }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{
          width: 26,
          height: 26
        }}
      />
    </TouchableOpacity>
  )
}