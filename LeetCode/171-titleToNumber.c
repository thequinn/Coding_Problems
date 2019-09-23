#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>

int titleToNumber(char* s) {
  int digit;
  int sum=0; //HAS TO INITIALIZE sum=0 to avoid wrong init value in //#####
  int len = strlen(s);

  char *ptr = s;
  ptr = ptr + len - 1; //pt to last char of s 
 
  //count: travel s backwrd, ie. index: 3 -> 2 -> 1
  //exp: combine count to calculate backward like binary and hex
  for (int count=len-1, exp=0; count>=0; count--, exp++){
    digit = *ptr - 'A' + 1; //convert char to decimal number
    sum += digit * pow(26, exp);     //#####
    
    ptr--;
  }

  return sum;
}

int main()
{
  char s[32] = "AB";

  printf("%d\n", titleToNumber(s));
}
