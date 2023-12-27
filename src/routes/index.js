import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";


import Home from '../pages/Home'
import Publicidade from '../pages/Publicidade'
import Contato from '../pages/Contato'

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Publicidade" component={Publicidade} />
      <Drawer.Screen name="Contato" component={Contato} />
    </Drawer.Navigator>
  )
}