import { GetServerSideProps } from "next";
import { fetchUser } from "@/services/userServices";
import UserManagement from "@/components/templates/UserManagement";
import { User } from "@/types/User";

export const getServerSideProps: GetServerSideProps = async () => {
  const filters = {};
  const page = 1;

  try {
    const initialUsers: User[] = await fetchUser(filters, page);

    return {
      props: {
        initialUsers,
        initialPage: page,
      },
    };
  } catch (error) {
    console.error("Error al obtener usuarios en SSR:", error);

    return {
      props: {
        initialUsers: [],
        initialPage: 1,
      },
    };
  }
};

const Home = ({
  initialUsers,
  initialPage,
}: {
  initialUsers: User[];
  initialPage: number;
}) => {
  return (
    <div
      style={{
        width: "100%",
        height: "'100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <UserManagement initialUsers={initialUsers} initialPage={initialPage} />
    </div>
  );
};

export default Home;
