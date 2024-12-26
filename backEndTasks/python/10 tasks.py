fruits =['mango',['fruitpulp','mixedpulp'],'banana',('apple','grapes')]

print('-'*50)

for i in range(len(fruits)):
    print(fruits[i])
print('-'*50)

print(fruits[0])
print(fruits[1])
print(fruits[1][0])
print(fruits[1][1])
print(fruits[3][0])
print(fruits[3][1])
print('-'*50)

menu = ['Dal','Paneer','Kofta','Tawa Paneer','Rice','Roti']
author_name =('jk rowling','rachel aaron','hans aanrud','verna aardema')

for i in range(len(menu)):
    print(menu[i])
print('-'*50)
for i in range(len(author_name)):
    print(author_name[i])
print('-'*50)

Timing = 'It\'s 7.30am'
for i in range(len(Timing)):
    print(Timing[i],end=" ")
print('\n')
print('-'*50)

name = input('enter employee name : ')
salary =  int(input('enter salary : '))
company_name = input('enter company name :')
print('-'*50)

print(name,salary,company_name)
print('-'*50)

helloWorld = 'print(\'E:\ChangpondNewBatch\Python\')'
print(helloWorld)

print('Hello World')
print('E:\ChangpondNewBatch\Python')
print('-'*50)

ins=[]
size=int(input('enter a size : '))
print('enter the values')
for i in range(size):
    value=float(input())
    ins.append(value)
print('Given float values : ',ins)

print('-'*50)

ins1=[]
size=int(input('enter a size : '))
print('enter values')
for i in range(size):
    val=input()
    ins1.append(val)
print('Given float values : ',ins1)
print('-'*50)

Menu =['Dal','Paneer','Kofta','Tawa Paneer','Rice','Roti']
author_name =('j k rowling','rachel aaron','hans aanrud','verna aardema')
Timing = 'It\'s 7.30am'

i=0
while(i<len(Menu)):
    print(Menu[i])
    i+=1
print('-'*50)

i=0
while(i<len(author_name)):
    print(author_name[i])
    i+=1
print('-'*50)

i=0
while(i<len(Timing)):
    print(Timing[i])
    i+=1
print('-'*50)


val=[]
for i in range(3,16,3):
    val.append(i)
print('display result : ',*val)
print('-'*50)


val1=[]
for i in range(12,1,-3):
    val1.append(i)
print('display result : ',*val1)
print('-'*50)



i=3
while i in range(16):
    print(i)
    i+=3
print('-'*50)


i=12
while i in range(2,15):
    print(i)
    i-=3
print('-'*50)

Menu =['Dal','Paneer','Kofta','Tawa Paneer','Rice','Roti']

Menu[3]='malai paneer'
print(Menu)
print('-'*50)

Menu[4:]='tandoori roti','naan'
print(Menu)
print('-'*50)


fruits = ['mango',['fruitpulp','mixedpulp'],'banana',('apple','grapes')]

for i in fruits:
    print(i)

print('-'*50)


val=input()
count=0
for i in val:
    count+=int(i)

print(count)

print('-'*50)
