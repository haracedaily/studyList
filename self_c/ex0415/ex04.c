#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>
int main(){
    char *s1= malloc(sizeof(char)*10);
    printf("문자열을 입력하세요 : ");
    scanf("%s",s1);// 포인터 변수에 배열 또는 메모리 할당 받은 경우 저장 가능
    
    printf("%s\n",s1);// 선언된 배열은 넘어서도 저장은 되지만 덮어씌웠을 가능성이 있다.
    free(s1);
    //동적메모리 해제
    return 0;
}
