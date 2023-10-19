
# Function to get numbers from the user.
def get_numbers():
    input_string = input("Enter numbers separated by spaces: ")
    list_of_strings = input_string.split()
    list_of_numbers = [float(num) for num in list_of_strings]
    return list_of_numbers

# Function to calculate the sum of a list of numbers.
def calculate_sum(list_of_numbers):
    total = sum(list_of_numbers)
    return total

# Function to display the sum to the user.
def display_result(input):
    print("The sum of the numbers is:", input)

# Main function that orchestrates the program flow.
def main():
    list_of_numbers = get_numbers()
    total = calculate_sum(list_of_numbers)
    display_result(total)

main()

