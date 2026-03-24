def count_words(sentence):
    count = 0
    word = ""
    
    for char in sentence:
        if char != " ":
            word += char
        else:
            if word != "":
                count += 1
                word = ""
    
    if word != "":
        count += 1
        
    return count

b = "Hello Wo    rld"
print(count_words(b))  