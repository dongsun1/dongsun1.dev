import dynamic from 'next/dynamic';
import Link from 'next/link';

const Container = dynamic(import('components/container'));
const Title = dynamic(import('components/title'));

export default function About() {
  return (
    <Container title="dongsun1 resume" desc="프론트엔드 개발자 김동선 Resume입니다.">
      <div className="container mx-auto max-w-3xl px-4 lg:px-0">
        <Title title="Resume" />
        <div className="flex flex-col mt-10">
          <h1 className="text-3xl font-bold mb-3 text-[#0087cb]">Profile</h1>
          <div className="flex">
            <span className="w-1/4 mb-2 font-bold">이름</span>
            <span>김동선</span>
          </div>
          <div className="flex">
            <span className="w-1/4 mb-2 font-bold">깃허브</span>
            <Link className="font-bold underline" href="https://github.com/dongsun1">
              https://github.com/dongsun1
            </Link>
          </div>
          <div className="flex">
            <span className="w-1/4 mb-2 font-bold">이메일</span>
            <span>le12352@gmail.com</span>
          </div>
          <div className="flex">
            <span className="w-1/4 mb-2 font-bold">소개</span>
            <div className="w-3/4">
              <p>습득력이 좋은 주니어 개발자 김동선입니다.</p>
              <p>남들보다 빠르게 습득하고 적용하는 빠른 개발 능력이 있습니다.</p>
              <p>항상 예정된 기간보다 빠르고 정확하게 끝냅니다.</p>
              <br />
              <p>자료구조를 활용한 성능 개선과 코드 리펙토링을 좋아합니다.</p>
              <p>효율적이고 알아보기 쉬운 코드를 짜는 개발자가 잘하는 개발자라고 생각합니다.</p>
              <br />
              <p>유저 친화적인 개발을 지향합니다.</p>
              <p>피드백을 받거나 직접 개선한 경험이 있습니다.</p>
              <p></p>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-12">
          <h1 className="text-3xl font-bold mb-3 text-[#0087cb]">Work Experience</h1>
          <span className="text-sm text-gray-400">2022년 7월 - 현재</span>
          <div className="flex items-center mb-2">
            <Link href="https://www.gractor.com/" className="mr-2 text-2xl font-bold underline">
              그렉터
            </Link>
            <span className="text-green-500">Front-end Engineer (Nuxt.js)</span>
          </div>
          <p>스마트시티, 스마트빌리지 등등 미래도시를 만드는 스마트도시 솔루션 기업</p>
          <br />
          <div className="flex flex-col md:flex-row">
            <h1 className="text-xl mb-2 w-full md:w-1/4 font-bold shrink-0">Json Logic</h1>
            <div className="w-full md:w-3/4">
              <p>
                ·{' '}
                <Link className="font-bold underline" href="https://www.npmjs.com/package/jsoneditor">
                  Json Editor
                </Link>{' '}
                사용법을 모르는 유저를 위해 <span className="font-bold">Combo Box</span>로 Json Logic을 만들 수 있도록 개선
              </p>
              <p>· 개선 전 회사가 대신 Json Logic을 등록했지만 개선 후 유저가 직접 등록</p>
              <p>
                · 조건 안에 조건이 들어갈 수 있도록 <span className="font-bold">재귀 컴포넌트</span> 사용
              </p>
            </div>
          </div>
          <br />
          <div className="flex flex-col md:flex-row">
            <h1 className="text-xl mb-2 w-full md:w-1/4 font-bold shrink-0">시설 점검 일정</h1>
            <div className="w-full md:w-3/4">
              <p>
                ·{' '}
                <Link className="font-bold underline" href="https://fullcalendar.io/">
                  Full Calendar
                </Link>
                를 활용한 일정 관리 페이지 개발
              </p>
              <p>
                · <span className="font-bold">Cron 표현식</span>을 활용한 주기 점검 일정 등록 기능 개발
              </p>
              <p>
                · Full Calendar에서 제공하는 함수를 활용하여 <span className="font-bold">Data Grid</span> 버전 개발
              </p>
              <p>
                · 정확한 소통과 빠른 습득력으로 개발기간 <span className="font-bold">25% 단축</span>
              </p>
            </div>
          </div>
          <br />
          <div className="flex flex-col md:flex-row">
            <h1 className="text-xl mb-2 w-full md:w-1/4 font-bold shrink-0">어린이집 현황</h1>
            <div className="w-full md:w-3/4">
              <p>
                ·{' '}
                <Link className="font-bold underline" href="https://echarts.apache.org/en/index.html">
                  Echarts
                </Link>
                를 활용하여 1,500개 이상의 센서 데이터 현황 표출
              </p>
              <p>· 어린이집 컴포넌트 검색, 페이지네이션, 카테고리별 조회 기능 개발</p>
              <p>
                · 대용량 데이터 처리를 위한 <span className="font-bold">Map 자료구조</span> 활용 ⇒ <span className="font-bold">성능 7% 개선</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-12">
          <h1 className="text-3xl font-bold mb-3 text-[#0087cb]">Project</h1>
          <span className="text-sm text-gray-400">2022년 11월 - 현재</span>
          <div className="flex items-center">
            <Link href="https://github.com/dongsun1/dongsun1.dev" className="mr-2 text-2xl underline mb-2 font-bold">
              블로그
            </Link>
            <span className="text-green-500">Front-end Engineer (Next.js)</span>
          </div>
          <p>· 나만의 블로그를 운영하기 위해 개발</p>
          <p>
            · <span className="font-bold">SEO</span> 최적화를 위한 <span className="font-bold">SSR, meta tag</span> 적용
          </p>
          <p>
            · MongoDB를 통한 페이지네이션, dynamic import 등을 사용하여 초기 로딩 속도 <span className="font-bold">0.76s에서 0.15s로 개선</span>
          </p>
          <p>
            · 모바일 환경에서 볼 수 있도록 <span className="font-bold">반응형</span>으로 제작
          </p>
          <br />
          <span className="text-sm text-gray-400">2022년 4월 - 2022년 6월</span>
          <div className="flex items-center">
            <Link href="https://github.com/dongsun1/last-project-nest" className="mr-2 text-2xl underline mb-2 shrink-0 font-bold">
              마피양
            </Link>
            <span className="text-green-500">Back-end Engineer (Node.js, Express.js, Nest.js, MongoDB)</span>
          </div>
          <p>
            · 실시간 통신과 화상 채팅을 위해{' '}
            <Link className="font-bold underline" href="https://socket.io/">
              Socket.io,
            </Link>{' '}
            <Link className="font-bold underline" href="https://peerjs.com/">
              Peer.js
            </Link>
            를 활용하여 실시간 마피아 게임을 개발
          </p>
          <p>
            · Express.js로 먼저 개발 후 Nest.js로 마이그레이션 후 <span className="font-bold">테스트 코드 작성</span>
          </p>
          <p>
            · <span className="font-bold">&quot;혼자서도 하고 싶다&quot;, &quot;친구가 없다&quot;</span>라는 유저 피드백을 해결하기 위해{' '}
            <span className="font-bold">AI 모드</span> 개발
          </p>
          <p>
            · 가입 회원 수 <span className="font-bold">244</span>명, 설문조사 <span className="font-bold">57</span>건, 평점{' '}
            <span className="font-bold">4.54</span>
          </p>
        </div>
        <div className="flex flex-col mt-12">
          <h1 className="text-3xl font-bold mb-3 text-[#0087cb]">Skill</h1>
          <p>· Frontend: JavaScript, TypeScript, Nuxt.js, Next.js</p>
          <p>· Backend: Node.js, AWS (EC2, S3)</p>
          <p>· Database: MongoDB</p>
        </div>
        <div className="flex flex-col mt-12">
          <h1 className="text-3xl font-bold mb-3 text-[#0087cb]">Education</h1>
          <span className="text-sm text-gray-400">2022년 3월 - 2022년 6월</span>
          <div className="flex">
            <Link href="https://hanghae99.spartacodingclub.kr/" className="mr-2 text-2xl underline mb-2 font-bold">
              항해99
            </Link>
          </div>
          <p>99일간 9am부터 9pm까지 공부하는 개발자 양성 교육 과정</p>
          <p>Node.js 프로젝트 진행</p>
          <p>유저 피드백 수용 경험</p>
          <span className="font-bold">디자이너 협업 및 프로덕트 출시 경험</span>
          <br />
          <span className="text-sm text-gray-400">2021년 8월 - 2022년 1월</span>
          <div className="flex">
            <Link href="https://smhrd.or.kr/" className="mr-2 text-2xl underline mb-2 font-bold">
              스마트인재개발원
            </Link>
          </div>
          <p>AI 활용을 위한 딥러닝 교육을 포함한 총 928시간의 교육 과정</p>
          <p>JSP/Servlet, Android, Flask 프로젝트 진행</p>
        </div>
        <div className="flex flex-col mt-12">
          <h1 className="text-3xl font-bold mb-3 text-[#0087cb]">Awards</h1>
          <span className="text-sm text-gray-400">2022년 6월</span>
          <Link href="https://hanghae99.spartacodingclub.kr/" className="mr-2 text-2xl underline mb-2 font-bold">
            항해99
          </Link>
          <p>· 마피양 - 최고 프로젝트 상 수상 (13개 팀 중 1등)</p>
          <br />
          <span className="text-sm text-gray-400">2022년 1월</span>
          <Link href="https://smhrd.or.kr/" className="mr-2 text-2xl underline mb-2 font-bold">
            스마트인재개발원
          </Link>
          <p>· 모범상 (60명 중 대표로 수상)</p>
          <p>· 개리커쳐 - 최종 프로젝트 우수상 (4개 팀 중 2등)</p>
          <p>· Java Festival 우수상 (6개 팀 중 2등)</p>
        </div>
      </div>
    </Container>
  );
}
