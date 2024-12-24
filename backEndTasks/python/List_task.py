foods = ['burger','veg pizza','momos','chinese','garlic bread','french fries','non-veg pizza']
print(type(foods))
count_foods = foods.count
print('Food available:',foods)
print('Total food items:',count_foods)
print('Food at present not available:',foods[2:5])
foods.append('kabab')
print('After adding kabab:',foods)