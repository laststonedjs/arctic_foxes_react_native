import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
// screens
import Home from './screens/Home';
import Details from './screens/Details';

const Stack = createStackNavigator();

const App = () => {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.otf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.otf"),
    InterMedium: require("./assets/fonts/Inter-Medium.otf"),
    InterRegular: require("./assets/fonts/Inter-Regular.otf"),
    InterLight: require("./assets/fonts/Inter-Light.otf"),
  })

  if (!loaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName='Home'
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Details' component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;