import { View, Text, Image } from 'react-native';
// constants
import { COLORS, SIZES, FONTS } from '../constants'

const DetailsFox = ({ foxes }) => {
  return (
    <View style={{
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginVertical: SIZES.base,
      paddingHorizontal: SIZES.base * 1.3,
    }}>
      <Image
        source={foxes.image}
        resizeMode="contain"
        style={{ width: 85, height: 85 }}
      />
      <View>
        <Text style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.small,
          color: COLORS.primary
        }}>
          Name: {foxes.name}
        </Text>
        <Text style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small - 1,
          color: COLORS.secondary,
          marginTop: 3,
        }}>
          Age: {foxes.age}
        </Text>
      </View>

      <Text style={{
        fontFamily: FONTS.regular,
        fontSize: SIZES.small - 1,
        color: COLORS.secondary,
      }}>
        Kingdom: {foxes.domain}
      </Text>
    </View>
  )
}

export default DetailsFox;