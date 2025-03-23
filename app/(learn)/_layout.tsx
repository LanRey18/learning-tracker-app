import { View, Text } from "react-native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

const LearnLayout = () => {
    return (
        <>
            <Stack>
                <Stack.Screen

                    name="Home"
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen

                    name="topic-info"
                    options={{
                        headerShown: true,
                    }}
                />
            </Stack>

            <StatusBar style="light" />
        </>
    );
};

export default LearnLayout;