// 841. Keys and Rooms
// Difficulty: Medium

/* Description */
// There are N rooms and you start in room 0.  Each room has a distinct number in 0, 1, 2, ..., N-1, and each room may have some keys to access the next room. 

// Formally, each room i has a list of keys rooms[i], and each key rooms[i][j] is an integer in [0, 1, ..., N-1] where N = rooms.length.  A key rooms[i][j] = v opens the room with number v.

// Initially, all the rooms start locked (except for room 0). 

// You can walk back and forth between rooms freely.

// Return true if and only if you can enter every room.

/* Note */
// 1 <= rooms.length <= 1000
// 0 <= rooms[i].length <= 1000
// The number of keys in all rooms combined is at most 3000.

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
 var canVisitAllRooms = function(rooms) {
  const n = rooms.length;
  const visited = new Array(n).fill(false);
  
  const dfs = (current, visited) => {
      visited[current] = true;
      const keys = rooms[current];
      
      for (let i=0; i<keys.length; i++) {
          if (!visited[keys[i]]) dfs(keys[i], visited);
      }
  }
  dfs(0, visited);
  
  return visited.every(v => v === true);
};