# React + Vite
# CriC-Quiz: A React-based Cricket Quiz App

## Project Overview

CriC-Quiz is an interactive quiz application built with React, focusing on cricket-related questions. This project was developed as a learning exercise to understand key React concepts, particularly state management with useState and data importation from external files.

## Features

- Interactive quiz interface
- Cricket-themed questions
- Score tracking


## Technologies Used

- React
- CSS3
- JavaScript (ES6+)

## Key Learning Points

### useState Hook

This project extensively uses the `useState` hook for state management. Examples include:

- Tracking the current question
- Managing the user's score
- Controlling the quiz flow (start screen, questions, results)

```javascript
const [currentQuestion, setCurrentQuestion] = useState(0);
const [score, setScore] = useState(0);
const [showScore, setShowScore] = useState(false);