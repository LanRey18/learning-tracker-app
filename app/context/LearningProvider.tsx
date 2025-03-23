import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Topic {
    id: number;
    title: string;
    subject: string;
    description: string;
    progress: number;
}

interface LearningContextType {
    topics: Topic[];
    addTopic: (topic: Topic) => void;
    deleteTopic: (id: number) => void;
    updateTopic: (id: number, updatedTopic: Topic) => void;
}

export const LearningContext = createContext<LearningContextType | undefined>(undefined);

interface LearningProviderProps {
    children: ReactNode;
}

export const LearningProvider: React.FC<LearningProviderProps> = ({ children }) => {
    const [topics, setTopics] = useState<Topic[]>([]);

    const addTopic = (updatedTopics) => {
        setTopics(updatedTopics); // Ensure topics are replaced, not appended
    };

    const deleteTopic = (id: number) => {
        setTopics((prevTopics) => prevTopics.filter((topic) => topic.id !== id));
    };

    const updateTopic = (id: number, updatedTopic: Partial<Topic>) => {
        setTopics((prevTopics) =>
            prevTopics.map((topic) =>
                topic.id === id ? { ...topic, ...updatedTopic } : topic
            )
        );
    };

    return (
        <LearningContext.Provider value={{ topics, addTopic, deleteTopic, updateTopic }}>
            {children}
        </LearningContext.Provider>
    );
};
