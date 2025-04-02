const supabaseUrl = "https://czerfzytvtwiymbcghqv.supabase.co";
const supabaseAnonkey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6ZXJmenl0dnR3aXltYmNnaHF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIyNzM5OTYsImV4cCI6MjA1Nzg0OTk5Nn0.9hW43ZpryTTZSrz7S4eVQ24znNOLWnsnicp36Rpl4hk";

const supabase = window.supabase.createClient(supabaseUrl,supabaseAnonkey);

/* const supabaseUrl = "https://zgrjjnifqoactpuqolao.supabase.co";
const supabaseAnonkey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpncmpqbmlmcW9hY3RwdXFvbGFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyNDc0NTgsImV4cCI6MjA1NjgyMzQ1OH0._Vl-6CRKdMjeDRyNoxlfect7sgusZ7L0N5OYu0a5hT0";

const supabase = window.supabase.createClient(supabaseUrl, supabaseAnonkey); */

document.addEventListener('DOMContentLoaded',()=>{
    const $email = document.getElementById('email');
    const $password = document.getElementById('password');
    const $loginStatus = document.querySelector("#login-status");
    const $review_title = document.querySelector("#review-title");
    const $review_txt = document.querySelector("#review-txt");
    const $review_name = document.querySelector("#review-name");
    const $review_password = document.querySelector("#review-password");

    document.querySelector("#signup").addEventListener('click',async function(){
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const result = emailRegex.test($email.value)
        if(!result){
            alert('email 양식이 아닙니다.');
            return;
        }
        this.disabled=true;
        const res = await supabase.auth.signUp({email:$email.value,password:$password.value,options: {
            data: {
              first_name: '최',
              last_name:'준호',
              age: 27,
            }
          }});
        console.log(res);
        if(res.error){
            alert('에러발생',res.error);
        }else{
            alert("회원가입되었습니다. 이메일 인증 후 로그인하세요")
        }
        this.disabled=false;
    })
    document.querySelector("#login").addEventListener('click',async function(){
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const result = emailRegex.test($email.value)
        if(!result){
            alert('email 양식이 아닙니다.');
            return;
        }
        this.disabled=true;
        const res = await supabase.auth.signInWithPassword({email:$email.value,password:$password.value});
        if(res.error){
            alert('에러발생',res.error);
        }else{
            alert("로그인 되었습니다.");
            $loginStatus.innerHTML=`${$email.value}님이 로그인하셨습니다.`;

            $email.value="";
            $password.value="";
        }
        this.disabled=false;
    })
    document.querySelector("#logout").addEventListener('click',async () => {
        let res = await supabase.auth.signOut();
        console.log(res);
        document.querySelector("#login-status").textContent='로그아웃되었습니다.';
        // location.reload();
    })
    document.getElementById('kakao-lgin').addEventListener('click',async ()=>{
        const res = await supabase.auth.signInWithOAuth({
            provider:'kakao'
        })
        console.log(res);
    })

    document.getElementById("review_save_btn").addEventListener("click",async function(){
        const res = await supabase.auth.getUser();
        if(!res.data.user.id){
            alert('로그인하세요.');
        }else{
            const id = res.data.user.id;
            supabase.from('review').insert([{
                user_id : id,
                name : $review_name.value,
                title : $review_title.value,
                password: $review_password.value,
                review_txt:$review_txt.value,
            }]).select()
        }
    })

})


document.addEventListener("DOMContentLoaded",async function(){
    const $loginStatus = document.querySelector("#login-status");
    const res = await supabase.auth.getUser();
    console.log(res);

 
    if(!res.error){
    $loginStatus.innerHTML = `${res.data.user.email}님께서 로그인하였습니다.`;
    }
})
