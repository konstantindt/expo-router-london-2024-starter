import React from "react";
import { View } from "react-native";
import { TabList, Tabs, TabSlot, TabTrigger } from "expo-router/build/ui";
import { Image } from "expo-image";
import { TabButton } from "@/components/TabButton";
import classNames from "classnames";

export default function TabLayout() {
  const tabs = (
    <TabList
      className={classNames(
        "py-3 sm:py-6",
        "px-6 sm:px-8",
        "mx-2 sm:mx-0",
        "bottom-safe-offset-2 sm:bottom-safe-offset-0", // keep the tabs above safe ares
        "rounded-full sm:rounded-none", // round the corners
        "absolute right-0 left-0 sm:relative", // position above content
        "shadow-sm", // yum, shadows!
        "sm:justify-end sm:gap-x-4 sm:shadow-sm",
        "bg-white"
      )}
    >
      <TabTrigger name="index" href="/" asChild>
        <TabButton icon="museum">Home</TabButton>
      </TabTrigger>
      <TabTrigger name="exhibits" asChild href="/exhibits" reset="always">
        <TabButton icon="palette">Exhibits</TabButton>
      </TabTrigger>
      <TabTrigger name="visit" asChild href="/visit">
        <TabButton icon="map">Visit</TabButton>
      </TabTrigger>
      <TabTrigger name="profile" asChild href="/profile">
        <TabButton icon="person">Profile</TabButton>
      </TabTrigger>
    </TabList>
  );

  return (
    <View className="flex-1">
      <Tabs className="flex-1 sm:flex-col-reverse">
        <View className="flex-1">
          <TabSlot />
        </View>
        {tabs}
      </Tabs>
      <View
        className={classNames(
          "hidden sm:inline",
          "absolute left-6 top-5 h-10 w-52"
        )}
      >
        <Image
          source={require("@/assets/images/logo.svg")}
          className="w-full h-full"
        />
      </View>
    </View>
  );
}
