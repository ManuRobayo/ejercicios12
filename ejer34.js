#include<stdio.h>

void main()
{
    int number;
    char Ch;

    printf("Ingrese cualquier símbolo\n");
    scanf("%c", &Ch);

    printf("Proporciona el número de asteriscos al lado: \n");

    scanf("%d", &number);

    for (int i = 1; i <= number; i++) {
        for (int j = 1; j <= number; j++) {
            if (i == 1 || i == number || j == 1 || j == number){
                printf("%c", Ch);
            }else{
                printf(" ");
            }
        }

        printf("\n");
    }
}