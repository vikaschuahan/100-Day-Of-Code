"""
This program demonstrates Python soft keywords (match, case, type).
It uses structural pattern matching introduced in Python 3.10+
"""

# Import keyword module to explore keywords
import keyword as kw

# Print all hard keywords (52 total)
# kw.kwlist  # Output: [...list of 52 keywords...]

# Print all soft keywords
# kw.softkwlist  # Output: ['case', 'match', 'type', '_']

# Define a function that returns a string
def f1():
    return "hello"  # Changed from "3+4" to match the case below

# Call the function and store result
action = f1()

# Use match statement (Python 3.10+) for pattern matching
match action:
    case "hello":
        print("Hello Learner")  # Fixed typo: "heelo" → "Hello"
    case 10:
        print("My Lucky Number is 10")
    case 3+4j:
        print("This is a complex number")  # Fixed typo: "complax" → "complex"
    case _:  # Default case (underscore matches anything)
        print("Default Trap")

# Program complete: demonstrated soft keywords and match statement