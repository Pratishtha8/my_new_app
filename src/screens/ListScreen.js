import React from 'react';
import { Text, View } from 'react-native';

export default function ListScreen() {
    return (
    <View className="flex-1 p-5 bg-white">
        <Text className="text-2xl font-bold mb-5">Your Shopping List</Text>
        <Text>Items will appear here!</Text>
    </View>
    );
}