import { View, Text, TouchableOpacity } from 'react-native'
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from "expo-router";

import CustomButton from '@/components/CustomButton';
import { LearningProvider } from './context/LearningProvider';

export default function App() {
  return (
    <LearningProvider>
      <SafeAreaView className='h-full '>
        <View className='w-full items-center justify-center h-full px-4'>
          <Text className='font-semibold text-base mb-2'>
            Welcome to
          </Text>
          <Text className='font-bold text-5xl text-[#A37EDD]'>StudyPal</Text>

          <CustomButton title='Hello' handlePress={() => router.navigate('/Home')} />
        </View>

        <StatusBar style="dark" />
      </SafeAreaView>
    </LearningProvider>
  );
}
