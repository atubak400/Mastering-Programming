class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

# Creating instances of the Person class
adult = Person("Mr. Atuba", 42)
teen = Person("uzo", 14)

# Accessing attributes and calling methods
print(adult.name)
print(adult.age)
print(teen.name)
print(teen.age)













'''
CLASS
A class in Python is a blueprint or template for creating objects. 
It defines a structure that specifies what attributes (data) and 
methods (functions) an object of that class will have. In your code, 
the Person class defines a structure for creating Person objects with 
name and age attributes, and you've created instances of this class to 
represent individuals with specific attributes.

In Python, think of a class as a recipe or set of instructions for making something. 
When you use this recipe, you can create specific things, like a person with a name and age. 
These specific things are like the dishes you make using the recipe, and they have their own unique details.

INIT METHOD
The __init__ method in Python is a special method, also known as the constructor, 
used to initialize the attributes and state of an object when it is created. 
It is automatically called when an instance of a class is created and allows you 
to pass initial values for attributes, setting up the object's initial state.

SELF
In Python, self is like a special word that refers to the object you're working with. 
When you create a class and use it to make objects, self helps you interact with the 
data and actions specific to each of those objects. It's a way to keep things organized 
and separate for each object you create from a class.

INSTANCE
An instance is like a copy of something you've defined. 
For example, if you have a blueprint for a house, an instance is an actual, 
specific house built from that blueprint. Each house is a different instance, 
and they can have their own unique features and do things just like the blueprint describes.
'''

