# 공지사항 페이지

- URL: /news
- API: [newsAPI.ts](../apps/web/app/news/newsAPI.ts)
- fetchNews API를 호출하여 응답 목록을 카드 목록 컴포넌트에 전달
- 아이콘은 lucid 사용
- site-footer 컴포넌트 사용

# 카드 목록 컴포넌트

- 부모 컴포넌트로 부터 목록 데이터 받음
- Grid: 5 X 4
- shadcn의 Pagination 컴포넌트 사용
- 포스트 카드 컴포넌트 사용

# 포스트 카드 컴포넌트

카드를 클릭하면 새탭으로 URL링크를 엽니다.

## 표시 항목

- 썸네일
- 제목
- 등록 날짜

# 주요활동 페이지

- URL: /info
- API: [activitiesAPI.ts](../apps/web/app/activities/activitiesAPI.ts)
- 공지사항 페이지를 참조
