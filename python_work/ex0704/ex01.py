import matplotlib.pyplot as plt
from sklearn.neighbors import KNeighborsClassifier

plt.rcParams['font.family'] = 'Malgun Gothic'  # Set the font to Malgun Gothic for Korean characters
# matplotlib의 폰트를 설정하는 코드
# matplotlib은 파이썬에서 그래프를 그릴 때 사용하는 라이브러리이다.
# 이 코드는 matplotlib의 폰트를 설정하는 코드이다.
# 'Malgun Gothic'은 한글 폰트 중 하나로, 한글을 잘 표시할 수 있다.
# 이 코드를 실행하면 matplotlib에서 한글을 사용할 수 있게 된다.
plt.rcParams['axes.unicode_minus'] = False  # Prevents the minus sign from being displayed as a square
# matplotlib에서 음수 기호가 사각형으로 표시되는 것을 방지하는 코드
# 도미 데이터와 빙어 데이터를 준비해서 학습 진행할 예정
bream_length = [25.4, 26.3, 26.5, 29.0, 29.0, 29.7, 29.7, 30.0, 30.0, 30.7, 31.0, 31.0, 31.5, 32.0, 32.0, 32.0, 33.0, 33.0, 33.5, 33.5, 34.0, 34.0, 34.5, 35.0, 35.0, 35.0, 35.0, 36.0, 36.0, 37.0, 38.5, 38.5, 39.5, 41.0, 41.0]
bream_weight = [242.0, 290.0, 340.0, 363.0, 430.0, 450.0, 500.0, 390.0, 450.0, 500.0, 475.0, 500.0, 500.0, 340.0, 600.0, 600.0, 700.0, 700.0, 610.0, 650.0, 575.0, 685.0, 620.0, 680.0, 700.0, 725.0, 720.0, 714.0, 850.0, 1000.0, 920.0, 955.0, 925.0, 975.0, 950.0]
smelt_length = [9.8, 10.5, 10.6, 11.0, 11.2, 11.3, 11.8, 11.8, 12.0, 12.2, 12.4, 13.0, 14.3, 15.0]
smelt_weight = [6.7, 7.5, 7.0, 9.7, 9.8, 8.7, 10.0, 9.9, 9.8, 12.2, 13.4, 12.2, 19.7, 19.9]

length = bream_length + smelt_length
weight = bream_weight + smelt_weight
print(length, end='길이 합\n')
print(weight, end='무게 합\n')
print(len(length), end='길이 개수\n')
print(len(weight), end='무게 개수\n')
print(len(bream_length), end='도미 길이\n')
print(len(bream_weight), end='도미 무게\n')
print(len(smelt_length), end='빙어 길이\n')
print(len(smelt_weight), end='빙어 무게\n')
# Create a scatter plot with the data
plt.figure(figsize=(10, 6))  # Set the figure size 이미지 크기
plt.scatter(length, weight, color='gray', label='All Fish Data')  # Scatter plot for all fish data
plt.legend()  # Add a legend to the plot
plt.title('All Fish\'s data')  # Set the title of the plot
#plt.show()
plt.scatter([1, 2, 3], [4, 5, 6], color='red', label='Data Points')
plt.scatter([4, 5, 6], [7, 8, 9], color='blue', label='More Data Points')
plt.bar([20,30,40],[10,20,30], color='green', label='Bar Chart Example' ) # Add a bar chart
plt.plot([10, 20, 30], [40, 50, 60], color='black', label='Line Example') # Add a line plot
plt.scatter(bream_length, bream_weight, color='skyblue', label='Bream Data') # Scatter plot for bream data
plt.scatter(smelt_length, smelt_weight, color='orange', label='Smelt Data') # Scatter plot for smelt data
#plt.xlim(0, 100) # Set x-axis limits
plt.scatter(10, 200, color='purple', label='New Fish Data') # Add a new data point
plt.title('Scatter Plot Example')
plt.xlabel('X-axis')
plt.ylabel('Y-axis')
plt.savefig('scatter_plot_example.png') # Save the plot as a PNG file
plt.legend(["전체물고기","뽀인트","새로운 물고기 데이터","그냥 선","도미 데이터","빙어 데이터","뽀인트2","바"]) # Add a legend to the plot with labels
plt.grid() # Add a grid to the plot
plt.show()  # Display the plot
plt.close()

fish_data = [[l,w] for l,w in zip(length, weight)] # List comprehension to create a list of lists with length and weight pairs
# 위의 코드는 길이와 무게를 묶어서 리스트로 만들어준다.
# 아래는 길이와 무게를 묶어서 출력하는 코드
print(fish_data)
fish_target = [1] * 35 + [0] * 14  # Target values for bream (1) and smelt (0)

kn = KNeighborsClassifier()  # Create a KNeighborsClassifier instance
kn.fit(fish_data, fish_target)  # Fit the model with the fish data and target values
# fit 메소드는 모델을 학습시키는 메소드이다.
# 데이터와 타겟 값을 넣어서 모델을 학습시킨다.
# Predict the class of a new fish with length 30 and weight 600
print(kn.predict([[10, 200]]))  # Predict the class of a new fish

#for l,w in zip(length, weight):
    #print(f'길이: {l}, 무게: {w}')
    # f를 넣으면 빽팁처럼 사용 가능 c#에서 사용하는 방법으로는
    # f-string이라고 부른다.




# def plot_sine_wave():
#     import numpy as np

#     # Generate x values from 0 to 2π
#     x = np.linspace(0, 2 * np.pi, 100)
#     # Calculate the sine of x
#     y = np.sin(x)

#     # Create the plot
#     plt.plot(x, y, label='Sine Wave', color='blue')
#     plt.title('Sine Wave')
#     plt.xlabel('x (radians)')
#     plt.ylabel('sin(x)')
#     plt.axhline(0, color='black', lw=0.5, ls='--')
#     plt.axvline(0, color='black', lw=0.5, ls='--')
#     plt.grid()
#     plt.legend(["도미", "빙어", "새로운 물고기 데이터"])
    
#     # Show the plot
#     plt.show()