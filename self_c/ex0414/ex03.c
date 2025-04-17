#include <stdio.h>

int main(){
    void *ptr;
    void *ptr1;
    int num1;
    char char1;
    ptr=&num1;
    ptr1=&char1;
    
    int *numPtr1;//포인터
    int **numPtr2;//이중 포인터
    num1 = 10;
    numPtr1 = &num1;
    numPtr2 = &numPtr1;
    printf("%d\n",**numPtr2); //이중 역참조
    printf("%p\n",*numPtr2); // 포인트1의 역참조
    printf("%p\n",numPtr1); // 포인트1의 값
    return 0;
}
