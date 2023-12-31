import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Stack from './Stack'
import Tabs from './Tab'

const Nav = createNativeStackNavigator()

const Root = () => {
  return (
    <Nav.Navigator
    screenOptions={{
      headerShown: false,
      presentation: 'modal'
    }}
    >
      <Nav.Screen name="Tabs" component={Tabs}/>
      <Nav.Screen name="Stack" component={Stack}/>
    </Nav.Navigator>
  )
}

export default Root