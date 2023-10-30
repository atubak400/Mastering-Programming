from get_numbers_function import get_numbers
from calculate_sum_function import calculate_sum
from display_result_function import display_result


# The main function that ochestrates other functions from other files
def main():
    list_of_numbers = get_numbers()
    sum_of_numbers = calculate_sum(list_of_numbers)
    display_result(list_of_numbers, sum_of_numbers)

main()