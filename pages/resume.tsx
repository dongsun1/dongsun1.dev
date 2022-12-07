import Title from '../components/title';

export default function About() {
  return (
    <div className="container mx-auto max-w-3xl">
      <Title title="Resume" />
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold">프로필</h1>
        <div className="flex">
          <div className="w-12">이름</div>
          <div>김동선</div>
        </div>
      </div>
    </div>
  );
}
