import { tokenCache } from "@/cache";
import InitialLyout from "@/components/InitialLyout";
import ClerkAndConvexProvider from "@/provider/ClerkAndConvexProvider";
import { ClerkLoaded, ClerkProvider } from "@clerk/clerk-expo";
import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  
  return (
      <ClerkAndConvexProvider>
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
            <InitialLyout />
          </SafeAreaView>
        </SafeAreaProvider>
      </ClerkAndConvexProvider>
  );
}
