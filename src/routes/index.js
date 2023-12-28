import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../components/CustomDrawer";

import Home from '../pages/Home'
import Publicidade from '../pages/Publicidade'
import Contato from '../pages/Contato'

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawer}
      screenOptions={{
        drawerStyle: {
        },
        drawerActiveBackgroundColor: '#00dae4',
        drawerActiveTintColor: '#fff',
        drawerInactiveBackgroundColor: '#f1f1f1',
        drawerInactiveTintColor: '#000'
      }}
    >
      <Drawer.Screen name="Home" component={Home}
        options={{
          title: 'Inicio',
        }}
      />
      <Drawer.Screen name="Publicidade" component={Publicidade} />
      <Drawer.Screen name="Contato" component={Contato} />
    </Drawer.Navigator>
  )
}