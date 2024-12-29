"use client";
import { useQuery } from "@apollo/client";
import { GET_ALL_POSTS } from "@/utils";
import { Breadcrumbs, Loader, PostCard } from "@/components";
import { Pagination } from "@mantine/core";
import { useState } from "react";

const PostsPage: React.FC = () => {
  const [activePage, setPage] = useState(1);
  const { loading, error, data } = useQuery(GET_ALL_POSTS, {
    variables: {
      options: {
        paginate: {
          page: activePage,
          limit: 5,
        },
      },
    },
  });

  if (loading) return <Loader />;

  if (error) return <p>Error: {error.message}</p>;

  const posts = data?.posts?.data || [];
  const total = data?.posts?.meta?.totalCount || 0;

  return (
    <div className="flex flex-col gap-2">
      <Breadcrumbs links={[{ title: "Posts", href: "/posts" }]} />

      {posts.map((post: any) => (
        <PostCard key={post.id} id={post.id} title={post.title} />
      ))}

      <Pagination total={total} value={activePage} onChange={setPage} mt="sm" />
    </div>
  );
};

export default PostsPage;
