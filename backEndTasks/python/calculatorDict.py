def add(num1, num2):
    result = num1 + num2
    return result

def sub(num1, num2):
    result = num1 - num2
    return result

def mul(num1, num2):
    result = num1 * num2
    return result

def div(num1, num2):
    result = num1 / num2
    return result

def floorDiv(num1, num2):
    result = num1 // num2
    return result

def expo(num1, num2):
    result = num1 ** num2
    return result
operations = {
    '+': add,
    '-': sub,
    '*': mul,
    '/': div,
    '//': floorDiv,
    '**': expo
}

def main(value, num1, num2):
    option = value
    if '+' == option:
        print('Addition:', add(num1, num2))
    elif '-' == option:
        print('Subtraction:', sub(num1, num2))
    elif '*' == option:
        print('Multiplication:', mul(num1, num2))
    elif '/' == option:
        if num1 >= num2:
            print('Division:', div(num1, num2))
        else:
            print('Enter a proper number for division!')
    elif '//' == option:
        if num1 > num2:
            print('Floor Division:', floorDiv(num1, num2))
        else:
            print('Enter a proper number for division!')
    elif '**' == option:
        print('Exponential:', expo(num1, num2))

if __name__ == '__main__':
    while True:
        num1 = int(input('Enter first number: '))
        num2 = int(input('Enter second number: '))
        option = input('Enter an operand like +, -, *, /, //, ** : ')
        main(option, num1, num2)
        print('-' * 50)
