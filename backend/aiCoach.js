function generateProgram(squat, bench, deadlift) {

  const total = squat + bench + deadlift;

  const program = [];

  for (let week = 1; week <= 4; week++) {

    const multiplier = 0.65 + week * 0.05;

    program.push({
      week,
      squat: Math.round(squat * multiplier),
      bench: Math.round(bench * multiplier),
      deadlift: Math.round(deadlift * multiplier)
    });

  }

  return {
    total,
    program
  };
}

module.exports = generateProgram;
