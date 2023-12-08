'''
1. Write a Python program to display all the numbers from 1 to 10. Each number should be printed on a new line.
'''
# PSEUDOCODE
# Loop through numbers 1 to 10
# print each number you loop through

for i in range(1, 11):
    print(i)


"""
============================================================
"""

"""
2. Write a Python program that prints the squares of numbers from 1 to 10.
"""

# PSEUDOCODE
# Loop through numbers 1 to 10
    # Calculate the square of each number passed through
    # Print the squared value

for i in range(1, 11):
    squared = i ** 2
    print(f"The square of {i} is {squared}")


"""
============================================================
"""

"""
3. Write a Python program that prints all the even numbers between 1 and 20
"""

# PSEUDOCODE
# Loop throught numbers 1 to 20
    # Check if each number is even
        # Print even numbers

for number in range(1, 20):
    if number % 2 == 0:
        print(f"{number} is an even number")


"""
============================================================
"""


"""
4. Write a Python program that prints all the odd numbers between 1 and 20
"""

# PSEUDOCODE
# Loop through numbers 1 to 20
    # Check if each number is odd
        # print odd numbers

for number in range(1, 20):
    if number % 2 == 1:
        print(f"{number} is an odd number")


"""
============================================================
"""


"""
5. Write a Python program to count the length of a given string without using built-in functions like len().
"""

# PSEUDOCODE
# create a my_name variable to store name
# create a counter variable to track you character count
# Loop through numbers my_name variable
    # increment the counter variable by 1 for each character you loop over
# After loop ends, print counter as length of my_name

my_name = "Uzoamaka Onyeberibe Nene"
counter = 0
for char in my_name:
    counter += 1

print(f"Length of {my_name} is {counter}")


"""
============================================================
"""


"""
6. Write a Python program to count the length of a given string without counting the spaces seperating the words
"""


# PSEUDOCODE
# create a my_name variable to store name
# create a counter variable to track you character count
# Loop through the characters of my_name variable
    # If character is not " ", 
        # increment the counter variable by 1 
# After loop ends, print counter as length of my_name


my_name2 = "Uzoamaka Onyeberibe Nene"
name_length2 = 0
for char in my_name2:
    if char != " ":
        name_length2 += 1

print(f"Length of {my_name2} is {name_length2}")


"""
============================================================
"""


"""
7. Write a Python program to create a list of the first 10 even numbers and then print the list
"""

# PSEUDOCODE
# Create an empty list to store even numbers
# Loop to find the first 10 even numbers
    # Check if the current number you're looping through is even
        # Add the even number to the list
# Print the reversed list

even_numbers = []
for i in range(1, 21):
    if i % 2 == 0:
        even_numbers.append(i)
print(even_numbers)


"""
8. Write a Python program to create a list of the first 10 even numbers and then print the list in reverse order
"""

# PSEUDOCODE
# Create an empty list to store even numbers
# Loop to find the first 10 even numbers
    # Check if the current number you're looping through is even
        # Add the even number to the list
# Reverse the list of even numbers
# Print the reversed list


even_numbers2 = []
for i in range(1, 21):
    if i % 2 == 0:
        even_numbers2.append(i)

even_numbers2.reverse()
print(even_numbers2)

"""
============================================================
"""
