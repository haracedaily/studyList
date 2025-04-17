#include <stdio.h>
#include <string.h>

int main(){
    printf("%d\n",strcmp("aac","aaaa"));//1
    printf("%d\n",strcmp("aaa","aaaa"));//-1
    printf("%d\n",strcmp("aac","aaa"));//1
    printf("%d\n",strcmp("aab","aac"));//-1
    printf("%d\n",strcmp("aaa","aaa"));//0
    
    return 0;
}
