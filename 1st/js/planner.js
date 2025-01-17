function limit(e){
    if(e.value.split('\n').length>3){
        swal('허용되지 않은 입력','3줄까지만 입력 가능합니다.','warning',{
            button:'돌아가기',
        });
        e.value = e.value.split('\n').slice(0,3).join('\n');   
    }
    
}

/* $('#contents').keydown(function(){
    var rows = $('#contents').val().split('\n').length;
    var maxRows = 4;
    if( rows > maxRows){
        alert('4줄 까지만 가능합니다');
        modifiedText = $('#contents').val().split("\n").slice(0, maxRows);
        $('#contents').val(modifiedText.join("\n"));
    }
}); */