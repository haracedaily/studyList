import numpy as np


aa = np.array([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])
print(aa)

aa = aa.reshape(-1,4)
# reshape에서 -1은 자동으로 계산해주는 역할을 합니다.

print(aa)