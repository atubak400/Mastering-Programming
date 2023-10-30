class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def say_hello(self):
        return f"Hello, my name is {self.name}."

# Creating instances of the Person class
adult = Person("Mr. Atuba", 42)
teen = Person("uzo", 14)

# Accessing attributes and calling methods
print(adult.name)
print(adult.age)
print(teen.name)
print(teen.age)

adult_greeting = adult.say_hello()
teen_greeting = teen.say_hello()

print(adult_greeting)
print(teen_greeting)