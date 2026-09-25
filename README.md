# AI StudyMate

AI StudyMate is a React-based study assistant that converts a user's topic or notes into interactive flashcards and quiz questions using a real Large Language Model (LLM).

## Features

* Enter a topic or study notes
* Generate AI-powered flashcards
* Generate multiple-choice quiz questions
* Show/hide flashcard answers
* Interactive quiz with score tracking
* Loading state while AI is generating content
* Error and retry handling
* Handles invalid or incomplete AI responses
* Handles invalid JSON from the AI
* Handles empty AI responses
* Handles failed API requests
* Handles slow AI responses with a timeout
* Prevents older requests from replacing newer results
* Responsive design for mobile devices

## Tech Stack

### Frontend

* React
* Vite
* JavaScript
* CSS

### Backend

* Node.js
* Express.js
* CORS
* dotenv

### AI

* Google Gemini API

## Project Structure

```text
ai-studymate/
├── src/
│   ├── components/
│   │   ├── InputForm.jsx
│   │   ├── Flashcard.jsx
│   │   └── Quiz.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── public/
├── package.json
├── .gitignore
└── README.md
```

## How It Works

The application follows this flow:

```text
User enters topic or notes
        ↓
React Frontend
        ↓
Express Backend
        ↓
Gemini API
        ↓
Structured JSON response
        ↓
Frontend validates the response
        ↓
Flashcards + Quiz
```

The Gemini API key is stored in the backend `.env` file and is not exposed in the React frontend.

## AI Response Format

The AI is instructed to return structured JSON in this format:

```json
{
  "title": "DBMS Normalization",
  "cards": [
    {
      "question": "What is normalization?",
      "answer": "Normalization organizes data to reduce redundancy."
    }
  ],
  "quiz": [
    {
      "question": "What is the main goal of normalization?",
      "options": [
        "Increase redundancy",
        "Reduce redundancy",
        "Delete tables",
        "Increase storage"
      ],
      "answer": 1
    }
  ]
}
```

The frontend validates this response before displaying it.

## Error Handling

The application handles several possible AI and API problems:

* Empty AI response
* Invalid JSON
* Invalid flashcard structure
* Invalid quiz structure
* Empty flashcards or quiz
* Invalid quiz options
* Backend/API errors
* Temporary AI service failures
* Slow requests
* Network failures

If the AI response is invalid, the application displays an error instead of crashing.

## Setup

### 1. Install frontend dependencies

From the project root:

```bash
npm install
```

### 2. Install backend dependencies

Open a terminal and run:

```bash
cd backend
npm install
```

### 3. Create the environment file

Inside the `backend` folder, create a file named:

```text
.env
```

Add your Gemini API key:

```env
GEMINI_API_KEY=your_api_key_here
```

Do not share or commit your API key.

### 4. Start the backend

From the `backend` folder:

```bash
node server.js
```

The backend runs on:

```text
http://localhost:5000
```

### 5. Start the frontend

Open another terminal in the project root:

```bash
npm run dev
```

Open the local URL shown by Vite in your browser.

## AI Usage Note

AI tools were used during development for assistance with implementation ideas, debugging, code explanation, and improving error handling.

The application uses the Gemini API at runtime to generate study material. The AI response is parsed and validated by the frontend before being rendered.

## Known Limitations

* The application requires an active Gemini API connection.
* AI-generated content may occasionally contain incorrect information.
* The application currently generates a fixed number of flashcards and quiz questions.
* The backend is intended for local development and is not configured for production deployment.
* Generated study material is not permanently stored.

## Future Improvements

* Add multiple study modes
* Add difficulty selection
* Allow users to regenerate individual questions
* Save study sessions
* Add progress tracking
* Add streaming AI responses
* Deploy the frontend and backend

## Time Spent

Approximately: **[enter your actual time]**

```

### Important

After pasting it:

1. Save with **Ctrl + S**.
2. Don't create another `README.md`.
3. Don't put your actual Gemini API key anywhere in the README.

Once you've done this, tell me **next**. We'll check your `.gitignore` before uploading the project to GitHub.
```
