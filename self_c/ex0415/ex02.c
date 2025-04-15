#include <stdio.h>

int main(){
    char *s1 = "hello";
    
    printf("%s \n",s1);
    printf("%c \n",s1[1]);
    printf("%c \n",s1[3]);
    printf("%c \n",s1[4]);
    //s1[0]='A';//포인터의 리터럴값은 수정할 수 없다.
    
    char s2[] = "Hello!! c";
    s2[0] = 'A';//포인터와 다르게 배열은 대입 가능
    printf("%s\n",s2);
    printf("%c\n",s2[9]);
    printf("s2의 크기 : %d byte\n",sizeof s2);//마지막값 NULL or 0이 들어가야함
    return 0;
}
