#include <stdio.h>
#include <stdlib.h>
int main(){
    //c언어 메모리할당 방법
    //malloc
    //free
    
    //void *malloc(size_t_Size);
    //성공시 메모리주소, 실패하면 null 반환
    //memory allocation이라고 하며, 바이트 단위로 지정
    //포인터 = malloc(크기); => malloc성공 시 물리 주소 반환함으로 포인터에 저장
    //stdlib.h 필요
    //malloc은 동적 메모리 할당의 기능을 한다.
    int num1 = 20;
    int *numPtr1;
    
    numPtr1 = &num1;
    
    int *numPtr2;
    numPtr2 = malloc(sizeof(int));
    
    printf("numPtr1 주소 : %p\n",numPtr1);
    printf("numPtr2 주소 : %p\n",numPtr2);
    
    
    printf("numPtr1 용량 : %d\n",sizeof *numPtr1); //stack 메모리
    printf("numPtr2 용량 : %d\n",sizeof *numPtr2); //heap 메모리
    
    free(numPtr2);//반드시 해제해줘야함! 안할 경우 메모리 계속 사용 => 메모리 누수로 이어짐
    printf("numPtr2 주소 : %p\n",numPtr2);
    printf("numPtr2 용량 : %d\n",sizeof *numPtr2);
    return 0;
}
