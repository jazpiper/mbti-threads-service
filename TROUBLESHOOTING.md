# GitHub 레포지토리 문제 해결

## 현재 상태

### 레포지토리
- **이름:** jazpiper/mbti-threads-service
- **최신 커밋:** 908dffb - "Google AdSense ads.txt 추가"

### 배포 상태
- **Vercel URL:** https://mbti-threads-service.vercel.app
- **로드된 파일:** `public/index.html` (56 bytes - 구버전)
- **누락된 변경:**
  - `public/privacy/page.tsx` - 개인정보 페이지
  - `public/ads.txt` - AdSense 검증 파일
  - `public/index.html` - 최신 버전 (광고 하단 고정 + privacy 페이지 링크)

## 문제 원인

**Vercel 빌드 문제:**
1. `vercel.json`의 `"outputDirectory": "public"` 설정이 정확
2. 하지만 정적 파일 빌드가 예상대로 동작하지 않음
3. 캐시로 인해 구버전 파일이 로드됨

**해결 방안:**

### 방법 1: Vercel 무효화 (가장 빠름) ⚡

```bash
# Vercel 캐시 무효화
cd /home/ubuntu/project/mbti-threads-service
vercel --prod --force
```

**설명:**
- `--force` 옵션으로 캐시 무효화
- 최신 파일 강제 재배포

### 방법 2: build 명령어 추가 (보통적) ✅

**vercel.json 수정:**
```json
{
  "buildCommand": "npm install && cp -r public .vercel/output && cp -r .vercel/output/* .",
  "outputDirectory": ".",
  "devCommand": "node src/server.js",
  "installCommand": "npm install",
  "rewrites": [...]
}
```

**설명:**
- 빌드 시 파일을 `.vercel/output`으로 복사
- 최종 출력을 루트로 지정
- Vercel이 파일 이동을 보장

### 방법 3: 정적 파일 제외 설정 ⚙

**.vercelignore** 파일 생성:
```
public/*
!public/index.html
!public/ads.txt
!public/privacy
```

**설명:**
- `public/` 폴더를 무시하지만
- `public/index.html`만 배포되도록 허용
- `vercel.json`의 `outputDirectory: "public"`과 함께 사용 시 충돌 발생 가능

## 추천 진행 순서

### 1단계: vercel.json 업데이트 (방법 2) ⭐

**왜 이 방법을 추천하는가:**
- `buildCommand` 추가가 가장 안정적
- 정적 파일 처리에 더 유연함
- Vercel 빌드 시스템과 호환성이 높음

**업데이트 코드:**
```bash
cd /home/ubuntu/project/mbti-threads-service
# vercel.json 업데이트
git pull
# 방법 2 적용 (아래의 내용으로 vercel.json 수정)
```

**수정된 vercel.json:**
```json
{
  "buildCommand": "npm install && mkdir -p .vercel/output && cp -r public/* .vercel/output/",
  "outputDirectory": ".vercel/output",
  "devCommand": "node src/server.js",
  "installCommand": "npm install",
  "rewrites": [...]
}
```

### 2단계: Vercel 무효화 배포

```bash
# 캐시 무효화 후 배포
vercel --prod --force
```

### 3단계: 배포 확인

```bash
# 배포된 사이트 확인
curl -I https://mbti-threads-service.vercel.app

# Git 상태 확인
git log --oneline -5
```

## 검증 체크리스트

배포 후 다음을 확인하세요:

- [ ] 사이트 접속: https://mbti-threads-service.vercel.app
- [ ] 광고 하단 고정으로 표시 (여백 확보)
- [ ] 정적 파일 로드: 56 bytes → 16KB 이상 (최신 버전)
- [ ] MBTI 테스트 작동
- [ ] 버전 확인 (파일 크기 또는 메타)

## 문제가 지속될 경우

### 대안 1: Netlify로 변경
- Vercel 빌드 문제가 계속될 경우 Netlify로 이동
- Netlify는 정적 사이트 배포에 더 최적화

### 대안 2: Cloudflare Pages로 변경
- Cloudflare Pages는 CDN이 더 강력
- 전역 에지 네트워크

### 대안 3: 정적 파일 직접 업로드
- Vercel Dashboard의 Assets 기능 사용
- `public/index.html` 직접 업로드

## 다음 작업 (이 문제 해결 후)

- [ ] `/privacy` 페이지 추가
- [ ] `/terms` 페이지 추가
- [ ] `/about` 페이지 추가
- [ ] MBTI 질문 수 확장 (12문항 → 20문항)
- [ ] 16MBTI 타입 설명 더 자세화
- [ ] 스레드 공유 기능 개선

---

*이 문서를 레포 루트 `TROUBLESHOOTING.md`로 저장*
