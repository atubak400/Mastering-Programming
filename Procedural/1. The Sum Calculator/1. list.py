# Define a list of numbers
numbers = [1, 2, 3, 4, 5]

# Access and print individual elements
print(numbers[1])
print(numbers[2])
print(numbers[3])
print(numbers[-1])
print(numbers[-2])
print(numbers[-3])

# Modify an element
numbers[-1]=3
print(numbers)

# Add an element to the end
numbers.append(10)
print(numbers)

#remove an element from the list
numbers.pop()
print(numbers)
numbers.remove(1)
print(numbers)

# Get the length of the list
print("print the lenght of the list")
print(len(numbers))

# Iterate through the list
print("iterate throught the list")
list_of_strings = ["1", "2", "3", "4", "5"]
list_of_numbers = [float(x) for x in list_of_strings]
print(list_of_numbers)


