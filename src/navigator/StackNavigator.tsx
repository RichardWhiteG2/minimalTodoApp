import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { AddTodoScreen } from '../screens/AddTodoScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
    initialRouteName="HomeScreen"
    screenOptions={{headerShown:false, presentation:'modal' }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="AddTodoScreen" component={AddTodoScreen} />
    </Stack.Navigator>
  );
}