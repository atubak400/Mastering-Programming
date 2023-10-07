#Example of OOP

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.hobbies = []

    def introduce(self):
        return "Hi, I'm {}, and I'm {} years old.".format(self.name, self.age)

    def add_hobby(self, hobby):
        self.hobbies.append(hobby)
        return "{} added '{}' as a hobby.".format(self.name, hobby)

    def list_hobbies(self):
        if self.hobbies:
            return "{}'s hobbies: {}".format(self.name, ', '.join(self.hobbies))
        else:
            return "{} doesn't have any hobbies yet.".format(self.name)

# Create instances of the Person class
kingsley = Person("Kingsley", 30)
john = Person("John", 25)

# Add hobbies for Kingsley
kingsley.add_hobby("Reading")
kingsley.add_hobby("Cooking")

# Add hobbies for John
john.add_hobby("Playing guitar")
john.add_hobby("Hiking")

# Introduce and list hobbies for both individuals
print(kingsley.introduce())
print(kingsley.list_hobbies())

print(john.introduce())
print(john.list_hobbies())






#List of numbers input handler

class InputHandler:
    def get_numbers(self):
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

# Call the get_numbers method on the instance
input_handler_1.get_numbers()

"""We define a class InputHandler to encapsulate the functionality of getting and processing numbers.
The get_numbers method within the class performs the same tasks as your original function.
We create an instance of the InputHandler class with input_handler_1 = InputHandler().
We call the get_numbers method on the instance using input_handler_1.get_numbers().


Advantages of the OOP approach:

*Encapsulation: OOP allows you to encapsulate related functionality into a class, making it easier to organize and manage code. 
In this case, the NumberInputHandler class encapsulates the input and processing logic.
*Reusability: You can create instances of the class and reuse the get_numbers method in different parts of your program or 
even in multiple programs if needed.
*Extensibility: OOP makes it easier to extend the functionality of the class by adding new methods or attributes, 
should your requirements change in the future.
*Clearer Structure: For larger and more complex programs, OOP can provide a clearer structure and help maintainability 
by separating concerns into distinct classes."""