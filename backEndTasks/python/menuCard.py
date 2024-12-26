menuCard = ['dosa','idly','biriyani']

def display():
    for i in range(len(menuCard)):
        print(menuCard[i])

def add(value):
    menuCard.append(value)
    print('Item added successfully')
    display()

def update(oldValue,newValue):
    for i in range(len(menuCard)):
        if(menuCard[i]==oldValue):
            index = menuCard.index(oldValue)
            menuCard.remove(oldValue)
            menuCard.insert(index, newValue)
            display()
            print('Item updated successfully')
            return
        
    print('Enter a correct food item !')

def delete(value):
    for i in range(len(menuCard)):
        if(menuCard[i]==value):
            index = menuCard.index(value)
            menuCard.pop(index)
            display()
            print('Item deleted successfully')
            return
    print('Enter a correct food item !')       

def main():
    while(True):
        print('-'*50)
        print('Select an option:','\n','1.Display','\n','2.Add','\n','3.Update','\n','4.Delete')
        option = int(input())
        if(option==1):
            display()
        elif(option==2):
            value = input('Enter a fooditem to add:')
            add(value)
        elif(option==3):
            display()
            oldValue = input('Enter a value to update:')
            newValue = input('Enter a value to replace:')
            update(oldValue,newValue)
        elif(option==4):
            oldValue = input('Enter a value to delete:')
            delete(oldValue)
        

if __name__ == '__main__':
    main()