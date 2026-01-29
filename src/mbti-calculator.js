const fs = require('fs');
const path = require('path');

class MBTICalculator {
  constructor() {
    const questionsPath = path.join(__dirname, 'mbti-questions.json');
    const typesPath = path.join(__dirname, 'mbti-types.json');

    this.questions = JSON.parse(fs.readFileSync(questionsPath, 'utf8'));
    this.types = JSON.parse(fs.readFileSync(typesPath, 'utf8'));
  }

  calculate(answers) {
    const scores = {
      E: 0, I: 0,
      S: 0, N: 0,
      T: 0, F: 0,
      J: 0, P: 0
    };

    // 답변 점수 집계
    answers.forEach((answer, index) => {
      const question = this.questions[index];
      if (!question) return;

      const selectedOption = question.options.find(opt => opt.text === answer);
      if (selectedOption) {
        scores[selectedOption.dimension] += selectedOption.value;
      }
    });

    // MBTI 타입 결정
    const mbti = [
      scores.E >= scores.I ? 'E' : 'I',
      scores.S >= scores.N ? 'S' : 'N',
      scores.T >= scores.F ? 'T' : 'F',
      scores.J >= scores.P ? 'J' : 'P'
    ].join('');

    return {
      mbti,
      scores,
      typeInfo: this.types[mbti] || null
    };
  }

  getQuestions() {
    return this.questions;
  }

  getQuestionsForTest() {
    // 무작위 섞기
    return [...this.questions].sort(() => Math.random() - 0.5);
  }
}

module.exports = MBTICalculator;
