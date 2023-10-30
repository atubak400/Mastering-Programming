from my_classes.person import Person

class Adult(Person):
    def __init__(self, name, age):
        super().__init__(name, age)
        self.work = "Working"

    def describe_activity(self):
        return f"{self.name} is an adult and is currently {self.work}."
