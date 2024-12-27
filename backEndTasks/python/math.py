def listItems():
    data = []
    print('Enter how many values to store:')
    count = int(input())
    print('Enter data:')
    for i in range(count):
        value = int(input())
        data.append(value)
        
    return data

def maximum(data):
    values = data
    maximum = 0
    for i in range(len(values)):
        if(values[i]>maximum):
            maximum = values[i]
    return maximum

def minimum(data):
    values = data
    minimum = values[0]
    for i in range(len(values)):
        if(values[i]<minimum):
            minimum = values[i]
    return minimum

def addition(data):
    values = data
    add = 0
    for i in range(len(values)):
            add = add + values[i] 
    return add

def main():
    data = listItems()
    maxi=maximum(data)
    mini=minimum(data)
    addi=addition(data)
    print('Maximum number:',maxi)
    print('Minimum number:',mini)
    print('Addition:',addi)
    
if __name__ == '__main__':
    main()