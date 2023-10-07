class InputHandler:
    def convert_input_to_list_of_numbers(self):
        # Ask the user for input and store it as a string
        input_string = input("Enter a list of numbers separated by spaces: ")

        # Split the input string into a list of strings
        list_of_strings = input_string.split()

        # Convert the list of strings into a list of numbers (float data type)
        list_of_numbers = [float(num) for num in list_of_strings]

        # Print the list of numbers
        print(list_of_numbers)

# Create an instance of the InputHandler class
input_handler_1 = InputHandler()

# Call the convert_input_to_list_of_numbers method on the instance
input_handler_1.convert_input_to_list_of_numbers()