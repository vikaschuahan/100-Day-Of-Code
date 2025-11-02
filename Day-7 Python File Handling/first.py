"""
Quick demo of basic file handling:
1) open a file
2) read/write
3) close the file

Modes:
- r  = read (file must exist)
- w  = write (creates or overwrites)
- a  = append (adds to end)
- r+/w+/a+ = read + write
"""
import os

def write_to_file(filename, name):
    # Write fresh content. 'w' will overwrite if the file already exists.
    # 'with' closes the file automatically.
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(name)

def append_to_file(filename, name):
    # Add a newline, then the new text at the end of the file.
    with open(filename, 'a', encoding='utf-8') as f:
        f.write('\n')
        f.write(name)

def read_from_file(filename):
    # Read the whole file and print it. Handle missing file nicely.
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            text = f.read()
            print(text)
    except FileNotFoundError:
        print("File not found:", filename)

def main():
    # Ask the user for a name and write it to file1.txt
    name = input("Enter your name: ")
    write_to_file('file1.txt', name)

    # Try other actions by uncommenting:
    # append_to_file('file1.txt', name)   # add another line
    # read_from_file('file1.txt')         # show file contents
    # os.rename('file1.txt', 'file2.txt') # rename file
    # os.remove('file1.txt')              # delete file (careful!)

if __name__ == "__main__":
    main()

