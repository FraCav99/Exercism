const WIN = 'win';
const LOSS = 'loss';
const DRAW = 'draw';

const initializeTeamsStats = splittedOutcomes => {
  const teamsStats = {};
  
  const teamsName = splittedOutcomes
    .map(result => result.slice(0, result.length - 1))
    .reduce((prev, result) => prev.concat(result), []);

  const teamNameSet = new Set([...teamsName]);

  teamNameSet.forEach(teamName => {
    teamsStats[teamName] = {
      draw: 0,
      loss: 0,
      matchesPlayed: 0,
      points: 0,
      win: 0
    };
  });

  return teamsStats;
}

const updateTeamStats = (firstTeam, secondTeam, outcome) => {

  firstTeam.matchesPlayed++;
  secondTeam.matchesPlayed++;

  if (outcome === WIN) {
    firstTeam.points += 3;
    firstTeam.win++;

    secondTeam.loss++;
  }
  if (outcome === LOSS) {
    secondTeam.points += 3;
    secondTeam.win++;

    firstTeam.loss++;
  }
  if (outcome === DRAW) {
    firstTeam.points++;
    firstTeam.draw++;

    secondTeam.points++;
    secondTeam.draw++;
  }
};

const getSortedTeamsStats = teamsStats => {
  return Object.entries(teamsStats)
    .sort(([firstTeamName], [secondTeamName]) => firstTeamName.localeCompare(secondTeamName)) // sort aplhabetically
    .sort(([, firstTeamStats], [, secondTeamStats]) => secondTeamStats.points - firstTeamStats.points); // sort by points
}

const getFormattedTally = teamsStats => {
  let formattedTally = '';

  const sortedStats = getSortedTeamsStats(teamsStats);

  sortedStats.forEach(([team, stats]) => {
    const matchesPlayed = stats.matchesPlayed.toString().padStart(3);
    const draw = stats.draw.toString().padStart(3);
    const win = stats.win.toString().padStart(3);
    const points = stats.points.toString().padStart(3);
    const loss = stats.loss.toString().padStart(3);
    
    formattedTally += `\n${team.padEnd(31)}|${matchesPlayed} |${win} |${draw} |${loss} |${points}`;
  });

  return formattedTally;
}

export const tournamentTally = matchOutcomes => {

  let tally = 'Team                           | MP |  W |  D |  L |  P';
  
  if (matchOutcomes.length > 0) {
    const splittedOutcomes = matchOutcomes.split('\n').map(outcome => outcome.split(';'));
    
    const teamsStats = initializeTeamsStats(splittedOutcomes);

    splittedOutcomes.forEach(matchOutcome => {
      const [firstTeam, secondTeam, outcome] = matchOutcome;
      updateTeamStats(teamsStats[firstTeam], teamsStats[secondTeam], outcome);
    });

    tally += getFormattedTally(teamsStats);
  }

  return tally;
};
