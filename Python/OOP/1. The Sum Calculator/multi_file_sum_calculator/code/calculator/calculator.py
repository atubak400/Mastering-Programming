# calculator/calculator.py
class Calculator:
    def __init__(self):
        self.numbers = []

    def set_numbers(self, numbers):
        self.numbers = numbers

    def calculate_sum(self):
        return sum(self.numbers)

    def find_maximum(self):
        return max(self.numbers)

    def calculate_average(self):
        return sum(self.numbers) / len(self.numbers)
