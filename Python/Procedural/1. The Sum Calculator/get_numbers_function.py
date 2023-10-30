# Function to get numbers from the user.
def get_numbers():
    input_string = input("Type here:")
    list_of_strings = input_string.split()
    list_of_numbers = [float(num) for num in list_of_strings]
    return list_of_numbers
