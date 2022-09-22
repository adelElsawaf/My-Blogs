import Link from "next/link"
export default function Home() {
  return (
    <div className="content">
      <h1>Welcome To Adel Blogs</h1>
      <div className="home">
        <h2>To View All Users Please Click Here</h2>
        <Link href="/users"><a className="btn" >View Users</a></Link>
        <h2>To View All Posts Please Click Here</h2>
        <Link href="/posts"><a className="btn">View Posts</a></Link>
      </div>
    </div>
  )
}
