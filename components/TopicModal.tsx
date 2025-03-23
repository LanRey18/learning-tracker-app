import React, { useState, useEffect } from 'react';
import { Modal, View, TextInput, Button, Text } from 'react-native';

type TopicModalProps = {
    visible: boolean;
    existingTopic: ExistingTopic; // Can be a Topic or null
    onClose: () => void;
    onSave: (topic: Topic) => void;
};

const TopicModal = ({ visible, onClose, onSave, existingTopic }: TopicModalProps) => {
    const [title, setTitle] = useState('');
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (existingTopic) {
            setTitle(existingTopic.title);
            setSubject(existingTopic.subject);
            setDescription(existingTopic.description);
        } else {
            setTitle('');
            setSubject('');
            setDescription('');
        }
    }, [existingTopic]);

    return (
        <Modal visible={visible} animationType='slide' className='h-full'>
            <View className="bg-[#A37EDD] p-5  h-full">
                <Text className="font-bold text-lg mb-4 text-white">
                    {existingTopic ? "Edit Topic" : "Add New Topic"}
                </Text>
                <Text className='text-white font-medium text-base mt-2'>Topic</Text>
                <TextInput value={title} onChangeText={setTitle} className="border-2 border-white p-2 mt-2 rounded-lg focus:border-[#D4A401] bg-gray-100/25 " />
                <Text className='text-white font-medium text-base mt-2'>Subject</Text>
                <TextInput value={subject} onChangeText={setSubject} className="border-2 border-white p-2 mt-2 rounded-lg focus:border-[#D4A401] bg-gray-100/25 " />
                <Text className='text-white font-medium text-base mt-2'>Description</Text>
                <TextInput value={description} onChangeText={setDescription} className="border-2 border-white p-2 mt-2 rounded-lg focus:border-[#D4A401] bg-gray-100/25 " />

                <View className='mt-5 gap-3'>
                    <Button title={existingTopic ? "Update" : "Save"} onPress={() => {
                        if (title && subject && description) {
                            onSave({ title, subject, description });
                        }
                    }} color='#D4A401' />
                    <Button title="Cancel" onPress={onClose} color='#D4A401' />
                </View>
            </View>
        </Modal>
    );
};

export default TopicModal;
