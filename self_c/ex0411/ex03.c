#include <stdio.h>

int main(){
    int count;
    printf("반복할 횟수를 입력하세요 : ");
    scanf("%d",&count);
    int num=0;
    while(num<count)
    {
        num++;
        printf("반복 중\n");
    }
    return 0;
}
