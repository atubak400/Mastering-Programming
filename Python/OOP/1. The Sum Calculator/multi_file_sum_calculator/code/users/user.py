# users/user.py
class User:
    def __init__(self, username, password, user_level):
        self.username = username
        self.password = password
        self.user_level = user_level

    def authenticate(self, username, password):
        return username == self.username and password == self.password

    def get_user_level(self):
        return self.user_level
