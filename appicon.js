import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleLogin = () => {
    console.log('Button Pressed');
  };

  const PasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  useEffect(() => {
    setIsFormValid(email.length > 0 && password.length > 0);
  }, [email, password]);

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-blue-50">
      <Image className="w-40 h-40" source={require('./assets/dl_logo.png')} />

      <View className="resize-x rounded-md">
        <Text className="font-bold text-4xl mb-2 pt-10 text-center">Login</Text>
      </View>

      <View className="w-5/6 px-2 py-2 my-5 mx-0 border rounded-md focus:outline-none focus:ring-1">
        <TextInput
          className="p-1 text-start justify-start"
          value={email}
          keyboardType="email-address"
          placeholder="Email"
          placeholderTextColor="black"
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View className="w-5/6 px-2 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1">
        <TextInput
          className="p-1 text-start justify-start"
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          secureTextEntry={!isPasswordVisible}
          placeholderTextColor="black"
        />
        <TouchableOpacity
          className="absolute top-3 right-3"
          onPress={PasswordVisibility}
        >
          <Ionicons
            name={isPasswordVisible ? 'eye' : 'eye-off'}
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          className={`flex px-36 mb-20 mt-7 py-1.5 items-center rounded-2xl ${
            isFormValid ? 'bg-blue-500' : 'bg-gray-300'
          }`}
          onPress={handleLogin}
          disabled={!isFormValid}
        >
          <Text className="text-white font-bold">LOGIN</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
