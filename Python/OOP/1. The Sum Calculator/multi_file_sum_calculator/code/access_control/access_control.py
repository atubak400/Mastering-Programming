# access_control/access_control.py
class AccessControl:
    def __init__(self):
        self.user_access = {
            'Student': ['Calculate Sum'],
            'Teacher': ['Calculate Sum', 'Find Maximum'],
            'HeadOfSchool': ['Calculate Sum', 'Find Maximum', 'Calculate Average']
        }

    def check_access(self, user_level, operation):
        allowed_operations = self.user_access.get(user_level, [])
        return operation in allowed_operations

    def grant_access(self, user_level, operation):
        if user_level in self.user_access:
            self.user_access[user_level].append(operation)
        else:
            self.user_access[user_level] = [operation]
