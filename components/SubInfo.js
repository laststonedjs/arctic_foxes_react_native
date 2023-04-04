import { View, Text } from 'react-native';
// constants
import { SIZES, COLORS, SHADOWS, FONTS } from '../constants';

export const FoxTitle = ({ title, titleSize, subTitle, subTitleSize }) => {
  return (
    <View>
      <Text style={{
        fontFamily: FONTS.semiBold,
        fontSize: titleSize,
        color: COLORS.chocolateKisses
      }}>
        {title}
      </Text>
      <Text style={{
        fontFamily: FONTS.regular,
        fontSize: subTitleSize,
        color: COLORS.chocolateKisses
      }}>
        <Text style={{
          fontFamily: FONTS.medium,
          fontSize: SIZES.medium
        }}>
          Inhabit &nbsp;
        </Text>
        <Text style={{
          fontFamily: FONTS.light,
          color: COLORS.gray,
          fontSize: SIZES.small + 2
        }}>{subTitle}</Text>
      </Text>
    </View>
  )
}

export const FoxYears = ({ years }) => {
  return (
    <View style={{
      paddingHorizontal: SIZES.font,
      paddingVertical: SIZES.base,
      backgroundColor: COLORS.white,
      justifyContent: 'center',
      alignItems: 'center',
      ...SHADOWS.light,
      elevation: 1,
      maxWidth: '50%'
    }}>
      <Text style={{
        fontFamily: FONTS.regular,
        fontSize: SIZES.small,
        color: COLORS.chocolateKisses
      }}>
        Years
      </Text>
      <Text style={{
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.medium,
        color: COLORS.chocolateKisses
      }}>
        {years}
      </Text>
    </View>
  )
}

export const FoxFood = ({ food }) => {
  return (
    <View style={{
      paddingHorizontal: SIZES.font,
      paddingVertical: SIZES.base,
      backgroundColor: COLORS.chocolateKisses,
      justifyContent: 'center',
      alignItems: 'center',
      ...SHADOWS.light,
      elevation: 1,
      maxWidth: '50%'
    }}>
      <Text style={{
        fontFamily: FONTS.regular,
        fontSize: SIZES.small,
        color: COLORS.white
      }}>
        Food
      </Text>
      <Text style={{
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.medium,
        color: COLORS.lightGray
      }}>
        {food}
      </Text>
    </View>
  )
}

export const SubInfo = ({ years, food }) => {
  return (
    <View style={{
      width: "100%",
      paddingHorizontal: SIZES.font,
      marginTop: -SIZES.extraLarge,
      flexDirection: "row",
      justifyContent: "space-between"
    }}>
      <FoxFood food={food} />
      <FoxYears years={years} />
    </View>
  )
}