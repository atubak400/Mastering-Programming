class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def say_hello(self):
        return f"Hello, my name is {self.name}"
    
    def say_nickname(self):
        pass

class Teenager(Person):
    def __init__(self, name, age):
        super().__init__(name, age)
        self.play = "Playing"
        self.nickname = "queen"

    def say_nickname(self):
        return f"Hello, my nickname is {self.nickname}"

    def teen_specific_activity(self):
        return f"{self.name} is a teenager and enjoys {self.play}"

class Adult(Person):
    def __init__(self, name, age):
        super().__init__(name, age)
        self.work = "Working"
        self.nickname = "King"

    def say_nickname(self):
        return f"Hello, my nickname is {self.nickname}"

    def adult_specific_activity(self):
        return f"{self.name} is an adult and is currently {self.work}"


# Creating instances of the Teenager and Adult classes
teen = Teenager("Uzo", 14)
adult = Adult("Mr. Atuba", 42)

# Accessing attributes and methods
print(teen.name)
print(teen.age)
print(teen.say_hello())
print(teen.say_nickname())
print(teen.teen_specific_activity())

print(adult.name)
print(adult.age)
print(adult.say_hello())
print(adult.say_nickname())
print(adult.adult_specific_activity())
