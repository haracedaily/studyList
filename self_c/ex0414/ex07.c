#include <stdio.h>


int main(){
    int numArr[10] = {11,22,33,44,55,66,77,88,99,110};
    // c언어에선 배열 초기화에 {}대괄호를 사용한다.
    // 배열값 초기화에  {0,}를 사용하면 fill(0)에서 사용한 방식으로 0으로 배열값 전체가 초기화된다.
    printf("%d\n",numArr[0]);
    printf("%d\n",numArr[4]);
    printf("%d\n",numArr[9]);
    
    return 0;
}
