import math

fuelCost = 0

with open("input.txt", "r") as input:
    f_lines = input.readlines()

    for module in f_lines:
        fuelCost += math.floor(int(module) / 3) - 2

print(fuelCost)
