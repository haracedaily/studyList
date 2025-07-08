a = [1,2,3,4,5]
b = [4,5,6,7,8]

# python
# flask # django
# numpy pandas matplotlib
# ml dl

import numpy as np

na = np.array(a)  # Convert list a to a NumPy array
nb = np.array(b)  # Convert list b to a NumPy array

print(a[:3])  # Print the first three elements of list a
print(na[:3])  # Print the first three elements of list b

print(a+b)
print(na+nb)  # Add the two NumPy arrays element-wise

print(na*nb) # 행렬 곱셈이 가능함

#행렬곱셈(Matrix multiplication)
print(np.matmul(na, nb))
print(na @ nb)  # Another way to perform matrix multiplication using the @ operator

print(len(na))
print(na.shape)  # Print the shape of the NumPy array na
print(na.ndim)  # Print the number of dimensions of the NumPy array na