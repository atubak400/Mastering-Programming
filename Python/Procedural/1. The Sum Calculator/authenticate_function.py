def authenticate():
    username = input("Username: ")
    password = input("Password: ")

    # Define the correct username and password
    correct_username = "uzo"
    correct_password = "akosa"

    if username == correct_username and password == correct_password:
        print("Access granted.")
        return "Access granted"
    else:
        print("Access denied. Please check your username and password.")
        return "Access denied"

