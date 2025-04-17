#define _CRT_SECURE_NOWARNINGS
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

typedef struct _Person{
    char name[20];
    int age;
    char address[100];
}Person;

int main(){
    Person p1 = {.name="홍길동", .age=25, .address="서울시 용산구 한남동"};
    
    printf("이름 : %s\n",p1.name);
    printf("나이 : %d\n",p1.age);
    printf("주소 : %s\n",p1.address);
    
    Person p2 = {"고길동",30,"서울시 용산구 한남동"};
    printf("이름 : %s\n",p2.name);
    printf("나이 : %d\n",p2.age);
    printf("주소 : %s\n",p2.address);
    
    // typedef로 별칭 달지 않았을 경우 struct _Person의 사이즈
    Person *p3 = malloc(sizeof(Person));
    
    strcpy(p3->name,"차길동");
    p3->age = 30;
    strcpy(p3 -> address,"서울시 강남구 논현동");
    printf("이름 : %s\n",p3->name);
    printf("나이 : %d\n",p3->age);
    printf("주소 : %s\n",p3->address);
    printf("이름 : %s\n",(*p3).name);
    printf("나이 : %d\n",(*p3).age);
    printf("주소 : %s\n",(*p3).address);
    free(p3);
    return 0;
}
