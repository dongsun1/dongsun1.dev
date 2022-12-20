import Link from 'next/link';
import Container from '../components/container';
import Title from '../components/title';

export default function About() {
  return (
    <Container title="dongsun1 resume" desc="프론트엔드 개발자 김동선 Resume입니다.">
      <div className="container mx-auto max-w-3xl px-4 lg:px-0">
        <Title title="Resume" />
        <div className="flex flex-col mt-10">
          <h1 className="text-3xl font-bold mb-3">Profile</h1>
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
          <h1 className="text-3xl font-bold mb-3">Career</h1>
          <span className="text-sm text-gray-400">2022년 7월 - 현재</span>
          <div className="flex items-center mb-2">
            <h2 className="mr-2 text-2xl">그렉터</h2>
            <span className="text-green-500">Front-end Engineer (Nuxt.js)</span>
          </div>
          <p>데이터기반 시설관리 플랫폼 기업으로 프론트엔드 개발자로 합류했습니다.</p>
          <p>기획자나 디자이너가 따로 없었기 때문에 기획과 디자인에 적극적으로 참여할 수 있었습니다.</p>
          <br />
          <h1 className="text-xl mb-1">- Json Logic</h1>
          <p>
            <Link className="font-bold underline" href="https://www.npmjs.com/package/jsoneditor">
              Json Editor
            </Link>
            을 활용하여 Json Logic을 입력할 수 있도록 개발했지만 Json Logic을 모르는 사용자는 사용할 수 없었습니다.
          </p>
          <p>따라서 좀 더 사용자 친화적인 UI를 위해 재귀 컴포넌트와 재귀함수를 사용하여 Combo Box로 Json Logic을 만들 수 있도록 개발했습니다.</p>
          <br />
          <h1 className="text-xl mb-1">- 시설 점검 일정</h1>
          <p>
            시설 점검 일정 관리를 위해{' '}
            <Link className="font-bold underline" href="https://fullcalendar.io/">
              Full Calendar
            </Link>
            를 활용하여 일정 관리 페이지를 개발했습니다.
          </p>
          <p>주기적으로 점검하는 일정을 위해 Cron 표현식을 활용하여 한 번의 등록으로 여러 일정을 등록 가능하도록 개발했습니다.</p>
          <p>
            일정 관리를 Data Grid에서 하는 것이 편하다는 사용자를 위해 Full Calendar 라이브러리에서 제공하는 함수를 활용하여 Data Grid 버전을 추가 개발했습니다.
          </p>
          <br />
          <h1 className="text-xl mb-1">- 어린이집 현황</h1>
          <p>
            어린이집 데이터 현황을 한눈에 알아보기 위해{' '}
            <Link className="font-bold underline" href="https://echarts.apache.org/en/index.html">
              Echarts
            </Link>
            를 활용하여 데이터 현황을 표출했습니다.
          </p>
          <p>약 150개의 어린이집에 3~10개의 센서 데이터가 쌓이기 때문에 성능을 고려하여 페이지네이션과 hash, props를 활용하여 개발했습니다.</p>
          <br />
          <h1 className="text-xl mb-1">- 프로젝트 통합</h1>
          <p>제품을 판매한 시청/구청마다 코드가 비슷하지만 프로젝트 레파지토리가 달라서 유지보수를 위해 하나의 레파지토리로 통합했습니다.</p>
          <p>통합하는 과정에서 데이터 구조가 조금씩 달라서 발생하는 에러를 해결하기 위해 수많은 예외 처리를 경험할 수 있었습니다.</p>
          <p>또한 경량화와 개발 속도를 위해 중복되는 코드들을 컴포넌트화하여 재사용성을 극대화했습니다.</p>
        </div>
        <div className="flex flex-col mt-12">
          <h1 className="text-3xl font-bold mb-3">Project</h1>
          <span className="text-sm text-gray-400">2022년 11월 - 현재</span>
          <div className="flex items-center">
            <Link href="https://github.com/dongsun1/dongsun1.dev" className="mr-2 text-2xl underline mb-2">
              블로그
            </Link>
            <span className="text-green-500">Front-end Engineer (Next.js)</span>
          </div>
          <p>나만의 블로그를 운영하기 위해 개발했습니다.</p>
          <p>SEO 최적화를 위해 SSR을 적용했고 TOC, 댓글, 다크 모드 등을 개발했습니다.</p>
          <br />
          <p>utterances를 사용할 때 테마가 바뀌면 재생성되는 문제가 있어 utterances가 있다면 제거 후 테마가 적용된 새로운 utterances를 생성했습니다.</p>
          <br />
          <p>public/posts 폴더 안에 마크다운 파일들을 관리했는데 파일이 점점 많아지면서 관리하기가 힘들어졌습니다.</p>
          <p>카테고리별로 폴더를 찢어도 모든 마크다운 파일을 찾을 수 있도록 재귀함수를 사용해서 개발했습니다.</p>
          <br />
          <p>모바일 환경에서 볼 수 있도록 반응형으로 제작했습니다.</p>
          <br />
          <span className="text-sm text-gray-400">2022년 4월 - 2022년 6월</span>
          <div className="flex items-center">
            <Link href="https://github.com/dongsun1/last-project-nest" className="mr-2 text-2xl underline mb-2 shrink-0">
              마피양
            </Link>
            <span className="text-green-500">Back-end Engineer (Node.js, Express.js, Nest.js, MongoDB)</span>
          </div>
          <p>
            실시간 통신과 화상 채팅을 위해{' '}
            <Link className="font-bold underline" href="https://socket.io/">
              Socket.io,
            </Link>{' '}
            <Link className="font-bold underline" href="https://peerjs.com/">
              Peer.js
            </Link>
            를 활용하여 실시간 마피아 게임을 개발했습니다.
          </p>
          <p>Express.js로 먼저 개발 후 Nest.js로 마이그레이션 후 테스트 코드를 통해 예외처리했습니다.</p>
          <br />
          <p>Socket.io의 Room 기능 개발 시 통신이 중복되는 문제가 생겨 방장만 서버와 통신을 하도록 수정하여 해결했습니다.</p>
          <br />
          <p>설문조사를 통해 가장 많이 받은 피드백이 &quot;혼자서도 하고 싶다&quot;, &quot;친구가 없다&quot; 였습니다.</p>
          <p>혼자서도 게임이 가능하도록 AI 모드를 추가 개발했습니다.</p>
          <br />
          <p>가입 회원 수 244명, 설문조사 57건, 평점 4.54</p>
          <br />
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
          <p>서버와 이미지를 주고 받을 때 용량이 너무 커서 통신이 안되는 문제가 생겨 Bitmap 리사이징을 통해 해결했습니다.</p>
        </div>
        <div className="flex flex-col mt-12">
          <h1 className="text-3xl font-bold mb-3">Education</h1>
          <span className="text-sm text-gray-400">2022년 3월 - 2022년 6월</span>
          <div className="flex">
            <Link href="https://hanghae99.spartacodingclub.kr/" className="mr-2 text-2xl underline mb-2">
              항해99
            </Link>
          </div>
          <p>99일간 9am부터 9pm까지 공부하는 개발자 양성 교육 과정</p>
          <p>Node.js 프로젝트 진행</p>
          <p>유저 피드백 수용 경험</p>
          <p>디자이너 협업 및 프로덕트 출시 경험</p>
          <br />
          <span className="text-sm text-gray-400">2021년 8월 - 2022년 1월</span>
          <div className="flex">
            <Link href="https://smhrd.or.kr/" className="mr-2 text-2xl underline mb-2">
              스마트인재개발원
            </Link>
          </div>
          <p>AI 활용을 위한 딥러닝 교육을 포함한 총 928시간의 교육 과정</p>
          <p>JSP/Servlet, Android, Flask 프로젝트 진행</p>
        </div>
        <div className="flex flex-col mt-12">
          <h1 className="text-3xl font-bold mb-3">Awards</h1>
          <span className="text-sm text-gray-400">2022년 6월</span>
          <Link href="https://hanghae99.spartacodingclub.kr/" className="mr-2 text-2xl underline mb-2">
            항해99
          </Link>
          <p>마피양 - 최고 프로젝트 상 수상</p>
          <br />
          <span className="text-sm text-gray-400">2022년 1월</span>
          <Link href="https://smhrd.or.kr/" className="mr-2 text-2xl underline mb-2">
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
