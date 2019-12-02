import math, sys

fuelCost = 0

def getCost(m):
    if (math.floor(int(m) / 3) - 2) > 0:
        return getCost(math.floor(int(m) / 3) - 2) + (math.floor(int(m) / 3) - 2)
    else:
        return 0

with open("input.txt", "r") as input:
    f_lines = input.readlines()

    for module in f_lines:
        fuelCost += getCost(int(module))

print(fuelCost)
