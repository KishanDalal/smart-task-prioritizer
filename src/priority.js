function calculatePriority(urgency, importance, estimatedEffort) {
  estimatedEffort = estimatedEffort <= 0 ? 1 : estimatedEffort;
  const E = 1 + 4 / estimatedEffort;

  return 0.45 * urgency + 0.35 * importance + 0.2 * E;
}

export { calculatePriority };
