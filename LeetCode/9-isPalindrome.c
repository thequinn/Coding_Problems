#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <stdbool.h> //for bool type

//#define true 1
//#define false 0

bool isPalindrome(int x) {
    char s[32];
    char *ptr = s, *ptr_rev = s;

    if (x<0)    return false;
    
    //convert int to str
    //itoa(x, s, 10); //itoa() is non-standard, so use sprintf() instead
    sprintf(s, "%d", x);

    int len = strlen(s);
    ptr_rev += len - 1; //pt to end of s, and will move backward
   
    //loop till middle of s.  Compare from two ends to middle.
    for (int i=0; i <= len-1; i++) { 
        if (*ptr != *ptr_rev) {
            return false;
        }
        ptr++;    ptr_rev--;
        
    }
    return true;
}

int main()
{
  int num = 1;
  //int num = -121;
  //int num = -2147483648;

  if (isPalindrome(num))  printf("true\n");
  else                    printf("false\n");
}
