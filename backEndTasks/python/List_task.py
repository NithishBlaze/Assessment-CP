foods = ['burger','veg pizza','momos','chinese','garlic bread','french fries','non-veg pizza']
print(type(foods))
print('Food available:',foods)
print('Total food items:',len(foods))
print('Food at present not available:',foods[2:5])
foods.append('kabab')
print('After adding kabab:',foods)