import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Spending from '../screens/Spending'
import Reimbursement from '../screens/Reimbursement'

const Stack = createStackNavigator()

export default () => (
  <Stack.Navigator
    initialRouteName="Spending"
    screenOptions={{
      headerShown: false
    }}
  >
    <Stack.Screen name="Spending" component={Spending} />
    <Stack.Screen name="Reimbursement" component={Reimbursement} />
  </Stack.Navigator>
)