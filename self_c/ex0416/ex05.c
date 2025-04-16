#define _CRT_SECURE_NOWARNINGS
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

struct Person{
    int age;
    int numPtr;
};

int main(){
    struct Person p1;
    struct Person *p2;
    
    p2=&p1;
    
    p2->age = 10;
    
    printf("p1 %d\n",p1.age);
    printf("p2 %d\n",p2->age);
    
    return 0;
    
}
