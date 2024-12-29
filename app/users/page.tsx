"use client";
import { Loader, UserCard } from "@/components";
import { GET_USERS } from "@/utils";
import { useQuery } from "@apollo/client";

const Userspage = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <Loader />;

  const userList = data?.users?.data;

  return (
    <div className="flex flex-wrap gap-2">
      {userList.map((user: any) => (
        <UserCard
          key={user.id}
          id={user.id}
          name={user.username}
          email={user.email}
        />
      ))}
    </div>
  );
};

export default Userspage;
