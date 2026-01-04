import useAuth from "../../hooks/useAuth";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth(); // role এখান থেকে আসবে

  if (loading) return <p>Loading...</p>;

  if (user?.role !== "admin") {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default AdminRoute;