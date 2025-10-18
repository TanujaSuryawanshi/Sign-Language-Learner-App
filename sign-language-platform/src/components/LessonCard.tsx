import React from 'react';

interface LessonCardProps {
    title: string;
    description: string;
    imageUrl: string;
}

const LessonCard: React.FC<LessonCardProps> = ({ title, description, imageUrl }) => {
    return (
        <div className="lesson-card">
            <img src={imageUrl} alt={title} className="lesson-thumbnail" />
            <h3 className="lesson-title">{title}</h3>
            <p className="lesson-description">{description}</p>
        </div>
    );
};

export default LessonCard;