#include <iostream>

int main() {
    double no1;
    char op;
    double no2;
    double ans;
    std::cout << "Enter the first number you would like to calculate: \n";
    std::cin >> no1;
    std::cout << "Enter the arithmetic operation you would like to perform [ + - * / ]: \n";
    std::cin >> op;
    std::cout << "Enter the second number you would like to calculate: \n";
    std::cin >> no2;
    switch (op) {
        case '+':
            ans = no1 + no2;
            break;
        case '-':
            ans = no1 - no2;
            break;
        case '*':
            ans = no1 * no2;
            break;
        case '/':
            if (no2 != 0) {
                ans = no1 / no2;
            } else {
                std::cout << "ERROR: Division by zero is not allowed." << std::endl;
                return 1;
            }
            break;
        default:
            std::cout << "ERROR: Invalid operation." << std::endl;
            return 1;
    }
    std::cout << "Result: \n" << ans << std::endl;
    return 0;
}
