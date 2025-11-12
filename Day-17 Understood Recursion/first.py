"""
Write a recursive function to print firt n
natural numbers.

1. Assume that the desired recursive function is
already defined
2. Recursive case 
3. Base Case

1. printN(n)  1 2 3 4 5.... n-1  n
2. printN(n-1) 1 2 3 4 5..... n-1
    print(n)  n
3. n==1       1    

"""
def printN(n):
   if n==1:
       print(1)
   elif(n>1):
       printN(n-1)
       print(n)
       
    
    
    
    
printN(4) 