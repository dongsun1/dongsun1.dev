import Link from 'next/link';
import Container from '../components/container';
import Title from '../components/title';

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
              <p>안녕하세요. 프론트엔드 개발자 김동선입니다.</p>
              <br />
              <p>코드의 가독성과 성능을 생각하며 개발합니다.</p>
              <p>자료구조를 이해하고 적용하여 성능 개선한 경험이 있습니다.</p>
              <br />
              <p>어려운 문제를 해결할 때 성취감을 느끼는 것을 좋아합니다.</p>
              <p>Socket을 활용해 마피아 게임 알고리즘 개발 경험이 있습니다. </p>
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
          <div className="flex">
            <h1 className="text-xl mb-1 w-52 font-bold shrink-0">Json Logic</h1>
            <div>
              <p>
                ·{' '}
                <Link className="font-bold underline" href="https://www.npmjs.com/package/jsoneditor">
                  Json Editor
                </Link>{' '}
                사용법을 모르는 유저를 위해 <span className="font-bold">Combo Box</span>로 Json Logic을 만들 수 있도록 개선
              </p>
              <p>
                · 조건 안에 조건이 들어갈 수 있도록 <span className="font-bold">재귀 컴포넌트</span> 사용
              </p>
            </div>
          </div>
          <br />
          <div className="flex">
            <h1 className="text-xl mb-1 w-52 font-bold shrink-0">시설 점검 일정</h1>
            <div>
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
            </div>
          </div>
          <br />
          <div className="flex">
            <h1 className="text-xl mb-1 w-52 font-bold shrink-0">어린이집 현황</h1>
            <div>
              <p>
                ·{' '}
                <Link className="font-bold underline" href="https://echarts.apache.org/en/index.html">
                  Echarts
                </Link>
                를 활용하여 1,500개 이상의 센서 데이터 현황 표출
              </p>
              <p>· 어린이집 컴포넌트 검색, 페이지네이션, 카테고리별 조회 기능 개발</p>
              <p>
                · 대용량 데이터 처리를 위한 Map 자료구조 활용 ⇒ <span className="font-bold">성능 7% 개선</span>
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
            · public/posts 폴더 안에 카테고리별로 폴더를 찢어도 모든 마크다운 파일을 찾을 수 있도록 <span className="font-bold">재귀함수 사용</span>
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
            · <span className="font-bold">&quot;혼자서도 하고 싶다&quot;, &quot;친구가 없다&quot;</span> 라는 유저 피드백을 해결하기 위해{' '}
            <span className="font-bold">AI 모드</span> 개발
          </p>
          <p>
            · 가입 회원 수 <span className="font-bold">244</span>명, 설문조사 <span className="font-bold">57</span>건, 평점{' '}
            <span className="font-bold">4.54</span>
          </p>
          {/* <br />
          <span className="text-sm text-gray-400">2022년 12월 - 2022년 1월</span>
          <div className="flex items-center">
            <Link href="https://github.com/2021-SMHRD-KDT-AI-6/Gaericature-" className="mr-2 text-2xl underline mb-2 shrink-0">
              개리커쳐
            </Link>
            <span className="text-green-500">Android, Back-end Engineer (Android Studio, Flask, MySQL)</span>
          </div>
          <div className="flex">
            <Link href="https://github.com/2021-SMHRD-KDT-AI-6/Gaericature-" className="mr-1 underline mb-2">
              시연영상
            </Link>
            <span>/</span>
            <Link href="http://www.aitimes.com/news/articleView.html?idxno=143094" className="ml-1 underline mb-2">
              기사
            </Link>
          </div>
          <p>딥러닝 모델을 사용하여 강아지를 캐릭터화 시켜주는 앱 프로젝트입니다.</p>
          <p>캐릭터화 된 사진을 적용한 굿즈를 판매하는 페이지, 장바구니 등을 개발했습니다.</p>
          <br />
          <p>서버와 이미지를 주고 받을 때 용량이 너무 커서 통신이 안되는 문제가 생겨 Bitmap 리사이징을 통해 해결했습니다.</p> */}
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
          <p>마피양 - 최고 프로젝트 상 수상</p>
          <br />
          <span className="text-sm text-gray-400">2022년 1월</span>
          <Link href="https://smhrd.or.kr/" className="mr-2 text-2xl underline mb-2 font-bold">
            스마트인재개발원
          </Link>
          <p>모범상</p>
          <p>개리커쳐 - 최종 프로젝트 우수상</p>
          <p>Java Festival 우수상</p>
        </div>
      </div>
    </Container>
  );
}
