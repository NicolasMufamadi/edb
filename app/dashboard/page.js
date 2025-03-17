"use client";
import { Logout, Notification, Ticket } from "@carbon/icons-react";
import {
  Button,
  TableHeader,
  Table,
  TableRow,
  TableHead,
  TableBody,
  DataTable,
  TableCell,
  TableContainer,
  Pagination,
  TableToolbar,
  TableToolbarContent,
  TableToolbarSearch,
} from "@carbon/react";
import Image from "next/image";

export default function Dashboard() {

  const headers = [
    {
      header: "Applicant Name",
      key: "applicant_name",
    },
    {
      header: "Permit Name",
      key: "permit_name",
    },
    {
      header: "Progress",
      key: "progress",
    },
    {
      header: "Date Last Modified",
      key: "date_modified",
    },
    {
      header: "Persona Type",
      key: "persona_type",
    },
    {
      header: "Action",
      key: "action",
    },
  ];

  const rows = [
    {
      id: "1",
      applicant_name: "Jane Smith",
      permit_name: "Education",
      progress: "Saved",
      date_modified: "2025-01/15 11:20:00.0",
      persona_type: 'Non Citizen',
      action: (
        <Button className="btn" size="sm" style={{ paddingRight: "10px" }}>
          View Application
        </Button>
      ),
    },
  ];

  const logout = () => {
    localStorage.removeItem("username");
    window.location.href = "/login";
  };

  return (
    <div style={{ display: "flex" }}>
      <div className="profile">
        <Image
          src="/profile.jpg"
          height={80}
          width={80}
          alt="profile"
          style={{ borderRadius: "50%", marginLeft: "7rem", marginTop: "2rem" }}
        />
        <p className="profile-name">Jane Smith</p>
        <p className="profile-email">jane.smith@xyz.com</p>
        <p className="profile-email">+27 67 123 5678</p>
        <Button
          className="btn"
          size="sm"
          style={{ marginLeft: "6.5rem", paddingRight: "12px" }}
        >
          Edit Profile
        </Button>
        <hr className="line"></hr>
        <div
          style={{
            display: "flex",
            marginTop: "1.87rem",
            marginLeft: "3.5rem",
          }}
        >
          <Notification
            size={20}
            style={{ marginTop: "2px", marginRight: "5px" }}
          />
          <p style={{ fontWeight: 600 }}>Notification</p>
          <p className="number" style={{ marginLeft: "3rem" }}>
            4
          </p>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "0.25rem",
            marginLeft: "3.5rem",
          }}
        >
          <Ticket size={20} style={{ marginTop: "2px", marginRight: "5px" }} />
          <p style={{ fontWeight: 600 }}>Tickets</p>
          <p className="number" style={{ marginLeft: "5rem" }}>
            1
          </p>
        </div>
        <hr className="line"></hr>
        <Button
          className="btn"
          size="sm"
          style={{
            marginLeft: "6rem",
            marginTop: "1.81rem",
          }}
          kind="tertiary"
          renderIcon={
            Logout
          }
          onClick={logout}
        >
          Logout
        </Button>
      </div>
      <div style={{ marginLeft: "5rem", marginTop: "3rem" }}>
          <DataTable rows={rows} headers={headers} size="lg">
            {({
              rows,
              headers,
              getTableProps,
              getHeaderProps,
              getRowProps,
            }) => (
              <TableContainer title="My Permit Applications">
              <Table {...getTableProps()}>
                <TableHead>
                  <TableRow>
                    {headers.map((header) => (
                      <TableHeader key={header} {...getHeaderProps({ header })}>
                        {header.header}
                      </TableHeader>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row} {...getRowProps({ row })}>
                      {row.cells.map((cell) => (
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            )}
          </DataTable>
          <Pagination
            size="lg"
            backwardText="Previous page"
            forwardText="Next page"
            itemsPerPageText="Items per page:"
            onChange={function noRefCheck() {}}
            page={1}
            pageSize={10}
            pageSizes={[10, 20, 30, 40, 50]}
            totalItems={100}
          />
      </div>
    </div>
  );
}
