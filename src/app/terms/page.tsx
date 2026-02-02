import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '이용약관 | MBTI 테스트',
  description: 'MBTI 테스트 서비스의 이용약관입니다.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center p-4">
      <div className="max-w-3xl w-full mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">📋 이용약관</h1>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold mb-4 text-purple-700">1. 서비스 이용 조건</h2>
              <div className="space-y-3 ml-4">
                <p className="text-gray-600">본 약관은 MBTI 테스트 서비스(이하 "서비스")를 이용하는 모든 사용자에게 적용됩니다.</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>만 14세 이상인 사용자만 서비스 이용 가능</li>
                  <li>서비스 이용은 개인 목적으로만 허용</li>
                  <li>회원가입 없이 테스트 이용 가능</li>
                  <li>서비스 이용 시 본 약관에 동의한 것으로 간주</li>
                  <li>약관 개정 시 최소 7일 전에 고지</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-purple-700">2. 책임 한계</h2>
              <div className="space-y-3 ml-4">
                <p className="text-gray-600">서비스 제공자는 다음 사항에 대해 책임을 지지 않습니다.</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>MBTI 테스트 결과의 정확성 및 신뢰성</li>
                  <li>테스트 결과로 인한 의사결정 및 그 결과</li>
                  <li>사용자의 개인적인 활동 및 행동</li>
                  <li>서비스 일시 중단 또는 오작동으로 인한 손해</li>
                  <li>사용자의 정보 보호 실패 (고의 또는 중대한 과실 제외)</li>
                  <li>제3자에 의한 데이터 침해 사고</li>
                </ul>
                <p className="text-gray-600 mt-3 text-sm">
                  ※ 본 서비스는 오락 및 참고용으로 제공되며, 전문적인 성격 분석 도구가 아닙니다.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-purple-700">3. 사용자 행동 규정</h2>
              <div className="space-y-3 ml-4">
                <p className="text-gray-600">사용자는 다음 행위를 금지합니다.</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>서비스 악용 및 부정한 목적으로의 이용</li>
                  <li>자동화 도구(봇)를 통한 대량 테스트 실행</li>
                  <li>테스트 결과 조작 및 데이터 위변조</li>
                  <li>타인의 개인정보 무단 수집 및 이용</li>
                  <li>저작권, 지적재산권 침해 행위</li>
                  <li>욕설, 비방, 기타 불쾌감을 주는 행위</li>
                  <li>서비스의 기술적 조치 우회 시도</li>
                  <li>서버에 과도한 부하를 주는 행위</li>
                </ul>
                <p className="text-gray-600 mt-3 text-sm">
                  ※ 위반 시 서비스 이용 제한 또는 법적 조치가 취해질 수 있습니다.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-purple-700">4. 지적재산권</h2>
              <div className="space-y-3 ml-4">
                <p className="text-gray-600">서비스 및 콘텐츠의 지적재산권은 서비스 제공자에게 있습니다.</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>테스트 문항, 로직, 디자인 등 모든 콘텐츠는 서비스 제공자의 소유</li>
                  <li>MBTI 관련 콘텐츠는 참고용으로 제공됨</li>
                  <li>테스트 결과를 상업적 목적으로 사용 불가</li>
                  <li>서비스의 일부 또는 전체를 복제, 배포, 수정 금지</li>
                  <li>저작권법을 준수하여 정당한 범위 내에서 이용</li>
                  <li>타인의 저작권을 침해하는 콘텐츠 게시 금지</li>
                </ul>
                <p className="text-gray-600 mt-3 text-sm">
                  ※ 이용 문의는 문의 섹션의 연락처로 접수해 주세요.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-purple-700">5. 서비스 변경 및 종료</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>서비스 제공자는 사전 고지 없이 서비스 내용을 변경할 수 있음</li>
                <li>서비스의 일부 또는 전체를 중단할 수 있음</li>
                <li>서비스 종료 시 최소 30일 전에 사용자에게 고지</li>
                <li>서비스 변경 또는 종료로 인한 손해에 대해 책임 지지 않음</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-purple-700">6. 분쟁 해결 및 재판 관할</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>서비스 이용과 관련된 분쟁은 대한민국 법에 따름</li>
                <li>분쟁 발생 시 원만한 협의 해결 우선</li>
                <li>소송 시 서비스 제공자의 소재지 관할 법원</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-purple-700">7. 문의</h2>
              <p className="text-gray-600">
                이용약관과 관련된 문의는 아래 연락처로 접수하여 7일 이내에 답변 드립니다.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>이메일: [보호처리된 이메일 주소]</li>
                <li>전화: [보호처리된 전화번호]</li>
                <li>주소: [보호처리된 주소]</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-purple-700">8. 약관 변경</h2>
              <p className="text-gray-600">
                중요한 변경사항이 있을 경우, 최소 7일 전에 고지합니다.
                사용자가 계속 서비스를 이용하는 것은 변경에 동의한 것으로 간주합니다.
              </p>
            </section>

            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-500">
                최종 업데이트: 2026년 1월 30일
              </p>
              <p className="text-sm text-gray-500">
                본 이용약관은 개인정보처리방침과 함께 서비스 이용의 기준이 됩니다.
              </p>
            </div>

            <div className="mt-8 text-center">
              <a 
                href="/" 
                className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                테스트 시작하기 →
              </a>
            </div>
          </div>
        </div>
      </div>
  );
}
