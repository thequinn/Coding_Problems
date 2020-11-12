/*
Java 2D Array
- https://www.hackerrank.com/challenges/java-2d-array/problem

*/

import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

class HourGlass {

  public static void main(String[] args) {

    // Read in input from stdin, and save to h[][]
    Scanner sc=new Scanner(System.in);
    int[][] h = new int[6][6];
    for (int i = 0; i < 6; ++i) {
      for (int j = 0; j < 6; ++j) {
        h[i][j] = sc.nextInt();
        //System.out.println("h["+i+"]["+j+"]:" + h[i][j]);
      }
    }

    int max = -10000;
    for (int i = 0; i <= 3; ++i){
      for (int j = 0; j <= 3; ++j){
        int sum = h[i][j] + h[i][j+1] + h[i][j+2] + h[i+1][j+1] + h[i+2][j] + h[i+2][j+1] + h[i+2][j+2];
        if (sum > max) max = sum;
      }
    }
    System.out.println(m);
  }
}
