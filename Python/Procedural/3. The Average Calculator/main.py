# Function to get numbers from the user.
def get_numbers():
    input_string = input("Enter numbers separated by spaces:")
    list_of_strings = input_string.split()
    list_of_numbers = [int(num) for num in list_of_strings]
    return list_of_numbers

# Function to calculate the average of the list of numbers.
def calculate_average(list_of_numbers):
 #   if len(list_of_numbers) == 0:
 #       return 0
    average = sum(list_of_numbers) / len(list_of_numbers)
    return average

# Function to display the average to the user.
def display_result(list_of_numbers, average):
    print(f'The average of {list_of_numbers} is {average}')

def main():
    list_of_numbers = get_numbers()
    average = calculate_average(list_of_numbers)
    display_result(list_of_numbers, average)

main()
