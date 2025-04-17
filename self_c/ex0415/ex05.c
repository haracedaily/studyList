#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <string.h>

int main(){
    char s1[10];
    char s2[10];
    printf("문자열 2개를 입력하세요 : ");
    scanf("%s %s",s1, s2);// 포인터 변수에 배열 또는 메모리 할당 받은 경우 저장 가능
    
    printf("%s\n",s1);// 선언된 배열은 넘어서도 저장은 되지만 덮어씌웠을 가능성이 있다.
    printf("%s\n",s2);    
    printf("%d\n",strlen(s2));//hello : 5
    printf("%d\n",sizeof s2);//배열의 길이 : 10
    return 0;
}
