import React from "react";
import { SafeAreaView, View, StatusBar } from "react-native";
import WelcomeScreen from "./components/WelcomeScreen";
import TestExpoFeat from "./components/TestExpoFeat";
import TestNavigation from "./components/TestNavigation";
import TestBottonNavigation from "./components/TestBottomNavigation";
import { NavigationContainer } from "@react-navigation/native";
import TempApp from "./components/reactnativeelements/TempApp";
import DataVisualization from "./components/reactnativeelements/DataVisualization";

export default function App() {
  return (
    // <NavigationContainer>
    //   <TestBottonNavigation />
    //   </NavigationContainer>
    <DataVisualization />
  );
}
