const puppeteer = require("puppeteer");

// Puppeteer : 크롬에서 만든 모듈 (https://pptr.dev)
// 1. nodejs를 통해 크롬 브라우저 실행
// 2. 사용자가 원하는 뷰포트 네트워크 환경 설정
// 3. 마우스, 키보드, 터치 스크린 등을 코드르 통해 사람이 사용하는 것처럼 구현가능
// 4. 타임라인 트레이싱, 스크린샷, pdf 다운, 확장 프로그램, 작업 자동화 등 사용가능
// 5. SPA(single-page Application) 크롤링과 Pre-renderered content 생성 가능 

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();