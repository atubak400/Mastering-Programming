class User:
    def __init__(self, username, password, user_level):
        self.username = username
        self.password = password
        self.user_level = user_level

    def authenticate(self, username, password):
        return username == self.username and password == self.password

    def get_user_level(self):
        return self.user_level

class Calculator:
    def __init__(self):
        self.numbers = []

    def set_numbers(self, numbers):
        self.numbers = numbers

    def calculate_sum(self):
        return sum(self.numbers)

    def find_maximum(self):
        return max(self.numbers)

    def calculate_average(self):
        return sum(self.numbers) / len(self.numbers)

class AccessControl:
    def __init__(self):
        self.user_access = {
            'Student': ['Calculate Sum'],
            'Teacher': ['Calculate Sum', 'Find Maximum'],
            'HeadOfSchool': ['Calculate Sum', 'Find Maximum', 'Calculate Average']
        }

    def check_access(self, user_level, operation):
        allowed_operations = self.user_access.get(user_level, [])
        return operation in allowed_operations

    def grant_access(self, user_level, operation):
        if user_level in self.user_access:
            self.user_access[user_level].append(operation)
        else:
            self.user_access[user_level] = [operation]

# Create instances of the classes
user = User("john_doe", "password123", "Student")
calculator = Calculator()
access_control = AccessControl()

# Simulate user interaction (authentication and operations)
input_username = input("Enter your username: ")
input_password = input("Enter your password: ")

if user.authenticate(input_username, input_password):
    user_level = user.get_user_level()
    print(f"Welcome, {input_username} ({user_level}).")

    if access_control.check_access(user_level, "Calculate Sum"):
        input_numbers = input("Enter numbers separated by spaces: ")
        numbers = [float(num) for num in input_numbers.split()]
        calculator.set_numbers(numbers)

        print(f"Sum: {calculator.calculate_sum()}")

    if access_control.check_access(user_level, "Find Maximum"):
        print(f"Maximum: {calculator.find_maximum()}")

    if access_control.check_access(user_level, "Calculate Average"):
        print(f"Average: {calculator.calculate_average()}")
else:
    print("Authentication failed. Please check your username and password.")
