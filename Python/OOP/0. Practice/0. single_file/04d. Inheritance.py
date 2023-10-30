class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def say_hello(self):
        return f"Hello, my name is {self.name}"
    
    def have_birthday(self):
        self.age = self.age + 1

class Teenager(Person):
    def __init__(self, name, age):
        super().__init__(name, age)
        self.play = "Playing"

    def describe_activity(self):
        return f"{self.name} is a teenager and enjoys {self.play}."

class Adult(Person):
    def __init__(self, name, age):
        super().__init__(name, age)
        self.work = "Working"

    def describe_activity(self):
        return f"{self.name} is an adult and is currently {self.work}."

# Creating instances of the Teenager and Adult classes
teen = Teenager("Uzo", 14)
adult = Adult("Mr. Atuba", 42)

# Accessing attributes and methods
print(teen.name)
print(teen.age)
print(teen.say_hello())
print(teen.describe_activity())

print(adult.name)
print(adult.age)
print(adult.say_hello())
print(adult.describe_activity())


print(teen.age)  # Before teen's birthday
teen.have_birthday()
print(teen.age)  # After Uzo's birthday

print(adult.age)  # Before adult's birthday
adult.have_birthday()
print(adult.age)  # After adult's birthday