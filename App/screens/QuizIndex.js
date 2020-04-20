import React from "react";
import { ScrollView, StatusBar } from "react-native";

import Baseball from "../data/baseball";
import Football from "../data/football";
import Lebron from "../data/lebron";

import { RowItem } from "../components/RowItem";

export default ({ navigation }) => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <RowItem
      name="Baseball"
      color="#36b1f0"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Baseball",
          questions: Baseball,
          color: "#36b1f0"
        })
      }
    />
    <RowItem
      name="Lebron"
      color="#799496"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Lebron",
          questions: Lebron,
          color: "#799496"
        })
      }
    />
    <RowItem
      name="Football"
      color="#49475B"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Football",
          questions: Football,
          color: "#49475B"
        })
      }
    />
  </ScrollView>
);
