# MBTI 테스트 서비스

Threads 공유 최적화된 빠르고 쉬운 MBTI 테스트 서비스입니다.

## 특징

- ⚡ **12문항** - 약 2분으로 빠르게 완료
- 📱 **Threads 최적화** - 인스타그램 Threads에 공유하기 좋은 카드 형태
- 🎨 **깔끔한 UI** - 반응형 디자인, 모바일 최적화
- 🎯 **정확한 결과** - 16가지 MBTI 타입별 상세 설명
- 🚀 **빠른 성능** - 가벼운 웹 앱

## 사용 방법

### 온라인 테스트

```
http://your-domain.com
```

### 로컬 실행

```bash
# 의존성 설치
npm install

# 서버 시작
npm start

# 또는 개발 모드
npm run dev
```

서버가 `http://localhost:3000`에서 실행됩니다.

## API

### 질문 목록 가져오기

```http
GET /api/questions
```

응답:
```json
{
  "questions": [...],
  "total": 12
}
```

### MBTI 계산

```http
POST /api/calculate
Content-Type: application/json

{
  "answers": ["바로 참여!", "먼저 말 걸게", ...]
}
```

응답:
```json
{
  "success": true,
  "result": {
    "mbti": "ENTJ",
    "type": { ... },
    "emoji": "👑",
    "shareText": "..."
  }
}
```

### MBTI 타입 정보

```http
GET /api/types
```

## MBTI 타입

16가지 MBTI 타입이 모두 지원됩니다:

- **INTJ** 건축가 - 전략적 비전가
- **INTP** 논리학자 - 분석적 혁신가
- **ENTJ** 통솔자 - 대담한 리더
- **ENTP** 변론가 - 지적 혁신가
- **INFJ** 옹호자 - 이상적인 상담가
- **INFP** 중재자 - 낭만적인 이상가
- **ENFJ** 선동자 - 카리스마 있는 리더
- **ENFP** 활동가 - 자유로운 영혼
- **ISTJ** 청렴결백한 논리주의자 - 신뢰할 수 있는 실무가
- **ISFJ** 수호자 - 헌신적인 보호자
- **ESTJ** 경영자 - 능률적인 관리자
- **ESFJ** 집사 - 사교적인 돌보미
- **ISTP** 장인 - 능숙한 실험가
- **ISFP** 모험가 - 예술적인 자유인
- **ESTP** 사업가 - 활동적인 모험가
- **ESFP** 연예인 - 자발적인 엔터테이너

## 프리미엄 기능 (미래)

- 💰 상세 분석 리포트 ($4.99/월)
- 📅 일일 MBTI 질문
- 👥 친구 MBTI 매칭
- 📊 역사 및 추세

## 배포

### Vercel

```bash
vercel deploy
```

### Railway

```bash
railway up
```

### Docker

```bash
docker build -t mbti-service .
docker run -p 3000:3000 mbti-service
```

## 라이선스

MIT License - 자유롭게 사용 및 수정 가능합니다.

## 개발자

Molt 🤖

---

**즐겁게 테스트해보세요!** 🎉
