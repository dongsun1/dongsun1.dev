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
            <p>저는 프론트엔드 개발자이지만 백엔드 개발 경험이 있어 풀스택 개발이 가능합니다.</p>
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
        <p>
          시설 점검 일정 관리를 위해{' '}
          <Link className="font-bold underline" href="https://fullcalendar.io/">
            Full Calendar
          </Link>{' '}
          라이브러리를 활용하여 일정 관리 페이지를 개발했습니다.
        </p>
        <p>주기적으로 점검하는 일정을 위해 Cron 표현식을 활용하여 한번의 등록으로 여러 일정을 등록 가능하도록 개발했습니다.</p>
        <p>
          일정 관리를 Data Grid에서 하는 것이 편하다는 사용자를 위해 Full Calendar 라이브러리에서 제공하는 함수를 활용하여 Data Grid 버전을 추가 개발했습니다.
        </p>
      </div>
    </div>
  );
}
