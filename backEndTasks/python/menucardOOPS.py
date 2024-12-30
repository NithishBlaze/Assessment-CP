class menu:
    def __init__(self):
        self.menuCard = ['dosa','biriyani','idly']
    
    def display(self):
        for i in range(len(self.menuCard)):
            print(self.menuCard[i])

    def add(self,value):
        self.menuCard.append(value)
        print('Item added successfully')
        self.display()

    def update(self,oldValue,newValue):
        for i in range(len(self.menuCard)):
            if(self.menuCard[i]==oldValue):
                index = self.menuCard.index(oldValue)
                self.menuCard.remove(oldValue)
                self.menuCard.insert(index, newValue)
                self.display()
                print('Item updated successfully')
                return
            
        print('Enter a correct food item !')

    def delete(self,value):
        for i in range(len(self.menuCard)):
            if(self.menuCard[i]==value):
                index = self.menuCard.index(value)
                self.menuCard.pop(index)
                self.display()
                print('Item deleted successfully')
                return
        print('Enter a correct food item !')

def main():
    _obj1 = menu()
    while(True):
        print('-'*50)
        print('Select an option:','\n','1.Display','\n','2.Add','\n','3.Update','\n','4.Delete')
        option = int(input(' '))
        if(option==1):
            _obj1.display()
        elif(option==2):
            value = input('Enter a fooditem to add:')
            _obj1.add(value)
        elif(option==3):
            _obj1.display()
            oldValue = input('Enter a value to update:')
            newValue = input('Enter a value to replace:')
            _obj1.update(oldValue,newValue)
        elif(option==4):
            oldValue = input('Enter a value to delete:')
            _obj1.delete(oldValue)

if __name__ == '__main__':
    main()