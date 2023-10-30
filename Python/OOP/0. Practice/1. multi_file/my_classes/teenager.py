from my_classes.person import Person

class Teenager(Person):
    def __init__(self, name, age):
        super().__init__(name, age)
        self.play = "Playing"

    def describe_activity(self):
        return f"{self.name} is a teenager and enjoys {self.play}."
