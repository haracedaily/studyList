import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { NetworkFirst } from 'workbox-strategies';
/*워크박스 프리캐치 전략*/
precacheAndRoute(self.__WB_MANIFEST);
cleanupOutdatedCaches();

registerRoute(
    ({ request }) => request.mode === 'navigate',
    new NetworkFirst()
);

self.addEventListener('push', (event) => {
    const data = event.data?.json() || {
        title: '기본 제목',
        body: '기본 내용',
        url: '/'
    }

    const options = {
        body: data.body,
        icon: '/icons/icon.svg', // 알림 아이콘
        data: {
            url: data.url // 나중에 클릭 시 이동할 경로
        }
    }
    // notification 보여줘라..
    event.waitUntil(
        self.registration.showNotification(data.title, options)// Service Worker의 registration 객체에서 showNotification() 메서드를 호출하여 푸시 알림을 실제로 표시합니다.
    )
});