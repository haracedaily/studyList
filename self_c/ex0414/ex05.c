#include <stdio.h>
#include <stdlib.h>
#include <string.h>
int main(){
    // memset(포인터,값,크기);
    // 메모리에 값 저장
    //포인터 값 초기화 = NULL;
    long long *numPtr1 = NULL;
    numPtr1 = malloc(sizeof(long long));
    memset(numPtr1,0x77,8);
    printf("0x%llx \n",*numPtr1);
    free(numPtr1);
    return 0;
}
