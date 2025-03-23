import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

type CustomButtonProps = {
  title: string;
  handlePress: () => void;
}

const CustomButton = ({ title, handlePress }: CustomButtonProps) => {
  return (
    <TouchableOpacity className='w-full h-[50px] bg-[#A37EDD] my-6 rounded-2xl items-center justify-center' onPress={handlePress}>
      <Text className='font-bold text-lg text-white'>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default CustomButton