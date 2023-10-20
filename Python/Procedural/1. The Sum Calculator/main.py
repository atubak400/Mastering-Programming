# Function to get numbers from the user.
def get_numbers():
    input_string = input("Type here:")
    list_of_strings = input_string.split()
    list_of_numbers = [float(num) for num in list_of_strings]
    return list_of_numbers


# Function to calculate the sum of a list of numbers
def calculate_sum(list_of_numbers):
    sum_of_numbers = (sum(list_of_numbers))
    return sum_of_numbers


# Function to display the sum to the user
def display_result(list_of_numbers, sum_of_numbers):
    print(f'The sum of {list_of_numbers} is {sum_of_numbers}')

#
def main():
    list_of_numbers = get_numbers()
    sum_of_numbers = calculate_sum(list_of_numbers)
    display_result(list_of_numbers, sum_of_numbers)

main()