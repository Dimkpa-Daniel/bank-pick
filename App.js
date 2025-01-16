import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OnboardingScreen from './screens/OnboardingScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import BottomTabScreens from './screens/BottomTabScreens';
import PostScreen from './screens/PostScreen';
import AddPostScreen from './screens/AddPostScreen';
import ViewPostScreen from './screens/ViewPostScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='postScreen' component={PostScreen} options={{title: 'Blog Post'}} />
      <Stack.Screen name='addPost' component={AddPostScreen} options={{title: 'Add Post'}} />
      <Stack.Screen name='viewPost' component={ViewPostScreen} options={{title: 'View Posts'}} />
      {/* <Stack.Screen name='onboarding' component={OnboardingScreen} options={{headerShown: false}}/>
      <Stack.Screen name='signin' component={SignInScreen} options={{headerShown: false}}/>
      <Stack.Screen name='signup' component={SignUpScreen} options={{headerShown: false}}/>
      <Stack.Screen name='bottomTab' component={BottomTabScreens} options={{headerShown: false}}/> */}

    </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
