l1=[20,40,50,10,30,60,88,70]
it=iter(l1)

while True:
    try:
        x=next(it)
        print(x)
    except StopIteration:
        break
print("Yeh Line Print Nahi hogi")    