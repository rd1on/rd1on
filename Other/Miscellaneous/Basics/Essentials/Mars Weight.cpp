#include <iostream>

int main() {

    double weight;
    double mars_weight;
    std::cout << "Enter the weight of an item (kg):";
    std::cin >> weight;

    mars_weight = (38.0 / 100) * weight;
    std::cout << "The weight of this item on Mars is: " << mars_weight;

    return 0;
}
