from datetime import date

def get_birth_year():
    birth_year_string = input("Enter your birth year (YYYY):")
    birth_year_number = int(birth_year_string)
    return birth_year_number

def get_current_year():
    current_date = date.today()
    current_year = current_date.year
    return current_year

def calculate_age(current_year, birth_year_number):
    age = current_year - birth_year_number
    return age

def display_age(age):
    print(f"You are {age} years old.")

def main():
    birth_year_number = get_birth_year()
    currnt_year = get_current_year()
    age = calculate_age(currnt_year, birth_year_number)
    display_age(age)

main()
