class NumberInput:
    def get_numbers(self):
        input_string = input("Type numbers separated by spaces: ")
        list_of_strings = input_string.split()
        list_of_numbers = [float(num) for num in list_of_strings]
        return list_of_numbers

class NumberAnalyzer:
    def __init__(self, numbers):
        self.list_of_numbers = numbers

    def calculate_sum(self):
        return sum(self.list_of_numbers)

    def find_maximum(self):
        return max(self.list_of_numbers)

    def calculate_average(self):
        average = sum(self.list_of_numbers)/len(self.list_of_numbers)
        return average

class Display:
    def display_sum(self, numbers, sum_of_numbers):
        print(f'The sum of {numbers} is {sum_of_numbers}')

    def display_maximum(self, maximum):
        if maximum is not None:
            print(f'The maximum number in the list is {maximum}')
        else:
            print('The list is empty')

    def display_average(self, average, list_of_numbers):
        print(f"The average of {list_of_numbers} is {average}")

# User Levels and Permissions
USER_PERMISSIONS = {
    "admin": ["calculate_sum", "find_maximum", "calculate_average"],
    "moderator": ["calculate_sum", "find_maximum"],
    "user": ["calculate_sum"]
}

# Simulate User Authentication
def authenticate_user():
    while True:
        username = input("Enter your username: ").lower()
        password = input("Enter your password: ")
        
        # Check if the user exists and get their level (you can extend this with a database)
        if username == "admin" and password == "adminpass":
            return "admin"
        elif username == "moderator" and password == "moderatorpass":
            return "moderator"
        elif username == "user" and password == "userpass":
            return "user"
        else:
            print("Invalid credentials. Please try again.")

# Create an instance of NumberInput to get numbers from the user
number_input = NumberInput()
numbers = number_input.get_numbers()

# Authenticate the user
user_level = authenticate_user()

# Check user privileges and create an instance of NumberAnalyzer
if user_level in USER_PERMISSIONS:
    analyzer = NumberAnalyzer(numbers)
    display = Display()

    # Calculate and display based on user's privileges
    if "calculate_sum" in USER_PERMISSIONS[user_level]:
        sum_of_numbers = analyzer.calculate_sum()
        display.display_sum(numbers, sum_of_numbers)

    if "find_maximum" in USER_PERMISSIONS[user_level]:
        maximum = analyzer.find_maximum()
        display.display_maximum(maximum)

    if "calculate_average" in USER_PERMISSIONS[user_level]:
        average = analyzer.calculate_average()
        display.display_average(average, numbers)
else:
    print("You don't have permission to use this program.")
