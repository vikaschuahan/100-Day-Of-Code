class Counter:
    def __init__(self, start=1, end=10):
        self.start = start
        self.end = end
    
    def __iter__(self):
        return self.Counter_Iterator(self)
    
    class Counter_Iterator:
        def __init__(self, counter):
            self.counter = counter
            self.beg = counter.start
        
        def __iter__(self):
            return self
        
        def __next__(self):
            if self.beg > self.counter.end:
                raise StopIteration
            current_value = self.beg
            self.beg += 1
            return current_value

        
my_counter = Counter(1, 5)        

for i in my_counter:
    print(i)

print("\nIterating again:")
for i in my_counter:
    print(i)
    