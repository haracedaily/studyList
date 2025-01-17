function limit(e){
    if(e.value.length>1){
        e.parentNode.style.backgroundColor='#F1EDFF';
    }else{
        e.parentNode.style.backgroundColor='#fff';
    }
    if(e.value.split('\n').length>3){
        swal('허용되지 않은 입력','3줄까지만 입력 가능합니다.','warning',{
            button:'돌아가기',
        });
        e.value = e.value.split('\n').slice(0,3).join('\n');   
    }
    
}
