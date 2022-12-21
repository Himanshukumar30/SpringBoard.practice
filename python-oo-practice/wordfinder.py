"""Word Finder: finds random words from a dictionary."""
import random


class WordFinder:
    """ word finder which finds random word from a file"""

    def __init__(self,file_path):

        file_data = open(file_path)
        self.words = self.parse(file_data)

        print(f'{len(self.words)} words read')

    def parse(self, file_data):
        return [word.strip() for word in file_data]

    def random(self):
        return random.choice(self.words)

class SpecialWordFinder(WordFinder):
    """Special word finder which eliminates blank lines and words start with "#"

     >>> swf = SpecialWordFinder("special.txt")
    4 words read

    >>> swf.random() in ['Zythia', 'zythum', 'Zyzomys', 'Zyzzogeton']
    True

    >>> swf.random() in ['Zythia', 'zythum', 'Zyzomys', 'Zyzzogeton']
    True

    >>> swf.random() in ['Zythia', 'zythum', 'Zyzomys', 'Zyzzogeton']
    True
    """

    def parse(self, file_data):

        return [word.strip() for word in file_data
                if word.strip() and not word.startswith("#")]   
                