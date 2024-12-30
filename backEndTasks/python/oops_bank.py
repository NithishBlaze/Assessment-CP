class BankAccount :
    def __init__(self):
        self.Name =  ''
        self.Address = ''
        self.accountNumber = 0
        self.balance = 0
    def createAccount (self):
        self.Name = input('Enter the account holder name:')
        self.accountNumber = input('Enter Account Number:')
        self.Address = input('Enter your address:')
        self.balance = input ('Enter Account balance:')
        
    def displayInformation(self):
        print('----------Your Account Information----------')
        print('Name:',self.Name)
        print('AccountNumber:',self.accountNumber)
        print('Address:',self.Address)
        print('Balance:',self.balance)
    def withdraw(self):
        drawn = int(input('Enter amount to withdraw:'))
        self.balance = int(self.balance) - drawn
    def deposit(self):
        depo =  int(input('Enter amount to deposit:'))   
        self.balance = int(self.balance) + depo
def main():
    user1 = BankAccount()
    user1.createAccount()
    user1.displayInformation()
    while(True):
        print('Select an option: 1.Withdraw 2.Deposit')
        option = int(input())
        if(option == 1):
            user1.withdraw()
            print('Balance:',user1.balance)
        elif(option == 2):
            user1.deposit()
            print('Balance:',user1.balance)
        else:
            print('Enter correct option !')
        
if __name__ == '__main__':
    main()