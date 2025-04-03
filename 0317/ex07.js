try {
    console.log('시도');
    throw new Error("에러가 발생되며 강제종료");
} catch (error) {
    console.log("종료되었습니다.");
}
