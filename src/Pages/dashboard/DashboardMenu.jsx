import { NavLink } from "react-router";
import useAuth from "../hooks/useAuth";

const DashboardMenu = () => {
  const { user } = useAuth();

  return (
    <nav className="space-y-2">
      {/* User Profile */}
      <NavLink to="/dashboard/user/profile">
        My Profile
      </NavLink>

      {/* Admin Profile */}
      {user?.role === "admin" && (
        <NavLink to="/dashboard/admin/profile">
          Admin Profile
        </NavLink>
      )}
    </nav>
  );
};

export default DashboardMenu;