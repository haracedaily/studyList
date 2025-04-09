#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main(){
    // int num1, num2;
    // num1 = 0;
    // num2=0;
    // printf("num1과 num2 정수 저장 : ");
    // scanf("%d %d", &num1, &num2);
    // printf("\n출력 : %d %d\n",num1,num2);
    
    // float num1,num2;
    // num1=0.0;
    // num2=0.0;
    // printf("num1과 num2 실수 저장 : ");
    // scanf("%f %f", &num1, &num2);
    // printf("\n출력 : %f %e\n",num1,num2);
    
    printf("\n문자를 입력해주세요 : ");
    char c1;
    c1 = getchar();
    printf("출력  : %c\n",c1);
    c1 = getchar();
    printf("출력  : %c\n",c1);
    c1 = getchar();
    printf("출력  : %c\n",c1);
    c1 = getchar();
    printf("출력  : %c\n",c1);
    c1 = getchar();
    printf("출력  : %c\n",c1);
    putchar(c1);
    return 0;
}
