import Link from "next/link";

interface NavLinkProps {
  title: string;
  badgeCount: number;
  href: string;
}

const NavLink: React.FC<NavLinkProps> = ({ title, badgeCount, href }) => {
  return (
    <div className="navlinksContainer">
      <Link className="navlinks" href={href}>
        {title}
      </Link>
      <span className="badge">{badgeCount}</span>
      <style jsx>{`
        .navlinksContainer .badge {
          padding-left: 9px;
          padding-right: 9px;
          border-radius: 9px;
          background-color: #f52755;
          font-size: 14px;
          vertical-align: top;
        }
      `}</style>
    </div>
  );
};

export default NavLink;
