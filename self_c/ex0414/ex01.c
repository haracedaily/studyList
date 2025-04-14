#include <stdio.h>

int main(){
    char *charPtr;
    double *doublePtr;
    int *numeric;
    int num1;
    num1 = 4;
    numeric = &num1;
    printf("%p\n",numeric);
    printf("%p\n",&num1);
    printf("%p\n",numeric+1);
    printf("numeric의 크기 = %d Byte\n",sizeof numeric);
    printf("charPtr의 크기 = %d Byte\n",sizeof charPtr);
    printf("doublePtr의 크기 = %d Byte\n",sizeof doublePtr);
    
    return 0;
}
