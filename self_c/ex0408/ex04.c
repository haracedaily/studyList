#include <stdio.h>
#include <float.h>

int main(){
    char c1 = '\r';
    char c2 = '\t';
    char c3 = '\n';
    
    
    printf("%c %d 0x%X\n",c1,c1,c1);
    printf("%c %d 0x%X\n",c2,c2,c2);
    printf("%c %d 0x%X\n",c3,c3,c3);
    return 0;
}
