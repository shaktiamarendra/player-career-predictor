
'use client';

import { useState } from 'react';

export default function Home() {
  const [playerData, setPlayerData] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const predictCareer = async () => {
    setLoading(true);

    const response = await fetch('/api/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ playerData })
    });

    const data = await response.json();
    setResult(data);
    setLoading(false);
  };

  return (
    <main style={{ padding: 40, fontFamily: 'Arial' }}>
      <h1>AI Career Trajectory Predictor</h1>

      <textarea
        rows={10}
        cols={80}
        placeholder="Paste player statistics here..."
        value={playerData}
        onChange={(e) => setPlayerData(e.target.value)}
      />

      <br /><br />

      <button onClick={predictCareer}>
        {loading ? 'Predicting...' : 'Predict Career'}
      </button>

      {result && (
        <div style={{ marginTop: 30 }}>
          <h2>Prediction Result</h2>

          <p><strong>Career Stage:</strong> {result.careerStage}</p>
          <p><strong>Peak Probability:</strong> {result.peakProbability}</p>
          <p><strong>Injury Risk:</strong> {result.injuryRisk}</p>

          <h3>AI Scouting Report</h3>
          <p>{result.analysis}</p>
        </div>
      )}
    </main>
  );
}
