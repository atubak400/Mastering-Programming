# Function to get user's name
def get_name():
    user_name = input("Enter your name: ")
    user_name = user_name.lower
    return user_name

# Function to extract vowels from user's name
def extract_vowels(name):
    vowels = [char for char in name if char in 'aeiou']
    return vowels

# Function to display extracted vowels from user's name
def display_result(vowels):
    if vowels:
        print("Vowels in the name:", ''.join(vowels))
    else:
        print("No vowels found in the name.")

# Main function that orchestrates the program flow
def main():
    user_name = get_name()
    extracted_vowels = extract_vowels(user_name)
    display_result(extracted_vowels)

if __name__ == "__main__":
    main()
