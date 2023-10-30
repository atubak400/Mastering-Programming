class ListCalculator:
    def __init__(self):
        self.list_of_numbers = self.get_numbers()

    def get_numbers(self):
        input_string = input("Type numbers separated by spaces: ")
        list_of_strings = input_string.split()
        list_of_numbers = [float(num) for num in list_of_strings]
        return list_of_numbers

    def calculate_sum(self):
        return sum(self.list_of_numbers)
    
    def display_sum(self):
        print(f'The sum of {self.list_of_numbers} is {self.calculate_sum()}')

    def find_maximum(self):
        return max(self.list_of_numbers)

    def display_maximum(self):
        maximum = self.find_maximum()
        print(f'The maximum number in the list is {maximum}')

    def calculate_average(self):
        return self.calculate_sum() / len(self.list_of_numbers)
        
    def display_average(self):
        average = self.calculate_average()
        print(f'The average of {self.list_of_numbers} is {average}')

# Create an instance of SumCalculator
uzo = ListCalculator()

# Calculate and display the sum
uzo.display_sum()

# Find and display the maximum
uzo.display_maximum()

# Calculate and display the average
uzo.display_average()
