def linear_search(lst, target):
    for i in range(len(lst)):
        if lst[i] == target:
            print(f"Target '{target}' was found in position {i + 1}")
            break
        else:
            continue

# Testing the function
my_list = [1, 5, 8, 12, 7, 3, 9, 11]
target_value = 7

linear_search(my_list, target_value)



