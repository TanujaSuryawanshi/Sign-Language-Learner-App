import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <h1>Welcome to Sign Language Learning</h1>
            <p>Learn sign language through interactive lessons and engaging content.</p>
            <Link to="/lessons" className="start-learning-button">Start Learning</Link>
        </div>
    );
};

export default Home;