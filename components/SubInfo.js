import { View, Text } from 'react-native';
// constants
import { SIZES, COLORS, SHADOWS, FONTS } from '../constants';

export const FoxTitle = ({ title, titleSize, subTitle, subTitleSize }) => {
  return (
    <View>
      <Text style={{
        fontFamily: FONTS.semiBold,
        fontSize: titleSize,
        color: COLORS.primary
      }}>
        {title}
      </Text>
      <Text style={{
        fontFamily: FONTS.regular,
        fontSize: subTitleSize,
        color: COLORS.primary
      }}>
        <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.medium }}>Kingdom:</Text> {subTitle}
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
        color: COLORS.primary
      }}>
        Years
      </Text>
      <Text style={{
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.medium,
        color: COLORS.primary
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
      backgroundColor: COLORS.lightGray,
      justifyContent: 'center',
      alignItems: 'center',
      ...SHADOWS.light,
      elevation: 1,
      maxWidth: '50%'
    }}>
      <Text style={{
        fontFamily: FONTS.regular,
        fontSize: SIZES.small,
        color: COLORS.primary
      }}>
        Food
      </Text>
      <Text style={{
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.medium,
        color: COLORS.primary
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