/*
This code splices list1 and list2 together, and assign *head to pt to the first node.  

Test case:
- list1: 3 6 12 16
- list2: 0 1 4 12 

Output:
- 0 1 3 4 6 12 12 16
*/

#include <stdlib.h>
#include <stdio.h>

struct ListNode {
    int val;
    struct ListNode *next;
};

void printList(struct ListNode *head);
void createList(struct ListNode **head, struct ListNode **tail);
void addToEnd(int val, struct ListNode **headRef, struct ListNode **tailRef);
struct ListNode* mergeTwoLists(struct ListNode* l1, struct ListNode* l2);

struct ListNode *h1, *h2, *t1, *t2;

int main()
{
  createList(&h1, &t1); //Pass "addr of ptr"
  printList(h1);
  
  createList(&h2, &t2);
  printList(h2);

  printf("\nMerged List: ");
  printList(mergeTwoLists(h1, h2));
}
 
//Merge l1 and l2 together, and assign head to pt to the first node
struct ListNode* mergeTwoLists(struct ListNode* l1, struct ListNode* l2) {
  struct ListNode *p1 = l1, *p2 = l2;
  struct ListNode *p1_prev = p1, *p2_prev = p2;
  struct ListNode *head = NULL;
  int on;
    
  if (l1==NULL && l2==NULL)   return NULL;
  if (l1 == NULL)   return l2;
  if (l2 == NULL)   return l1;

 while (p1!=NULL || p2!=NULL) {

  while (p1->val > p2->val) { //add smaller node, p2
    if (head == NULL) {  //set head ptr to 1st merged node
      head = l2;
    }

    if (p2->next != NULL) {
      p2_prev = p2;
      p2 = p2->next;
    }
    else {
      p2->next = p1;
      return head;
    }
    
    on=1;
  }

  if (on == 1) { //link smaller node, p2
    p2_prev->next = p1;
    on = 0;
  }

  //--------------------------

  while (p1->val <= p2->val) { //add smaller node, p1
    if (head == NULL) {  //set head ptr to 1st merged node
      head = l1;
    }

    if (p1->next != NULL) {
      p1_prev = p1;
      p1 = p1->next;
    }
    else {
      p1->next = p2;
      return head;
    }
    
    on=1;
  }

  if (on == 1) { //link smaller node, p1
    p1_prev->next = p2;
    on = 0;
  }

 } //end of outer while
  
  return head;
}

//-------------------------------------------------------------------
//This part of code creates and print out 2 lists

//See why pass **headRef in My_Tutorial/C/Mod_Caller_Ptr_in_Callee 
void addToEnd(int val, struct ListNode **headRef, struct ListNode **tailRef)
{
  struct ListNode *newNode = malloc(sizeof(struct ListNode));
  newNode->val = val;

  //headRef: ptr to "addr of headRef"
  //*headRef: deref headRef to get "addr of headRef"
  if (*headRef==NULL && *tailRef==NULL){
    *headRef = newNode;
    *tailRef = newNode;
  }
  else {
    (*tailRef)->next = newNode;
    newNode->next = NULL; //Why does compiler not initialize it ????????
    *tailRef = newNode;
  }
}

//See why pass **headRef in My_Tutorial/C/Mod_Caller_Ptr_in_Callee 
void createList(struct ListNode **head, struct ListNode **tail)
{
  int num;

  printf("Enter data to create a list. (Enter -999 to end)\n");
  scanf("%d", &num);

  while (num != -999){ 
    addToEnd(num, head, tail);
    scanf("%d", &num);
  }
}

void printList(struct ListNode *head)
{
  struct ListNode *curr= head;

  while (curr != NULL) {
    printf("%d ", curr->val);    
    curr = curr->next;
  }
  printf("\n");
}



