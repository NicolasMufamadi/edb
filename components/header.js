"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Document,
  SearchLocate,
  Result,
  Information,
  Account,
  UserAvatar,
  Settings,
} from "@carbon/icons-react";
import { Menu, MenuItem } from "@mui/material";
import { Button, IconButton } from "@carbon/react";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

export default function Header() {

  const [userName, setUsername] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const pathname = usePathname();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setUsername(localStorage.getItem("username"));
  }, []);

  const logout = () => {
    localStorage.removeItem("username");
    window.location.href = "/login";
  };

  return (
    <nav className="navbar">
      <div className="wrapper">
        <div className="div-one">
          <Image
            src="/mauritius.png"
            alt="Coat Of Arms Of Mauritius"
            className="image"
            width={53}
            height={52}
          />
          <p className="logo">Mauritius Business Licensing Platform</p>
        </div>

        <div className="div-two">
          <div className="block">
            <div style={{ display: "flex" }}>
              <div>
                <Home className="icon" />
              </div>
              <div>
                <Link href="/" className={`link ${pathname === '/' ? "active" : "not-active"}`}>
                  Home
                </Link>
              </div>
            </div>
          </div>
          <div className="block">
            <div style={{ display: "flex" }}>
              <div>
                <Document className="icon" />
              </div>
              <div>
                <Link href="/apply" className={`link ${pathname === '/apply' ? "active" : "not-active"}`}>
                  Licensing
                </Link>
              </div>
            </div>
          </div>
          <div className="block">
            <div style={{ display: "flex" }}>
              <div>
                <SearchLocate className="icon" />
              </div>
              <div>
                <Link href="/" className={`link ${pathname === '/search' ? "active" : "not-active"}`}>
                  Search Permits
                </Link>
              </div>
            </div>
          </div>
          <div className="block">
            <div style={{ display: "flex" }}>
              <div>
                <Result className="icon" />
              </div>
              <div>
                <Link href="/dashboard" className={`link ${pathname === '/dashboard' ? "active" : "not-active"}`}>
                  Dashboard
                </Link>
              </div>
            </div>
          </div>
          <div className="block">
            <div style={{ display: "flex" }}>
              <div>
                <Information className="icon" />
              </div>
              <div>
                <Link href="/" className={`link ${pathname === '/faq' ? "active" : "not-active"}`}>
                  FAQs & Notices
                </Link>
              </div>
            </div>
          </div>
          {userName ? (
            <>
              <div className="block">
                <div style={{ display: "flex" }}>
                  <div>
                    <UserAvatar
                      className="icon"
                      onClick={handleClick}
                      id="demo-positioned-button"
                      aria-controls={open ? "demo-positioned-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      style={{cursor: 'pointer'}}
                    />
                    <div style={{marginTop: '-20px',marginLeft: '20px'}}><span>{userName}</span></div>
                    

                    <Menu
                      id="demo-positioned-menu"
                      aria-labelledby="demo-positioned-button"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                    >
                      <MenuItem onClick={handleClose}>Edit Profile</MenuItem>
                      <MenuItem onClick={logout}>Logout</MenuItem>
                    </Menu>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="block">
                <div>
                  <div>
                    <Button
                      className="btn"
                      kind="tertiary"
                      size="sm"
                      style={{
                        padding: "5px 15px",
                        marginTop: "-10px",
                        borderRadius: "5px",
                      }}
                    >
                      <Link href="/register" className="btn-link">
                        Register
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="block">
                <div>
                  <div>
                    <Button
                      className="btn"
                      kind="tertiary"
                      size="sm"
                      style={{
                        padding: "5px 15px",
                        marginTop: "-10px",
                        borderRadius: "5px",
                      }}
                    >
                      <Link href="/login" className="btn-link">
                        Login
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
