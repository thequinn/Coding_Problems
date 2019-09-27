/*
LeetCode - Problem #242:

Given two strings s and t, write a function to determine if t is an anagram of s.

For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.

Note: You may assume the string contains only lowercase alphabets.
*/

/*
My Solution:
- Sort the two strings -> compare if they are the same
*/


#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <stdbool.h>  //C99 supports bool variables

#define FALSE 0
#define TRUE  !FALSE

int compare(const void * a, const void * b)
{
  return *(char*)a - *(char*)b;
}

bool isAnagram(char* s, char* t) 
{
  if (strlen(s) != strlen(t))   return FALSE;

  // Sort s
  qsort(s, strlen(s), sizeof(char), compare);
  //Wrong: sizeof an element is a char not a ptr
  //qsort(s, strlen(s), sizeof(char *), compare);
  
  // Sort t
  qsort(t, strlen(t), sizeof(char), compare);

  if (strcmp(s, t) == 0)    return TRUE;

  return FALSE;
}

int main()
{
  char s[] = "anagram";
  //char t[] = "nagaram"; // Anagram
  char t[] = "nngaram";   // Not Anagram

  if (isAnagram(s, t))
    printf("They are anagrams.\n");
  else 
    printf("They are Not anagrams\n");

  return 0;
}
