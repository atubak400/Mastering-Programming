import tkinter as tk
from calculate_sum_function import calculate_sum

# Function to calculate the sum when the "Calculate Sum" button is clicked
def calculate_sum_button_click():
    try:
        # Get the numbers from the input field and split them into a list
        numbers = entry_numbers.get().split()
        
        # Convert the input numbers to integers
        numbers = [int(num) for num in numbers]

        # Calculate the sum of the numbers
        sum_of_numbers = calculate_sum(numbers)

        # Update the result label with the sum
        result_label.config(text=f"Sum: {sum_of_numbers}")
    except ValueError:
        result_label.config(text="Invalid input. Please enter valid numbers.")

# Create the main tkinter window
window = tk.Tk()
window.title("Sum Calculator")

# Set the background color
window.configure(bg="lightgray")

# Set the window size and position to center it on the screen
window_width = 400
window_height = 200
screen_width = window.winfo_screenwidth()
screen_height = window.winfo_screenheight()
x = (screen_width / 2) - (window_width / 2)
y = (screen_height / 2) - (window_height / 2)
window.geometry(f'{window_width}x{window_height}+{int(x)}+{int(y)}')

# Create an input label and entry field
input_label = tk.Label(window, text="Enter numbers separated by spaces:")
input_label.pack()

entry_numbers = tk.Entry(window)
entry_numbers.pack()

# Create a "Calculate Sum" button
calculate_button = tk.Button(window, text="Calculate Sum", command=calculate_sum_button_click)
calculate_button.pack()

# Create a label to display the result
result_label = tk.Label(window, text="", bg="lightgray")
result_label.pack()

# Start the tkinter main loop
window.mainloop()
