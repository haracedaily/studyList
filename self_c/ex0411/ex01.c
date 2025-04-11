#include <stdio.h>

int main(){
    for(int i=0; i<10;i++)
        printf("Hello,world! %d\n",i);
        printf("for \n");
        
        int num1=1;
        switch(num1){
            case 1:
            printf("1임\n");
            //break;
            case 2:
            printf("2 또는 1임\n");
            break;
            default:
            printf("기본값임");
            break;
        }
}
