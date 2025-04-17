#define _CRT_SECURE_NOWARNINGS
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int *ten(){
    int *num1 = malloc(sizeof(int));
    *num1=10;
    return num1;
}

int main(){
    int *numPtr;
    
    numPtr = ten();
    
    printf("%d\n",*numPtr);
    
    free(numPtr);
    return 0;
    
}
