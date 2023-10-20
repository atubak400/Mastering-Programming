# Function to get numbers from the user.
def get_numbers():
    input_string = input("Type here:")
    list_of_strings = input_string.split()
    list_of_numbers = [int(num) for num in list_of_strings]
    return list_of_numbers


# Function to find the maximum number
def calculate_sum(list_of_numbers):
    maximum_number = (max(list_of_numbers))
    return maximum_number


# Function to display the sum to the user
def display_result(list_of_numbers, maximum_number):
    print(f'The maximum number in the list: {list_of_numbers} is {maximum_number}')

#
def main():
    list_of_numbers = get_numbers()
    maximum_number = calculate_sum(list_of_numbers)
    display_result(list_of_numbers, maximum_number)

main()