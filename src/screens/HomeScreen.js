import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
    <View className="flex-1 p-5 bg-white">
        <Text className="text-2xl font-bold mb-5">SmartShop</Text>
        <TextInput
        className="border border-gray-300 p-2 mb-2 rounded"
        placeholder="Enter your shopping goal (e.g., pasta night)"
        />
        <Button title="Generate List" onPress={() => navigation.navigate('List')} />
    </View>
    );
}