import Posts from '../components/posts';
import Sidebar from '../components/sidebar';

export default function Index() {
  return (
    <div className="container mx-auto">
      <div className="flex px-32">
        <Posts />
        <Sidebar />
      </div>
    </div>
  );
}
