import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log("button Pressed")
  };

  return (
    <SafeAreaView
       className="flex-1 items-center justify-center bg-blue-50">
        <Image
          className=" w-40 h-40"
          source={require('./assets/dl_logo.png')}
        />

        <View className="resize-x rounded-md">
          <Text className=" font-bold text-4xl mb-2 pt-10 text-center">Login</Text>
        </View>
  
        <View className="w-5/6 px-2 py-2 my-5 mx-0 border rounded-md focus:outline-none focus:ring-1">
          <TextInput
            className=" p-1 text-start justify-start"
            value={email}
            keyboardType="email-address"
            placeholder="Email"
            placeholderTextColor="black"
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View className="w-5/6 px-2 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1">
                
          <TextInput className=" p-1 text-start justify-start"
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder={'Password'}
            secureTextEntry={true}
            placeholderTextColor="black"
            />
        </View>

        <View>
          <TouchableOpacity className="flex px-36 mb-20 mt-7 py-1.5 items-center bg-gray-300 w-1000 h-8  rounded-2xl " onPress={handleLogin}>
            <Text className=" text-white font-bold">LOGIN</Text>
          </TouchableOpacity>
        </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}