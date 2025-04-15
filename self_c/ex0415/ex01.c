#include <stdio.h>
#include <stdlib.h>
int main(){
    int size;
    printf("동적으로 할당받을 크기 : ");
    scanf("%d",&size);
    int *numPtr = malloc(sizeof(int) * size);
    for (int i=0; i<size; i++){
        numPtr[i] = i;
    }
    
    for(int i=0;i<size;i++){
        printf("%d\n",numPtr[i]);
    }
    free(numPtr);
    
    return 0;
}
