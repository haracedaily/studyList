#include <stdio.h>
#include <stdbool.h>

int main(){
    int *key;
    int *key2;
    int num = 10;
    key = &num;
    key2 = *key;
    printf("%d\n",key==key2);
}