import Image from 'next/image';
import styles from './page.module.css';
import PostList from '@/components/PostList';
import Parent from '@/children/Parent';
import Child from '@/children/Child';
import EventExample from './event-example/page';
import UseState from './use-state-example/page';
import UserContext from './use-context/page';
import UseRefExample from './use-ref-example/page';
import ItemList from '@/components/generics/ItemList';

export default function Home() {
  return (
    // <main>
    //   <PostList />
    // </main>
    // <div>
    //   <Parent>
    //     <Child />
    //   </Parent>
    // </div>
    <main>
      {/* <EventExample /> */}
      {/* <UseState /> */}
      {/* <UserContext /> */}
      {/* <UseRefExample /> */}
      <ItemList />
    </main>
  );
}
