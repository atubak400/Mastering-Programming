# Function to get numbers from the user.
def get_numbers():
    input_string = input("Type here: ")
    list_of_strings = input_string.split()
    list_of_numbers = [float(num) for num in list_of_strings]
    return list_of_numbers

list_of_numbers = get_numbers()

# Function to calculate the sum of any list of numbers.
def calculate_sum(any_list):
    print(sum(any_list))

calculate_sum(list_of_numbers)