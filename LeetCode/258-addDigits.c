/*
LeetCode - Problem #258: 

Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

For example:

Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.
*/

#include <stdlib.h>
#include <stdio.h>
#include <string.h>

int addDigits(int num) {
    char buf[128];
    int i=0, tmp=0, result=0;
  
  // Base Case
    if (num < 10)   return num;

  // Recursive Case
    sprintf(buf, "%d", num);

    // Add all digits of the buf[]    
    while (buf[i] != '\0'){
    //while (buf[i] != NULL){ //WRONG !!
        tmp = buf[i] - '0';
        result += tmp;
        i++;
    }  
    //printf("result: %d\n", result);
    
    return addDigits(result);
}

int main()
{
  int in, out;

  printf("Enter a number: ");
  scanf("%d", &in);
  //scanf("%d\n", &in); // CANNOT use "\n" !!

  out = addDigits(in);
  printf("out: %d\n", out);
}
