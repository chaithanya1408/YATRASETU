export function calculateScore(place, preferences) {
  const { interests = [], budget, time, distance, mode } = preferences;

  const matchingInterests = place.interests.filter((interest) =>
    interests.includes(interest)
  );

  // 30 points: interest match
  const interestScore = interests.length
    ? (matchingInterests.length / interests.length) * 30
    : 15;

  // 20 points: budget fit
  const budgetScore = place.budget <= budget ? 20 : 5;

  // 15 points: available time
  const timeScore = place.duration <= time ? 15 : 5;

  // 15 points: distance
  const distanceScore = place.distance <= distance ? 15 : 5;

  // 20 points: discovery mode
  let discoveryScore = 10;
  if (mode === "hidden") {
    discoveryScore = (100 - place.visibility) * 0.20;
  } else if (mode === "famous") {
    discoveryScore = place.visibility * 0.20;
  }

  return Math.min(
    100,
    Math.round(
      interestScore +
      budgetScore +
      timeScore +
      distanceScore +
      discoveryScore
    )
  );
}

export function rankPlaces(places, preferences) {
  return places
    .map((place) => ({
      ...place,
      score: calculateScore(place, preferences)
    }))
    .filter((place) => place.distance <= preferences.distance)
    .sort((a, b) => b.score - a.score);
}