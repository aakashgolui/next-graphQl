"use client";
import { Breadcrumbs, Loader, PostCard } from "@/components";
import { GET_USER_POSTS } from "@/utils";
import { useQuery } from "@apollo/client";
import { useParams } from "next/navigation";

const UserPostsPage = () => {
  const params = useParams();
  const userId = Array.isArray(params?.id) ? params.id[0] : params?.id || "1";
  const { loading, error, data } = useQuery(GET_USER_POSTS(userId));

  if (loading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;

  const posts = data?.user?.posts?.data;

  return (
    <div className="flex flex-col gap-2">
      <Breadcrumbs
        links={[
          { title: "Posts", href: "/posts" },
          { title: "User Posts", href: "" },
        ]}
      />
      {posts.map((post: any) => (
        <PostCard key={post.id} id={post.id} title={post.title} />
      ))}
    </div>
  );
};

export default UserPostsPage;
