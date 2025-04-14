#include <stdio.h>

int main(){
    int *numPtr;
    int num1;
    num1 = 10;
    numPtr = &num1;
    printf("%d\n",num1);
    printf("%p\n",numPtr);
    *numPtr = 20;
    
    printf("%d\n",*numPtr);
    printf("%p\n",numPtr);
    printf("%d\n",num1);
    return 0;
}
