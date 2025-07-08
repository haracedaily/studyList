from flask import Flask, request, render_template
from ex02 import plt,knr,perch_length, perch_weight
import io, base64
import matplotlib
matplotlib.use('Agg')  # Use a non-interactive backend for matplotlib
plt.rcParams['font.family'] = 'Malgun Gothic'

app = Flask(__name__)
@app.route('/')
def home():
        # 그래프 그리기
        fig, ax = plt.subplots()
        ax.scatter(perch_length, perch_weight, label='Perch Data')
        ax.set_xlabel('길이(cm)')
        ax.set_ylabel('무게(g)')
        ax.legend()

        # 이미지를 메모리 버퍼에 저장
        buf = io.BytesIO()
        plt.savefig(buf, format='png')
        buf.seek(0)
        img_data = base64.b64encode(buf.read()).decode('utf-8')
        buf.close()
        plt.close()
        result = "테스트값이 없습니다."
        return render_template('aa.html', img_data=img_data,result=result)

@app.route('/aa', methods=['GET', 'POST'])
def aa():
    if request.method == 'POST':
        length = int(request.form['length'])
        
        result = knr.predict([[length]])
        fig, ax = plt.subplots()
        ax.scatter(perch_length, perch_weight, label='Perch Data')
        ax.scatter([length], result, label='예측값', color='red')
        ax.set_xlabel('길이(cm)')
        ax.set_ylabel('무게(g)')
        ax.legend()

        # 이미지를 메모리 버퍼에 저장
        buf = io.BytesIO()
        plt.savefig(buf, format='png')
        buf.seek(0)
        img_data = base64.b64encode(buf.read()).decode('utf-8')
        buf.close()
        plt.close()
        print(f"result = {result}")
        return render_template('aa.html', result=result, img_data=img_data)
    return render_template('aa.html')

if __name__ == '__main__':
    app.run(debug=True)
    # flask 시작 debug=True는 디버그 모드를 활성화하여 코드 변경 시 자동으로 서버를 재시작합니다.
    # nodemon처럼 자동으로 서버를 재시작
    