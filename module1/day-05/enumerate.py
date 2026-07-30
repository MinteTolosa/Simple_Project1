suppliers = ["pens", "staple", "frame", "Book" ]

# Enumerate() - function is seful if we need both the item and the item's index in the loop's block

for index, items in enumerate(suppliers):
    print("index:" + " " + str(index) + " "  + items)

# Random modules - has a couple of funtions that accept lists for arguments.
# Random.choice() function - will return a random selected item from the list

import random
pets = ["Dog", "Cat", "Mouse"]
random.choice(pets)
print(random.choice(pets))

# Random shuffle() function - will reorder the items in a list in place.

random.shuffle(pets)
print(random.shuffle(pets))

#Arguments- references are particuary important for understanding how arguments get passed to function.

def eggs(some_parameter):
    some_parameter.append("Hello")
spam = [1,2,3]
eggs(spam)
print(spam)

# The Copy() and Deepcopy() Function
# If we may not want the change in the original List/Dictionary Value, to control this behavior we are using Copy() or deepcopy() functions.
# Copy.copy() - can make a duplicate copy of a mutable value like a list or dictionary not just a copy of a refernce.

import copy
spam = ['A', 'B', 'C']
cheese = copy.copy(spam)
cheese[1] = 42
print(f"List of Spam: {spam}")
print(f"List of Cheese:  {cheese}")