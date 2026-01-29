import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '개인정보처리방침 | MBTI 테스트',
  description: 'MBTI 테스트 서비스의 개인정보처리방침입니다.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center p-4">
      <div className="max-w-3xl w-full mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">🔒 개인정보처리방침</h1>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold mb-4 text-purple-700">1. 수집하는 개인정보</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>MBTI 성격 유형 테스트 응답</li>
                <li>선택된 옵션 (없음)</li>
                <li>브라우저 및 기기 정보 (익명화 처리)</li>
                <li>테스트 완료 시간</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-purple-700">2. 개인정보 수집 목적</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>MBTI 성격 유형 분석 서비스 제공</li>
                <li>사용자 경험 개선을 위한 서비스 분석</li>
                <li>광고 수익 창출 (Google AdSense)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-purple-700">3. 개인정보 사용</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>테스트 결과 분석 및 MBTI 타입 결정에만 사용</li>
                <li>서비스 개선 및 통계 분석</li>
                <li>법률이나 권고에 따른 목적으로는 사용하지 않음</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-purple-700">4. 개인정보 공유</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>제3자에게 공유하지 않음 (광고 제공업체 제외)</li>
                <li>법률이나 권고에 따른 요청 시에는 제공</li>
                <li>제휴의 데이터를 판매하거나 영리 목적으로 사용하지 않음</li>
                <li>데이터 보호를 위한 기술적/관리적 조치 이행</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-purple-700">5. 데이터 보호</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>HTTPS 암호화 통신</li>
                <li>데이터 암호화 저장</li>
                <li>정기적인 보안 점검 및 업데이트</li>
                <li>데이터 침해 방지를 위한 접근 제한</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-purple-700">6. 사용자 권리</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>개인정보 열람, 정정, 삭제 요청 권리</li>
                <li>쿠키 및 기기 설정 삭제 권리</li>
                <li>개인정보 수집에 대한 동의 철회 및 거부 권리</li>
                <li>서비스 이용 중지 권리</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-purple-700">7. 개인정보 보유 기간</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>테스트 응답은 결과 표시 후 즉시 삭제</li>
                <li>통계 데이터는 최대 90일 보관 후 자동 삭제</li>
                <li>법률이나 규정에 따른 보관이 필요한 경우에만 보관</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-purple-700">8. 문의</h2>
              <p className="text-gray-600">
                개인정보 처리와 관련된 문의는 아래 연�처로 접수하여 7일 이내에 답변 드립니다.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>이메일: [보호처리된 이메일 주소]</li>
                <li>전화: [보호처리된 전화번호]</li>
                <li>주소: [보호처리된 주소]</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-purple-700">9. 개인정보처리방침 변경</h2>
              <p className="text-gray-600">
                중요한 변경사항이 있을 경우, 최소 30일 전에 고지합니다.
                사용자가 계속 서비스를 이용하는 것을 변경에 동의한 것으로 간주합니다.
              </p>
            </section>

            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-500">
                최종 업데이트: 2026년 1월 29일
              </p>
              <p className="text-sm text-gray-500">
                본 개인정보처리방침은 서비스 이용약관의 일부입니다.
              </p>
            </div>

            <div className="mt-8 text-center">
              <a 
                href="/" 
                className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                테스트 시작하기 →
              </a>
            </div>
          </div>
        </div>
      </div>
  );
}
