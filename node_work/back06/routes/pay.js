const express = require('express');
const router = express.Router();
const supabase = require('../utils/supa.js');
const webpush = require('web-push');

router.get('/checkout', async function (req, res) {
    console.log(req.query.res_no);
    const {data,err} = await supabase.from('ice_res').select('*').eq('res_no', req.query.res_no).single();
    console.log(data);
    console.log(data.tel.replace(/-/g,""));
    res.render('pay/checkout', { title: '결제', request: req, today: new Date().toLocaleDateString().replaceAll(" ", "").slice(0, -1).replaceAll(".", "-"),reservation:data });

})

//결제 성공 -> ice_res -> 결제완료 res_no 예약번호
router.get('/success', async function (req, res) {
    console.log(req.query);
    // 결제 완료
    await supabase.from('ice_res').update({status: "결제완료"}).eq("res_no", req.query.orderId);
    const {data} = await supabase.from('ice_res').select().eq("res_no", req.query.orderId);

    // 결제 완료 알림 푸시
    const { data: subData, error: subError } = await supabase
        .from('push_subscribe')
        .select('*');

    if (subError) {
        console.error('푸시 구독 정보 조회 실패:', subError);
    } else if (subData && subData.length > 0) {
        console.log("푸시 알림 전송 시도 - 구독자 수:", subData.length);

        // 모든 구독자에게 알림 전송
        for (const subscriber of subData) {
            const pushSubscription = {
                endpoint: subscriber.endpoint,
                keys: {
                    p256dh: subscriber.p256dh,
                    auth: subscriber.auth
                }
            };

            try {
                await webpush.sendNotification(
                    pushSubscription,
                    JSON.stringify({
                        title: '청소신청 알림',
                        body: '새로운 청소신청이 되었습니다',
                        url: '/'
                    })
                );
                console.log('푸시 알림 전송 성공');
            } catch (e) {
                console.error('푸시 알림 전송 실패:', e);
            }
        }
    } else {
        console.log('푸시 구독 정보가 없어 알림을 보내지 않습니다.');
    }



    console.log(result.data[0]);
    return res.render('pay/success', { title: '결제 성공', request: req, today: new Date().toLocaleDateString().replaceAll(" ", "").slice(0, -1).replaceAll(".", "-"),reservation:result.data });
})

module.exports = router;