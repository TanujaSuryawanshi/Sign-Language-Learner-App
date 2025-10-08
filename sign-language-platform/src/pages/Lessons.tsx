import React, { useEffect, useState } from 'react';
import LessonCard from '../components/LessonCard';
import { fetchLessons } from '../utils/api';

const Lessons: React.FC = () => {
    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        const getLessons = async () => {
            const lessonData = await fetchLessons();
            setLessons(lessonData);
        };

        getLessons();
    }, []);

    return (
        <div className="lessons-container">
            <h1>Available Lessons</h1>
            <div className="lessons-list">
                {lessons.map((lesson) => (
                    <LessonCard
                        key={lesson.id}
                        title={lesson.title}
                        description={lesson.description}
                        imageUrl={lesson.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default Lessons;