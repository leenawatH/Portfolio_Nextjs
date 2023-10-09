interface List {
    startTime: number;
    endTime: number;
    weight: number;
  }

  export const weightedIntervalScheduling = (lists: List[]): { optimalList: List[], maxWeight: number } => {
 
  
    const n = lists.length;
    const dp: number[] = new Array(n + 1).fill(0);
    const p: number[] = new Array(n).fill(0);
  

    for (let j = 0; j < n; j++) {
      p[j] = 0;
      for (let i = j - 1; i >= 0; i--) {
        if (lists[i].endTime <= lists[j].startTime) {
          p[j] = i + 1;
          break;
        }
      }
    }
  

    for (let j = 1; j <= n; j++) {
      dp[j] = Math.max(lists[j - 1].weight + dp[p[j - 1]], dp[j - 1]);
    }
  
   
    const O: List[] = [];
    const reconstructSolution = (j: number) => {
      if (j === 0) {
        return;
      } else if (lists[j - 1].weight + dp[p[j - 1]] > dp[j - 1]) {
        O.push(lists[j - 1]);
        reconstructSolution(p[j - 1]);
      } else {
        reconstructSolution(j - 1);
      }
    };
    
    reconstructSolution(n);

    return {
        optimalList: O.reverse(),
        maxWeight: dp[n]
      };
  };