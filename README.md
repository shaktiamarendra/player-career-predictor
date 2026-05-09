
# AI Player Career Trajectory Predictor

A Next.js + OpenAI powered app that predicts the career trajectory of a sports player using:
- Historical player statistics
- Injury history
- Team performance
- Age curves
- LLM reasoning

## Features
- Upload player data
- Predict:
  - Peak years
  - Decline phase
  - Breakout probability
  - Injury risk
  - Future valuation
- AI-generated scouting report
- Interactive charts

## Tech Stack
- Next.js 15
- TypeScript
- Tailwind CSS
- OpenAI API
- Recharts

## Setup

```bash
npm install
```

Create `.env.local`

```env
OPENAI_API_KEY=your_key_here
```

Run locally:

```bash
npm run dev
```

## Architecture

Frontend:
- Player input form
- Dashboard
- Charts

Backend:
- API route for predictions
- Prompt engineering layer
- LLM response parser

## Example Use Cases
- Cricket analytics
- Football scouting
- Fantasy sports
- Youth academy projections
