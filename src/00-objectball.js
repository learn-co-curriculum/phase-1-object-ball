const gameObject = () => {
  let obj = {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["black", "white"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 21,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
  return obj;
};

const numPointsScored = (name) => {
  let object = gameObject();

  if (object.home.players[name]) {
    return object.home.players[name].points;
  } else if (object.away.players[name]) {
    return object.away.players[name].points;
  } else {
    return false;
  }

  //   return object.home.players[name]
  //     ? object.home.players[name].points
  //     : object.away.players[name]
  //     ? object.away.players[name].points
  //     : "Not found";
};

const shoeSize = (name) => {
  let object = gameObject();

  if (object.home.players[name]) {
    return object.home.players[name].shoeSize;
  } else if (object.away.players[name]) {
    return object.away.players[name].shoeSize;
  } else {
    return false;
  }
};

const teamColors = (teamName) => {
  let object = gameObject();

  if (object.home.teamName === teamName) {
    return object.home.colors;
  } else if (object.away.teamName === teamName) {
    return object.away.colors;
  } else {
    return false;
  }
};

const teamNames = () => {
  let object = gameObject();

  let teams = [object.home.teamName, object.away.teamName];

  return teams;
};

const playerNumbers = (teamName) => {
  let object = gameObject();

  let jerseyNumbers = [];

  if (object.home.teamName === teamName) {
    for (let player in object.home.players) {
      console.log(player);
      jerseyNumbers.push(object.home.players[player].number);
    }
  } else {
    for (let player in object.away.players) {
      jerseyNumbers.push(object.away.players[player].number);
    }
  }

  return jerseyNumbers;
};

const bigShoeRebounds = () => {
  let object = gameObject();
  let shoeSize = 0;

  let playerWithLargestShoeSize = {};
  let playerName = "";

  for (let player in object.home.players) {
    if (object.home.players[player].shoe > shoeSize) {
      shoeSize = object.home.players[player].shoe;
      playerWithLargestShoeSize = object.home.players[player];
      playerName = player;
    }
    // debugger;
  }

  for (let player in object.away.players) {
    if (object.away.players[player].shoe > shoeSize) {
      shoeSize = object.away.players[player].shoe;
      playerWithLargestShoeSize = object.away.players[player];
      playerName = player;
    }
    // debugger;
  }

  return {
    [playerName]: playerWithLargestShoeSize,
  };
};
