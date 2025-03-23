import { View, Text, FlatList } from 'react-native';
import React, { useContext, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import TopicItems from '@/components/TopicItems';
import CustomButton from '@/components/CustomButton';
import { LearningContext } from "@/app/context/LearningProvider";
import TopicModal from "@/components/TopicModal";

const Home = () => {
    const { topics, addTopic } = useContext(LearningContext)!;
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedTopic, setSelectedTopic] = useState(null);

    return (
        <SafeAreaView>
            <View className='bg-[#A37EDD] h-[25vh] rounded-b-[30px] px-7 items-baseline justify-end'>
                <Text className='font-medium text-xl text-white'>
                    Hello,
                </Text>
                <Text className='font-bold text-4xl text-white mb-8'>Graham Russell</Text>
            </View>

            <View className='mx-3'>
                <CustomButton title='Add New Learning' handlePress={() => {
                    setSelectedTopic(null);
                    setModalVisible(true);
                }} />
            </View>

            <View className='mx-3'>
                <View className='mb-3'>
                    <Text className='font-bold text-lg'>Your Learning</Text>
                </View>

                <FlatList
                    data={topics}
                    renderItem={({ item }) => (
                        <TopicItems
                            {...item}
                            onEdit={() => {
                                setSelectedTopic(item);
                                setModalVisible(true);
                            }}
                        />
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />

                {modalVisible && (
                    <TopicModal
                        visible={modalVisible}
                        onClose={() => setModalVisible(false)}
                        onSave={(newTopic) => {
                            if (selectedTopic) {
                                // Update existing topic by modifying its properties
                                const updatedTopics = topics.map((topic) =>
                                    topic.id === selectedTopic.id ? { ...topic, ...newTopic } : topic
                                );
                        
                                addTopic(updatedTopics); // Update the state correctly
                            } else {
                                // Adding a new topic
                                addTopic([
                                    ...topics,
                                    {
                                        ...newTopic,
                                        id: topics.length + 1, // Ensure unique ID
                                        progress: 0,
                                    }
                                ]);
                            }
                            setModalVisible(false);
                        }}
                        existingTopic={selectedTopic}
                    />
                )}
            </View>
        </SafeAreaView>
    );
};

export default Home;
