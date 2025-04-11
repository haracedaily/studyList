#include <stdio.h>

int main(){
    int count;
    printf("반복할 횟수를 입력하세요 : ");
    scanf("%d",&count);
    for(int i=0; i<count;i++)
        printf("Hello,world! %d\n",i);
        printf("프로그램이 종료 되었습니다.\n");
    return 0;
}
