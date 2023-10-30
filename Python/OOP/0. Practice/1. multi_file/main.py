from my_classes.teenager import Teenager
from my_classes.adult import Adult

teen = Teenager("Uzo", 14)
adult = Adult("Mr. Atuba", 42)

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
