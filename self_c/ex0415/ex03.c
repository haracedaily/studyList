#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main(){
    char s1[10];
    printf("문자열을 입력하세요 : ");
    scanf("%s",s1);
    printf("%s\n",s1);// 선언된 배열은 넘어서도 저장은 되지만 덮어씌웠을 가능성이 있다.
    return 0;
}
