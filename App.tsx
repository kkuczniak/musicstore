import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { FC } from 'react';
import { MainStack } from './types';
import Home from './screens/Home';
import Details from './screens/Details';

const Stack = createStackNavigator<MainStack>();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const App: FC = () => {
  const [loaded] = useFonts({
    MontserratBold: require('./assets/fonts/Montserrat-Bold.ttf'),
    MontserratMedium: require('./assets/fonts/Montserrat-Medium.ttf'),
    MontserratRegular: require('./assets/fonts/Montserrat-Regular.ttf'),
    MontserratSemiBold: require('./assets/fonts/Montserrat-SemiBold.ttf'),
  });
  if (!loaded) return null;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName='Home'
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Details' component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
