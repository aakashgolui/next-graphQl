"use client";
import { useQuery } from "@apollo/client";
import { GET_ALL_POSTS } from "@/utils";
import { Breadcrumbs, CreatePost, Loader, PostCard } from "@/components";
import { Pagination } from "@mantine/core";
import { useState } from "react";

const PostsPage: React.FC = () => {
  const perPage = 5;
  const [activePage, setPage] = useState(1);
  const { loading, error, data } = useQuery(GET_ALL_POSTS, {
    variables: {
      options: {
        sort: [
          {
            field: "id",
            order: "DESC",
          },
        ],
        paginate: {
          page: activePage,
          limit: perPage,
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

      <CreatePost />

      {posts.map((post: any) => (
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
          userName={post.user.username}
        />
      ))}

      <Pagination
        total={total / perPage}
        value={activePage}
        onChange={setPage}
        mt="sm"
      />
    </div>
  );
};

export default PostsPage;
