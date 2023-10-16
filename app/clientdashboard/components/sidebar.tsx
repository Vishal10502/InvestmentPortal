// components/Sidebar.js
import Link from "next/link";
import {
  FaHome,
  FaChartLine,
  FaUser,
  FaCog,
  FaRegistered,
  FaSignOutAlt,
  FaChartArea,
  FaResearchgate,
  FaWallet,
  FaMoneyBill,
  FaMoneyCheck,
  FaMoneyBillWaveAlt,
  FaChalkboardTeacher,
} from "react-icons/fa"; // You may need to install these icons.
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar rounded-lg border bg-card text-card-foreground shadow-4xl">
      <ul className="sidebar-menu">
        <li className="sidebar-item">
          <Link href="/advisor-dashboard">
            <FaHome /> Dashboard
          </Link>
          <br />
          <br />
        </li>
        <li className="sidebar-item">
          <Link href="/advisor-dashboard/investments">
            <FaChartLine /> Portfolio
          </Link>
          <br />
          <br />
        </li>
        <li className="sidebar-item">
          <Link href="/advisor-dashboard/investments">
            <FaChartArea /> Trading & Market
          </Link>
          <br />
          <br />
        </li>
        <li className="sidebar-item">
          <Link href="/advisor-dashboard/investments">
            <FaResearchgate /> Reasearch Portal
          </Link>
          <br />
          <br />
        </li>
        <li className="sidebar-item">
          <Link href="/advisor-dashboard/investments">
            <FaWallet /> Wallet Trafer Pay
          </Link>
          <br />
          <br />
        </li>
        <li className="sidebar-item">
          <Link href="/advisor-dashboard/investments">
            <FaMoneyCheck /> Transactions
          </Link>
          <br />
          <br />
        </li>
        <li className="sidebar-item">
          <Link href="https://www.youtube.com/@NateOBrien/playlists">
            <FaChalkboardTeacher /> Tutorial
          </Link>
          <br />
          <br />
        </li>
        <li className="sidebar-item">
          <Link href="/advisor-dashboard/profile">
            <FaUser /> Profile
          </Link>
          <br />
          <br />
        </li>
        <li className="sidebar-item">
          <Link href="/advisor-dashboard/profile">
            <FaCog /> Settings
          </Link>
          <br />
          <br />
        </li>
        <li className="sidebar-item">
          <Link href="/login">
            <FaSignOutAlt /> Logout
          </Link>

          <br />
          <br />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
