# Function to get numbers from the user.
def get_input():
    input_strings = input("Enter numbers seperated by spaces here:")
    list_of_strings = input_strings.split()
    list_of_numbers = [int(num) for num in list_of_strings]
    return list_of_numbers

# Function to calculate the average of any list of numbers.
def calculate_average(list_of_numbers):
    average = sum(list_of_numbers)/len(list_of_numbers)
    return average

# Function to display the sum to the user.
def display_average(average, list_of_numbers):
    print(f"The average of {list_of_numbers} is {average}")

# Main function that orchestrates the program flow.
def main():
    list_of_numbers = get_input()
    average = calculate_average(list_of_numbers)
    display_average(average, list_of_numbers)
    
main()
