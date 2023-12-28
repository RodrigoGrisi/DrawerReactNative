import React from "react";
import { View, Text, Image } from "react-native";

import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

export default function CustomDrawer(props) {
  return (
    <DrawerContentScrollView {... props}>
      <View style={{
        marginTop: 30,justifyContent: 'center', width: '100%', height: 85, alignItems: "center"
      }}>
      <Image  style={{
        width: 65, height: 65, 
        justifyContent: 'center', alignItems: 'center'
      }} source={require('../assets/perfil.png')}/>
      <Text style={{color: '#000', fontSize: 17, marginTop: 5, marginBottom: 25}}> Bem vindo : User.name</Text>
      </View>

      <DrawerItemList {...props}/>

    </DrawerContentScrollView>
  )
}