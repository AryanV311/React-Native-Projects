import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import imagePath from "@/src/constant/imagePath";
import { router } from "expo-router";

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);

  let navigate_to = () => {
    router.push("/(auth)/term_agree")
  }

  let timeoutFunction = () => {
    setIsLoading(false)
    // setTimeout(navigate_to, 3000)
  }

  useEffect(() => {
    let timeout = setTimeout(timeoutFunction, 2000)

    return () => clearTimeout(timeout);
  },[])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.body}>
        <Image
          source={imagePath.logo}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.logo_text}>Whatshapp</Text>
      </View>
      <View style={styles.footer}>
        {isLoading ? (
          <>
            <ActivityIndicator size={moderateScale(40)} color={"#20ab45"}/>
            <Text style={styles.loadt_text}>Loading...</Text>
          </>
        ) : (
          <>
            <Text style={styles.from_text}>From</Text>
            <Image source={imagePath.meta} style={styles.meta} />
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: verticalScale(70),
  },
  header: {},
  body: {
    alignItems: "center",
    gap: verticalScale(10),
  },
  footer: {
    height: moderateScale(80),
    alignItems: "center",
    justifyContent:"flex-end",
  },
  logo: {
    height: 80,
    width: 80,
  },
  logo_text: {
    fontSize: scale(24),
    fontWeight: "700",
  },
  from_text: {
    fontSize: scale(16),
  },
  meta: {
    height: moderateScale(35),
    width: moderateScale(35),
    gap: verticalScale(10),
  },
  load:{
    width:moderateScale(24),
    height:moderateScale(24)
  },
  loadt_text:{
    fontSize:moderateScale(24),
    color:"#09b537",
    fontWeight:'700',
    marginLeft:19,
    marginTop:verticalScale(2)
  }
});

export default Auth;
