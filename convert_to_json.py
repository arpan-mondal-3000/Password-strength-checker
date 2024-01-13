import json

# For converting it to a dictionary structure
# with open("top100k.txt", 'r', errors='replace', encoding='utf-8') as file:
#     with open("passwords.txt", 'a', errors='replace', encoding='utf-8') as data_file:
#         data_file.write("{")
#         index = 0
#         for line in file:
#             data = line.replace('\n', '')
#             data_file.write(f'"data{index}" : "{data}",\n')
#             index += 1
#         data_file.write("}")
#         data_file.close()
#     file.close()

# For converting it to an array structure
with open("top100k.txt", 'r', errors='replace', encoding='utf-8') as file:
    with open("pass_data.txt", 'a', errors='replace', encoding='utf-8') as data_file:
        data_file.write("[")
        for line in file:
            data = line.replace('\n', '')
            data_file.write(f'"{data}",\n')
        data_file.write("]")
        data_file.close()
    file.close()
