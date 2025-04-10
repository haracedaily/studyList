#include <stdio.h>
#include <stdbool.h>

int main(){
    bool b1 = true;
    
    if(b1==true){
        printf("참\n");
    }else
    printf("거짓\n");
    
    if(b1)
    printf("boolean 참\n");
    else
    printf("boolean 거짓\n");
    
    printf("bool의 크기는 %d byte 이다.",sizeof(bool));
    return 0;
}
