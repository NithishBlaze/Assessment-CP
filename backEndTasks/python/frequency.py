def listItems():
    data = []
    print('Enter how many values to store:')
    count = int(input())
    print('Enter data:')
    for i in range(count):
        value = int(input())
        data.append(value)
        
    return data

def frequency(values,target):
    searchItem = target
    count = 0
    data = values
    # print(data)
    # print(searchItem)
    for i in range(len(data)):
        if(data[i]==searchItem):
            count += 1
    return count

def main():
    data=listItems()
    # print(data)
    target = int(input('Enter the value you want to search:'))
    count=frequency(data,target)
    print(f'{target} is repeating {count} times')
    
if __name__ == '__main__':
    main()
    
            