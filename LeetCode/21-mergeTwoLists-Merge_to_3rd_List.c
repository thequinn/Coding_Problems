/*
This code merge list1 and list2 into list3.  

The code that splices together list1 and list2, check out ther other file.
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
void addToMergedList(struct ListNode **nodeToAdd, struct ListNode **node3);

struct ListNode *h1, *h2, *t1, *t2;
struct ListNode *l3;

int main()
{
  createList(&h1, &t1); //Pass "addr of ptr"
  printList(h1);
  
  createList(&h2, &t2);
  printList(h2);
  printf("-----------\n");

  l3 = mergeTwoLists(h1, h2);
  printf("Merged List: ");
  printList(l3);
}
 
//Add a node that's the smaller of the 2 compared nodes from l1 and l2 to l3
void addToMergedList(struct ListNode **nodeToAdd, struct ListNode **node3)
{
      struct ListNode *newNode = malloc(sizeof (struct ListNode));
      newNode->val = (*nodeToAdd)->val;
      *nodeToAdd = (*nodeToAdd)->next;
            
      if (l3 == NULL) {
        l3 = newNode;
        *node3 = l3;
      }
      else {
        (*node3)->next = newNode;
        *node3 = (*node3)->next;
      }
}

//Merge l1 and l2 into l3
struct ListNode* mergeTwoLists(struct ListNode* l1, struct ListNode* l2) {
  struct ListNode *node1 = l1, *node2 = l2, *node3;
    
  if (l1==NULL && l2==NULL)   return NULL;
  if (l1 == NULL)   return l2;
  if (l2 == NULL)   return l1;

  while (node1!=NULL || node2!=NULL) {
    if (node1 == NULL) { //if reaching end of l1, add node2 from l2
      addToMergedList(&node2, &node3); 
      continue; //back to top of while
    }
    else if (node2 == NULL) { //if reaching end of l2, add node1 from l1
      addToMergedList(&node1, &node3); 
      continue; //back to top of while
    }
    
    if (node1->val > node2->val) { //add node2 to l3
      addToMergedList(&node2, &node3);
    }
    else if (node1->val < node2->val) { //add node1 to l3      
      addToMergedList(&node1, &node3);
    }
    else { //The two compared nodes are equal, add both of them
      addToMergedList(&node1, &node3); 
      addToMergedList(&node2, &node3); 
    } //End of if-else
  } //End of while 
  
  return l3;
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



