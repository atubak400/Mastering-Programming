# main.py (Main application script)
from users.user import User
from calculator.calculator import Calculator
from access_control.access_control import AccessControl


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

