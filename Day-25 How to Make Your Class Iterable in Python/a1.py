# Custom Counter class that can be iterated over
class Counter:
    # Initialize the counter with start and end values
    def __init__(self, start=1, end=10):
        self.start = start  # Starting value of the counter
        self.end = end      # Ending value of the counter
    
    # Make the class iterable by returning an iterator object
    def __iter__(self):
        return self.Counter_Iterator(self)
    
    # Nested iterator class that handles the iteration logic
    class Counter_Iterator:
        # Initialize iterator with reference to Counter object
        def __init__(self, counter):
            self.counter = counter           # Reference to parent Counter object
            self.beg = counter.start         # Current position (starts at counter.start)
        
        # Iterator must return itself in __iter__
        def __iter__(self):
            return self
        
        # Return next value in sequence
        def __next__(self):
            # Check if we've reached the end
            if self.beg > self.counter.end:
                raise StopIteration          # Signal end of iteration
            
            current_value = self.beg         # Store current value to return
            self.beg += 1                    # Increment for next iteration
            return current_value             # Return current value

        
# Create a Counter object that counts from 1 to 5
my_counter = Counter(1, 5)        

# First iteration - prints 1 through 5
for i in my_counter:
    print(i)

# Demonstrates that the object can be iterated multiple times
print("\nIterating again:")
for i in my_counter:
    print(i)
