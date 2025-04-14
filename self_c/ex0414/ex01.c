#include <stdio.h>

int main(){
    int *numeric;
    int num1;
    num1 = 4;
    numeric = &num1;
    printf("%p\n",numeric);
    printf("%p\n",&num1);
    printf("%p\n",numeric+1);
    printf("numeric의 크기 = %d Byte\n",sizeof numeric);
    
    return 0;
}
