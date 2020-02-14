/*
200. Number of Islands

*/

import java.lang.System.*;
import java.util.*;

public class NumberOfIslands_BFS {

  public int numIslands(char[][] grid) {
    if (grid.length == 0) {
      return 0;
    }

    int m = grid.length, n = grid[0].length;
    boolean[][] visited = new boolean[m][n];

    Queue<int[]> queue = new LinkedList<>();
    int count = 0;

    for (int i=0; i<m; i++) {
      for (int j=0; j<n; j++) {

        if (grid[i][j] == '1' && !visited[i][j]) {
          queue.offer(new int[]{i, j});

          visited[i][j] = true;

          bfs(grid, queue, visited);

          count++;
        }
      }
    }

    return count;
  }


  int[][] dirs = {{0,1}, {1,0}, {0, -1}, {-1, 0}};

  private void bfs(char[][] grid, Queue<int[]> queue, boolean[][] visited) {
    int m = grid.length, n = grid[0].length;

    while (!queue.isEmpty()) {
      int[] curr = queue.poll();

        System.out.print("dir[]:" + dir[0] + ", " + dir[1]);
        int x = curr[0] + dir[0];
        int y = curr[1] + dir[1];

        if (x < 0 || x >= m || y < 0 || y >= n ||
            visited[x][y] || grid[x][y] == '0')
          continue;

        visited[x][y] = true;

        queue.offer(new int[]{x, y});

        int[] tmp2 = queue.poll();
      }
    }
  }

  //----- Testing -----
  public static void main(String args[]) {
    char[][] grid = {
      {'1','1','1','1','0'},
      {'1','1','0','1','0'},
      {'1','1','0','0','0'},
      {'0','0','0','0','0'}
    };

    NumberOfIslands_BFS N = new NumberOfIslands_BFS();

    int count = N.numIslands(grid);
    System.out.println(count);
  }

}



