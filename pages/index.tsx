import Posts from '../components/posts';
import Sidebar from '../components/sidebar';

export default function Index() {
  return (
    <div className="container flex mx-auto">
      <Posts />
      <Sidebar />
    </div>
  );
}
