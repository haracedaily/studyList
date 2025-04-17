let app = document.getElementById('app');
        function updateList(){
            const items = ['사과','바나나','포도','파인애플'];
            //리 렌더링 계속 시키면 성능저하 유발.
            // app.innerHtml="<ul>"; 제일 느린 형태
            let html = "<ul>";
            for (const element of items) {
                //app.innerHtml+=`<li>${element}</li>`;
                html +=`<li>${element}</li>`;
            }
            //app.innerHtml+='</ul>';
            html +="</ul>";
            app.innerHTML=html;
        }
        function clearApp(){
            app.innerHTML='';
        }