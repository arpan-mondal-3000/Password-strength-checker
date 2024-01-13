import string


def contents(password):
    letters = string.ascii_lowercase
    nums = "1234567890"
    special_chars = "!@#$%^&*()_+={}[]/><,.;:?`~'"

    content = [0, 0, 0, 0]

    for char in password:
        if char in letters:
            content[0] = 1
        elif char.lower() in letters:
            content[1] = 1
        elif char in nums:
            content[2] = 1
        elif char in special_chars:
            content[3] = 1

    return sum(content)


def is_password_common(password):
    with open("top100k.txt", 'r', errors='replace', encoding='utf-8') as file:
        for line in file:
            data = line.replace('\n', '')
            if password == data:
                return True
        return False


def check_strength(password):
    if not password:
        return None

    is_common = is_password_common(password)
    if is_common == True:
        return "very weak, it is in the most common password list"
    content = contents(password)
    length = len(password)

    if length <= 4:
        return "very weak" if content == 1 else "weak" if content == 2 else "medium"
    elif length <= 8:
        return "weak" if content == 1 else "medium" if content == 2 else "strong"
    else:
        return "medium" if content == 1 else "strong" if content == 2 else "very strong"


password = input("Enter your password: ")
password_strength = check_strength(password)
print(password_strength)
