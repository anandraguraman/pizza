game.splash("Let's calculate the cost of a pizza.")
let diameter = game.askForNumber("Enter the diameter of the pizza (inches):")
let labourCost = 0.75
let rent = 1
let materialCost = diameter * 0.5
let totalCost = labourCost + (materialCost + rent)
game.splash("The diameter of a pizza dimensions:" + diameter + "inches, cost is $" + totalCost)
