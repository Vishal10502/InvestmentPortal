"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Define an interface for your client data
interface ClientData {
  clientName: string;
  status: string;
  investmentType: string;
  investmentAmount: number;
}

export function TableDemo() {
  const [clientData, setClientData] = useState<ClientData[]>([]);

  useEffect(() => {
    const advisorId = localStorage.getItem("advisorId");

    if (advisorId) {
      fetch(`/api/User/AdvisorDashboard/${advisorId}`)
        .then((response) => response.json())
        .then((data: ClientData[]) => {
          // Specify the type here
          setClientData(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, []);

  return (
    <Table>
      <TableCaption>A list of your recent Clients.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">CustomerName</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>InvestmentType</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {clientData.map((client) => (
          <TableRow key={client.clientName}>
            <TableCell className="font-medium">{client.clientName}</TableCell>
            <TableCell>{client.status}</TableCell>
            <TableCell>{client.investmentType}</TableCell>
            <TableCell className="text-right">
              {client.investmentAmount}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default TableDemo;
