import Link from "next/link"
export default function Home() {
  return (
    <div className="content">
      <h1>Welcome To Adel Blogs</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro reiciendis ea quibusdam nemo nobis hic iure quos odio corporis, laudantium animi laborum voluptatem quia, veniam fuga aperiam officia sequi!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro reiciendis ea quibusdam nemo nobis hic iure quos odio corporis, laudantium animi laborum voluptatem quia, veniam fuga aperiam officia sequi!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro reiciendis ea quibusdam nemo nobis hic iure quos odio corporis, laudantium animi laborum voluptatem quia, veniam fuga aperiam officia sequi!</p>
      <section className="navigators">
        <h2>To View All Users Please Click Here</h2>
        <Link href="/users"><a className="btn" >View Users</a></Link>
      </section>
      <section className="navigators">
        <h2>To View All Posts Please Click Here</h2>
        <Link href="/posts"><a className="btn">View Posts</a></Link>
      </section>

    </div>
  )
}
