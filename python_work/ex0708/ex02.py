import numpy as np
import matplotlib.pyplot as plt
# 구글에서 제공하는 머신러닝 sklearn 라이브러리로
# 머신러닝 알고리즘을 제공하는 라이브러리 중 train_test_split 함수를 사용
from sklearn.model_selection import train_test_split
# 물고기 길이를 제공 해주면 물고기 무게가 얼마나 되는가?

perch_length = np.array(
    [8.4, 13.7, 15.0, 16.2, 17.4, 18.0, 18.7, 19.0, 19.6, 20.0,
     21.0, 21.0, 21.0, 21.3, 22.0, 22.0, 22.0, 22.0, 22.0, 22.5,
     22.5, 22.7, 23.0, 23.5, 24.0, 24.0, 24.6, 25.0, 25.6, 26.5,
     27.3, 27.5, 27.5, 27.5, 28.0, 28.7, 30.0, 32.8, 34.5, 35.0,
     36.5, 36.0, 37.0, 37.0, 39.0, 39.0, 39.0, 40.0, 40.0, 40.0,
     40.0, 42.0, 43.0, 43.0, 43.5, 44.0]
     )

perch_weight = np.array(
    [5.9, 32.0, 40.0, 51.5, 70.0, 100.0, 78.0, 80.0, 85.0, 85.0,
     110.0, 115.0, 125.0, 130.0, 120.0, 120.0, 130.0, 135.0, 110.0,
     130.0, 150.0, 145.0, 150.0, 170.0, 225.0, 145.0, 188.0, 180.0,
     197.0, 218.0, 300.0, 260.0, 265.0, 250.0, 250.0, 300.0, 320.0,
     514.0, 556.0, 840.0, 685.0, 700.0, 700.0, 690.0, 900.0, 650.0,
     820.0, 850.0, 900.0, 1015.0, 820.0, 1100.0, 1000.0, 1100.0,
     1000.0, 1000.0]
     )

train_data = perch_length[:44]
print(train_data.shape)  # Print the shape of train_data

print(perch_length.shape)  # Print the shape of perch_length
print(perch_weight.shape)  # Print the shape of perch_weight

plt.scatter(perch_length, perch_weight, label='Perch Data', color='blue')
plt.xlabel('Length (cm)')
plt.ylabel('Weight (g)')

# plt.show()

train_input, test_input, train_target, test_target = train_test_split(
    perch_length, perch_weight, random_state=42)
# x가 들어가면 y가 나온다
# train_input은 훈련 데이터의 입력값, test_input은 테스트 데이터의 입력값
# train_target은 훈련 데이터의 목표값, test_target은 테스트 데이터의 목표값
# train_test_split 함수는 데이터를 무작위로 섞은 후, 지정된 비율로 훈련 데이터와 테스트 데이터로 분할합니다.
print(train_input.shape)
print(train_target.shape)
print(test_input[:5])
print(test_target[:5])

train_input = train_input.reshape(-1, 1)  # Reshape the input data to have one feature
test_input = test_input.reshape(-1, 1)  # Reshape the test data
print(train_input[:5])
print(train_target[:5])

# x,x1,y,y1 = train_test_split(perch_length, perch_weight, random_state=42)

# from sklearn.ensemble import RandomForestClassifier
# RandomForestClassifier는 랜덤 포레스트 분류 알고리즘을 구현
# from sklearn.ensemble import ExtraTreesRegressor
# ExtraTreesRegressor는 엑스트라 트리 회귀 알고리즘을 구현

from sklearn.neighbors import KNeighborsRegressor
# KNeighborsRegressor는 K-최근접 이웃 회귀 알고리즘을 구현

knr = KNeighborsRegressor(n_neighbors=5)
# n_neighbors는 최근접 이웃의 개수를 지정하는 파라미터
# train_input과 train_target을 사용하여 모델을 학습
# train_input은 훈련 데이터의 입력값, train_target은 훈련 데이터의 목표값
knr.fit(train_input, train_target)  # Fit the model with the training data
# Predict the target values for the test input data
test_prediction = knr.predict([[30],[20],[10],[50],[40]])

print("테스트 도출 : ",test_prediction,end="\n")  # Print the first 5 predictions
plt.scatter([[30],[20],[10],[50],[40]], test_prediction, label='Test Predictions', color='red')
# plt.legend()
# plt.show()



# print(test_target[:5])  # Print the first 5 actual target values
# # Calculate the mean squared error between the predicted and actual target values
# from sklearn.metrics import mean_squared_error
# mse = mean_squared_error(test_target, test_prediction)
# print("Mean Squared Error:", mse)  # Print the mean squared error
# # Plot the training data and the predicted values
# plt.scatter(train_input, train_target, label='Training Data', color='blue')
# plt.scatter(test_input, test_prediction, label='Test Predictions', color='red')

# plt.xlabel('Length (cm)')
# plt.ylabel('Weight (g)')
# plt.legend()
# plt.show()  # Display the plot
# # Predict the weight of a perch with a length of 50 cm