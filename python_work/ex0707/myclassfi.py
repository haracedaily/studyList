# AI > 머신러닝 > 딥러닝
# 정형화 데이터 숫자
# 딥러닝
# 비정형화데이터 음성, 이미지, 영상

import matplotlib.pyplot as plt
from sklearn.neighbors import KNeighborsClassifier
#최근접 이웃 알고리즘 숫자 입력들어오면
a_x = [3,4,5,6,7]
a_y = [12,14,11,13,10]

b_x = [20,21,22,23,24]
b_y = [21,22,32,21,23]

c_x = [4,3,1,5,3]
c_y = [1,2,3,1,5]

d_x=[14,13,21,15,43]
d_y=[1,2,3,1,5]

xx = a_x + b_x + c_x + d_x  # Combine all x coordinates
yy = a_y + b_y + c_y + d_y  # Combine all y coordinates
data = [[x,y] for x, y in zip(xx, yy)]  # Create a list of lists with x and y pairs
target = [0] *5+ [1] * 5 + [2] * 5 + [3] * 5  # Create target values for classification


# 테스트
# plt.scatter(a_x, a_y, color='blue', label='Data Points')  # Scatter plot for the data points
# plt.scatter(b_x, b_y, color='red', label='More Data Points')  # Scatter plot for more data points
# plt.scatter(c_x, c_y, color='green', label='Another Data Points')  # Scatter plot for another set of data points
# plt.scatter(d_x, d_y, color='purple', label='Yet Another Data Points')  # Scatter plot for yet another set of data pointsplt.title('Scatter Plot Example')  # Set the title of the plot

# plt.scatter([3,2],[5,7])

# plt.xlabel('X-axis')  # Set the label for the x-axis
# plt.ylabel('Y-axis')  # Set the label for the y-axis
# plt.legend()  # Add a legend to the plot
# plt.show()  # Display the plot

# a_x와 a_y는 각각 x축과 y축의 좌표를 나타내는 리스트입니다.
# KNeighborsClassifier는 K-최근접 이웃 알고리즘을 구현한 클래스입니다
knn = KNeighborsClassifier(n_neighbors=3)
# n_neighbors는 최근접 이웃의 개수를 지정하는 파라미터입니다.
# knn.fit() 메소드는 모델을 학습시키는 메소드입니다.
# list(zip(a_x, a_y))는 a_x와 a_y를 묶어서
# (x, y) 좌표의 형태로 변환하는 코드입니다.
knn.fit(data, target)  # Fit the model with the data and target values
# result = knn.predict([[3, 5],[2,7]])  # Predict the class of a new data point with coordinates (3, 12)
# print(result)