def print_upper_words(words):
    """Print the words to uppercase"""

    for word in words:
        print(word.upper())

# print_upper_words(["hello", "hey", "goodbye", "yo", "yes"])


def print_upper_words2(words):
    """ Prints the word if it starts with e or E and change them to uppercase """
    for word in words:
        if word.startswith("e") or word.startswith("E"):
            print(word.upper())


def print_upper_words3(words, must_start_with):
    """ Prints the word if it starts with declared letter and convert them to uppercase """

    for word in words:
        for letter in must_start_with:
            if word.startswith(letter):
                print(word.upper())
                break