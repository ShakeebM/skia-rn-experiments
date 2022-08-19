import { StyleSheet } from 'react-native';
import { enableFreeze } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstScreen from './src/first-skia-screen';
import HomeScreen from './src/home';
import SecondScreen from './src/second-skia-screen';
import { Wallet } from './src/Wallet';

export default function App() {

  const Stack = createNativeStackNavigator();



  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />

      <Stack.Screen
          name="FirstSkia"
          component={FirstScreen}
          options={{ title: 'Circle' }}
        />

        <Stack.Screen
            name="Wallet"
            component={Wallet}
            options={{ title: 'Graph' }}
          />
        </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
