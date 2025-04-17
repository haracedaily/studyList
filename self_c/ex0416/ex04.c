#define _CRT_SECURE_NOWARNINGS
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

struct Data{
    char c1;
    int *numPtr;
};

int main(){
    int num1 = 10;
    struct Data d1;
    struct Data *d2 = malloc(sizeof(struct Data));
    
    d1.numPtr=&num1;
    d2->numPtr=&num1;
    
    printf("d1 %d\n",*d1.numPtr);
    printf("d2 %d\n",*d2->numPtr);
    printf("d2 %d\n",*(*d2).numPtr);
    d2->c1 = 'a';
    printf("%c\n",(*d2).c1);
    free(d2);
    return 0;
}
