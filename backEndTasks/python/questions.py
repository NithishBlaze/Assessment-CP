def listQuestions():
    data = []
    print('Enter how many questions to store:')
    count = int(input())
    print('Enter questions:')
    for i in range(count):
        value = input()
        data.append(value)
        
    return data

def display(data):
    values = data
    print('Questions asked by user given below :')
    for i in range(len(values)):
        print(f'{i + 1} . {values[i]}')

def main():
    data = listQuestions()
    # print(data)
    display(data)
    
if __name__ == '__main__':
    main()