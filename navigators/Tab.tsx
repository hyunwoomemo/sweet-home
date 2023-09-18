import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Todos from '../screens/Todos'
import Menu2 from '../screens/Menu2'
import Menu3 from '../screens/Menu3'

const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        unmountOnBlur: true
      }}
    >
      <Tab.Screen name="Todos" component={Todos}/>
      <Tab.Screen name="Menu2" component={Menu2}/>
      <Tab.Screen name="Menu3" component={Menu3}/>
      <Tab.Screen name="My" component={Menu3}/>
    </Tab.Navigator>
  )
}

export default Tabs