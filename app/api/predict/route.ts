
import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const prompt = `
    You are an elite sports analyst.

    Predict the career trajectory of this player.

    Player Data:
    ${body.playerData}

    Return JSON with:
    - careerStage
    - peakProbability
    - injuryRisk
    - analysis
    `;

    const completion = await client.chat.completions.create({
      model: 'gpt-4.1-mini',
      messages: [
        {
          role: 'system',
          content: 'You are a sports analytics expert.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      response_format: { type: 'json_object' }
    });

    const result = completion.choices[0].message.content;

    return Response.json(JSON.parse(result || '{}'));
  } catch (err) {
    return Response.json(
      { error: 'Prediction failed' },
      { status: 500 }
    );
  }
}
