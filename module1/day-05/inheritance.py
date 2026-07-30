class account:
    def __init__(self, owner, balance):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
    def statement(self):
        print(f"{self.owner}'s balance: {self.balance}")

class savingsaccount(account):
    def __init__(self, owner, balance, rate):
        super().__init__(owner, balance)
        self.rate = rate
    def interest(self):
        interest = self.balance * self.rate
        self.deposit(interest)
        return interest

s = savingsaccount("Minte", 40000, 0.05)
s.deposit(5000)
s.interest()
print(f"The subclass inheritane the base account So {s.owner}'s balance: {s.balance}")

# when a child needs it own constructor, it can define its own __init__ method. The child class can call 
# the parent class's __init__ method using super() to initialize the inherited attributes.

class currentaccount(account):
    def __init__(self, owner, balance = 0, overdraft_limit = 1000):
        super().__init__(owner, balance)
        self.overdraft_limit = overdraft_limit
#--------- Overriding and Polymorphishm ---------------------#
# Overriding is a child can redefine a method that is already defined in the parent class. 
# The child class can provide its own implementation by using the same name of the method, which will be used instead of the 
# parent class's implementation.

    def statement(self):
        print(f"[current] {self.owner}: balance: {self.balance}, overdraft limit: {self.overdraft_limit}")
