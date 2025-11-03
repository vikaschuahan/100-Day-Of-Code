# File where we store all city records
FILE_NAME = 'citis.txt'

def read_all_record():
    # Read all cities from file, skip empty lines
    try:
        with open(FILE_NAME, 'r') as file:
            records = [line.strip() for line in file if line.strip()]
            return records  
    except FileNotFoundError:
        return []  # File doesn't exist yet, return empty list
    except:
        return []

def write_all_record(records):
    # Overwrite file with new list of records
    try:
        with open(FILE_NAME, 'w') as file:
            for record in records:
                file.write(record)
                file.write('\n')  
    except:
        print("ERROR: Write Error")

"""CRUD Operations"""

def create_reocrd(new_record):  
    # Add a new city to the end of the file
    try:
        with open(FILE_NAME, 'a') as file:
            file.write(new_record)
            file.write('\n')
    except:
        print("ERROR: Could not create record")

def display_record():
    # Show all cities with their numbers
    records = read_all_record()
    if not records:
        print("\n===No Record Found===")  
        return records
    print("\n===Current Record===")
    for index, record in enumerate(records):
        print(index + 1, '', record)  # Index starts at 1 for user
    print("======================")
    return records  

def update_record(index, new_value):
    # Change an existing city name
    record = read_all_record()  
    idx = index - 1  # Convert user number (1-based) to list index (0-based)
    if 0 <= idx < len(record):
        record[idx] = new_value
        write_all_record(record)
        print("Record Updated")  
    else:
        print("ERROR: Invalid record number")  

def delete_record(index):
    # Remove a city from the list
    records = read_all_record()  
    idx = index - 1  # Convert to 0-based index
    if 0 <= idx < len(records):  
        deleted_record = records.pop(idx)  
        write_all_record(records)
        print(f"Record Deleted: {deleted_record}")
    else:
        print("Error: Invalid record number")

"""Main Menu"""
def main():
    while True:
        # Show menu options
        print("\n=====File CRUD Menu=====")
        print("1. Create New record (Add New)")
        print("2. Read all record (View All)")
        print("3. Update record (Update Record)")
        print("4. Delete a record (Remove)")
        print("5. Exit")
        print("===========================")
        choice = int(input("Enter Your Choice(1-5): "))
        
        match(choice):
            case 1:
                # Add new city
                new_item = input("Enter City name: ")
                if(new_item):
                    create_reocrd(new_item)  
                else:
                    print("WARNING: record cannot be empty")
                    
            case 2:
                # Show all cities
                display_record()  
                
            case 3:
                # Update existing city
                records = display_record()  
                if records:
                    try:
                        record_num = int(input("Enter Record number to update: "))
                        new_item = input("Enter new city name: ")
                        if(new_item):
                            update_record(record_num, new_item)
                        else:
                            print("WARNING: New City name cannot be empty")
                    except ValueError:
                        print("ERROR: Invalid input. Please Enter A number")
                        
            case 4:
                # Delete a city
                records = display_record()  
                if records:
                    try:
                        record_num = int(input("Enter Record number to Delete: "))
                        delete_record(record_num)
                    except ValueError:
                        print("ERROR: Invalid input. Please Enter A number")
                        
            case 5:
                # Exit program
                print("Thank you, Goodbye!!")
                break
                
            case _:
                # Invalid choice
                print("ERROR: Invalid Choice, retry")

if __name__ == '__main__':
    main()
