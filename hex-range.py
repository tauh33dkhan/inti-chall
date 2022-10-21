import sys

t1 = int(sys.argv[1], base=16)
t2 = int(sys.argv[2], base=16)

for i in range(t1,t2):
  print(hex(i)[2:])

