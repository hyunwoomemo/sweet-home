import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Write from '../screens/Write'

const NativeStack = createNativeStackNavigator()

const Stack = () => {
  return (
    <NativeStack.Navigator>
      <NativeStack.Screen name="Write" component={Write}/>
    </NativeStack.Navigator>
  )
}

export default Stack