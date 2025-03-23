import { View, Text, Pressable, Alert, TouchableOpacity } from 'react-native';
import React, { useContext, useState } from 'react';
import * as Progress from 'react-native-progress';
import { LearningContext } from '@/app/context/LearningProvider';


type CustomItemProps = {
    id: number;
    title: string;
    subject: string;
    description: string;
    progress: number;
    onEdit: () => void;
};

const TopicItems = ({ id, title, subject, description, progress, onEdit }: CustomItemProps) => {
    const { deleteTopic, updateTopic } = useContext(LearningContext)!;

    const handleComplete = () => {
        updateTopic(id, { id, title, subject, description, progress: 1 });
    };

    return (
        <Pressable className='w-full bg-[#D4A401] h-[28vh] rounded-md px-7 pt-5 mb-3' onPress={handleComplete}>
            <View className='flex flex-col justify-between'>
                <View className='h-[18vh]'>
                    <Text className='font-bold text-2xl text-white mb-1 uppercase line-clamp-1'>
                        {title}
                    </Text>
                    <Text className='font-bold text-lg text-gray-100 mb-2'>
                        {subject}
                    </Text>
                    <View className='h-[80px] w-full'>
                        <Text className='font-regular text-base text-gray-200 break-keep line-clamp-3'>
                            {description}
                        </Text>
                    </View>
                </View>

                <View className='flex flex-row justify-between items-center'>
                    <Progress.Bar progress={progress} width={250} color='white' height={15} borderRadius={8} />
                    <Text className='text-white font-semibold text-base'>{progress * 100}%</Text>
                </View>

                <View className='flex flex-row gap-3 items-end justify-end my-2'>
                    <TouchableOpacity onPress={() => deleteTopic(id)}>
                        <Text className="text-white font-bold">Delete</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onEdit}>
                        <Text className="text-white font-bold">Edit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Pressable>
    );
};

export default TopicItems;
