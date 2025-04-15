#include <stdio.h>

int main(){
    char *s1 = "hello";
    
    printf("%s \n",s1);
    printf("%c \n",s1[1]);
    printf("%c \n",s1[3]);
    printf("%c \n",s1[4]);
    s1[0]='A';//리터럴값은 수정할 수 없다.
    return 0;
}
