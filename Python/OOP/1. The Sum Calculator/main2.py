class Get:
    def get_numbers(self):
        input_string = input("Type numbers separated by spaces: ")
        list_of_strings = input_string.split()
        list_of_numbers = [int(num) for num in list_of_strings]
        return list_of_numbers

class Logic:
    def __init__(self, list_of_numbers):
        self.list_of_numbers = list_of_numbers

    def calculate_sum(self):
        return sum(self.list_of_numbers)

    def find_maximum(self):
        return max(self.list_of_numbers)

    def calculate_average(self):
        average = sum(self.list_of_numbers)/len(self.list_of_numbers)
        return average

class Display:
    def __init__(self, list_of_numbers):
        self.list_of_numbers = list_of_numbers

    def display_sum(self, sum_of_numbers):
        print(f'The sum of {self.list_of_numbers} is {sum_of_numbers}')

    def display_maximum(self, maximum_number):
        print(f'The maximum number in {self.list_of_numbers} is {maximum_number}')

    def display_average(self, average):
        print(f"The average of {self.list_of_numbers} is {average}")

# Create an instance of Get to get numbers from the user
get = Get()
list_of_numbers = get.get_numbers()

# Create an instance of Logic to work with the numbers
logic = Logic(list_of_numbers)

# Create an instance of Display to display the results
display = Display(list_of_numbers)

# Calculate and display the sum
sum_of_numbers = logic.calculate_sum()
display.display_sum(sum_of_numbers)

# Calculate and display average
average = logic.calculate_average()
display.display_average(average)

# Find and display the maximum number
maximum_number = logic.find_maximum()
display.display_maximum(maximum_number)
