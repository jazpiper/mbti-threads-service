const express = require('express');
const cors = require('cors');
const path = require('path');
const MBTICalculator = require('./mbti-calculator');

const app = express();
const PORT = process.env.PORT || 3000;
const calculator = new MBTICalculator();

// 미들웨어
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// 라우트
app.get('/api/questions', (req, res) => {
  const questions = calculator.getQuestionsForTest();
  res.json({ questions, total: questions.length });
});

app.post('/api/calculate', (req, res) => {
  const { answers } = req.body;

  if (!Array.isArray(answers) || answers.length === 0) {
    return res.status(400).json({ error: '답변이 필요합니다' });
  }

  const result = calculator.calculate(answers);

  // 결과 데이터에 공유용 정보 추가
  const shareData = {
    mbti: result.mbti,
    type: result.typeInfo,
    timestamp: new Date().toISOString(),
    emoji: result.typeInfo?.emoji || '🎯',
    shareText: `나의 MBTI는 ${result.mbti} ${result.typeInfo?.emoji}! ${result.typeInfo?.title}\\n\\n테스트: mbti-test.com`
  };

  res.json({
    success: true,
    result: shareData
  });
});

app.get('/api/types', (req, res) => {
  res.json({ types: calculator.types });
});

// 메인 페이지
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// 헬스 체크
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// 404 처리
app.use((req, res) => {
  res.status(404).json({ error: '찾을 수 없습니다' });
});

// 에러 처리
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: '서버 에러' });
});

app.listen(PORT, () => {
  console.log(`🚀 MBTI 서비스가 ${PORT}번 포트에서 실행 중입니다!`);
  console.log(`📱 메인: http://localhost:${PORT}`);
});
