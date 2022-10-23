print("Let's calculate the cost of pizza")

diameter = int(input("Enter diameter: "))
labourCost = 0.75
rent = 1.00
materialCost = 0.50 * diameter

totalCost = labourCost + rent + materialCost

print("Cost of pizza is: ", totalCost)