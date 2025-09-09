import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './screens/homescreen';
import Profilescreen from './screens/profilescreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Homescreen"
        screenOptions={{
          headerStyle: { backgroundColor: 'red' },
          headerTintColor: 'white',
          headerTitleStyle: { fontWeight: 'bold' },
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen
          name="Homescreen"
          component={Homescreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Profilescreen"
          component={Profilescreen}
          options={{ title: 'Profile' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
