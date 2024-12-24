foods = ['burger','veg pizza','momos','chinese','garlic bread','french fries','non-veg pizza']
foods_not_available = ['momos','chinese','garlic bread']
print(type(foods))
count_foods = foods.count
print('Food available:',foods)
print('Total food items:',count_foods)
print('Food at present not available:',foods_not_available)
foods.append('kabab')
print('After adding kabab:',foods)