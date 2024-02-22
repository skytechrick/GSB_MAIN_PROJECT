import random

d = ""
for i in "0000000000":
    if random.random() < 0.1:
        d += "1" if i == "0" else "0"
    else:
        d += i
print(d)