export const fetchLessons = async () => {
    try {
        const response = await fetch('/api/lessons');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const lessons = await response.json();
        return lessons;
    } catch (error) {
        console.error('Error fetching lessons:', error);
        throw error;
    }
};

export const updateUserProgress = async (userId, progressData) => {
    try {
        const response = await fetch(`/api/users/${userId}/progress`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(progressData),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const updatedProgress = await response.json();
        return updatedProgress;
    } catch (error) {
        console.error('Error updating user progress:', error);
        throw error;
    }
};