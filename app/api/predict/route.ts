export async function POST(req: Request) {
  try {
    const body = await req.json();

    return Response.json({
      careerStage: "Peak",
      peakProbability: "87%",
      injuryRisk: "Low",
      analysis:
          "This player shows strong long-term potential with consistent performance trends."
    });
  } catch (err) {
    return Response.json(
        { error: "Prediction failed" },
        { status: 500 }
    );
  }
}