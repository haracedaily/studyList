#include <stdio.h>
#include <limits.h>
#include <float.h>

int main(){
    // unsigned char num1 = 255;
    // unsigned short num2 = 65535;
    // unsigned int num3 = 4294967295;
    // unsigned long num4 = 4294967295;
    // unsigned long long num5 = 18446744073709551615;
    // printf("%u %u %u %lu %llu\n", num1,num2,num3,num4,num5);
    // printf("%X %X %X %lX %llX\n", num1,num2,num3,num4,num5);
    // char num6 = 128;
    // unsigned char num7 = 256;
    // printf("%d %u\n",num6,num7);
    // printf("char : %d, short : %d, int : %d, long: %d, long long: %d\n",
    // sizeof(char),sizeof(short),sizeof(int),sizeof(long),sizeof(long long));
    // char num1 = CHAR_MIN, num11 = CHAR_MAX;
    // short num2 = SHRT_MIN, num22 = SHRT_MAX;
    // int num3 = INT_MIN, num33 = INT_MAX;
    // long num4 = LONG_MIN, num44 = LONG_MAX;
    // long long num5 = LLONG_MIN, num55 = LLONG_MAX;
    // printf("%d %d %d %ld %lld\n", num1,num2,num3,num4,num5);
    // printf("%d %d %d %ld %lld\n",num11,num22,num33,num44,num55);
    // float num1 = 0.1f;
    // float num2 = 3.e5f;
    // double num3 = 3867.21582143;
    // double num4 = -1.3827e-2;
    // printf("%f, %f, %f, %f \n", num1,num2,num3,num4);
    // printf("%e, %e, %e, %e \n", num1,num2,num3,num4);
    // printf("float : %d byte, double : %d byte, long double : %d byte",
    // sizeof(float),
    // sizeof(double),
    // sizeof(long double));
    float num1 = FLT_MIN, num2 = FLT_MAX;
    double num3 = DBL_MIN, num4 = DBL_MAX;
    long double num5 = LDBL_MIN, num6 = LDBL_MAX;
    printf("%.40f %.2f\n", num1,num2);
    printf("%.500f\n %.2f\n", num3,num4);
    printf("%e %e\n", num1,num2);
    printf("%e %e\n", num3,num4);
    printf("%Le %Le\n",num5,num6);
    return 0;
}
