import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { images } from "constants/images";
import { icons } from "constants/icons";

const TabIcons = ({focused, icon, title}) => {
    if(focused){
        return(
            <ImageBackground
    className="felx flex-row w-full flex-1 min-w-[112px] min-h-16 mt-3 justify-center items-center rounded-full overflow-hidden"
    source={images.highlight}
  >
    <Image tintColor="#151312" source={icon} className="size-5" />
    <Text className="text-secondary text-base ml-2 font-semibold">{title}</Text>
  </ImageBackground>
        )
    }

    return(
        <View className="size-full justify-center items-center mt-3 rounded-full">
            <Image source={icon} tintColor="#A8B5DB" className="size-5"/>
        </View>
    )
  
};

const _layout = () => {
  return (
    <Tabs 
        screenOptions={{
            tabBarShowLabel:false,
            tabBarItemStyle:{
                width:'100%',
                height:"100%",
                justifyContent:"center",
                alignItems:"center"
            },
            tabBarStyle: {
                backgroundColor:"#0F0D23",
                borderRadius:50,
                marginHorizontal:20,
                marginBottom:20,
                height:52,
                position:"absolute",
                overflow:"hidden",
                borderWidth:1,
                borderColor:"#OF0D23"
              },
        }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcons focused={focused} icon={icons.home} title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{ title: "Search", headerShown: false,
            tabBarIcon: ({ focused }) => (
            <TabIcons focused={focused} icon={icons.search} title="Search" />
          ), }}
      />
      <Tabs.Screen
        name="save"
        options={{ title: "Save", headerShown: false,
            tabBarIcon: ({ focused }) => (
                <TabIcons focused={focused} icon={icons.save} title="Saved" />
              ),
         }}
      />
      <Tabs.Screen
        name="profile"
        options={{ title: "Profile", headerShown: false,
            tabBarIcon: ({ focused }) => (
                <TabIcons focused={focused} icon={icons.person} title="Profile" />
              ),
         }}
      />
    </Tabs>
  );
};

export default _layout;
