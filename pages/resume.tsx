import Link from 'next/link';
import Title from '../components/title';

export default function About() {
  return (
    <div className="container mx-auto max-w-3xl">
      <Title title="Resume" />
      <div className="flex flex-col mt-10">
        <h1 className="text-3xl font-bold mb-3">프로필</h1>
        <div className="flex">
          <span className="w-1/4 mb-2 font-bold">이름</span>
          <span>김동선</span>
        </div>
        <div className="flex">
          <span className="w-1/4 mb-2 font-bold">생년월일</span>
          <span>1997년 9월 7일</span>
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
            <br />
            <p>리더로서 팀을 이끄는 것을 좋아합니다.</p>
            <p>팀원들과 함께 길을 헤쳐나가며 완성했을 때 더욱 만족감을 느낍니다.</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-12">
        <h1 className="text-3xl font-bold mb-3">경력</h1>
        <span className="text-sm text-gray-400">2022년 7월 - 현재</span>
        <div className="flex items-center mb-2">
          <h2 className="mr-2 text-2xl">그렉터</h2>
          <span className="text-green-500">Front-end Engineer (Nuxt.js)</span>
        </div>
        <p>데이터기반 시설관리 플랫폼 기업으로 프론트엔드 개발자로 합류했습니다.</p>
        <p>기획자나 디자이너가 따로 없었기 때문에 기획과 디자인에 적극적으로 참여할 수 있었습니다.</p>
        <br />
        <h1 className="text-xl mb-1">- 시설 점검 일정</h1>
        <p>
          시설 점검 일정 관리를 위해{' '}
          <Link className="font-bold underline" href="https://fullcalendar.io/">
            Full Calendar
          </Link>{' '}
          라이브러리를 활용하여 일정 관리 페이지를 개발했습니다.
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
          </Link>{' '}
          라이브러리를 활용하여 데이터 현황을 표출하였습니다.
        </p>
        <p>약 150개의 어린이집에 3~10개의 센서 데이터가 쌓이기 때문에 성능을 고려하여 페이지네이션과 hash, props를 활용하며 개발했습니다.</p>
        <br />
        <h1 className="text-xl mb-1">- 프로젝트 통합</h1>
        <p>제품을 판매한 시청/구청마다 코드가 비슷하지만 프로젝트 레파지토리가 달라서 하나의 레파지토리로 통합했습니다.</p>
        <p>통합하는 과정에서 데이터 구조가 조금씩 달라서 발생하는 에러를 해결하기 위해 수많은 예외 처리를 경험할 수 있었습니다.</p>
        <p>또한 경량화와 개발 속도를 위해 중복되는 코드들을 컴포넌트화하여 재사용성을 극대화했습니다.</p>
      </div>
      <div className="flex flex-col mt-12">
        <h1 className="text-3xl font-bold mb-3">프로젝트</h1>
        <span className="text-sm text-gray-400">2022년 4월 - 2022년 6월</span>
        <div className="flex items-center mb-2">
          <h2 className="mr-2 text-2xl">마피양</h2>
          <span className="text-green-500">Back-end Engineer (Node.js, Express.js, Nest.js)</span>
        </div>
        <p>
          실시간 통신과 화상 채팅을 위해{' '}
          <Link className="font-bold underline" href="https://socket.io/">
            Socket.io,
          </Link>{' '}
          <Link className="font-bold underline" href="https://socket.io/">
            WebRTC
          </Link>
          라이브러리를 활용하여 실시간 마피아게임을 개발했습니다.
        </p>
      </div>
    </div>
  );
}
