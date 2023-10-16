import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    requested: "10/04/23",
    investmenttype: "Stocks",
    totalAmount: "$300.00",
    status: "Approved",
  },
  {
    requested: "10/04/23",
    investmenttype: "Stocks",
    totalAmount: "$300.00",
    status: "Approved",
  },
  {
    requested: "04/05/23",
    investmenttype: "Stocks",
    totalAmount: "$300.00",
    status: "Approved",
  },
  {
    requested: "01/09/23",
    investmenttype: "Stocks",
    totalAmount: "$300.00",
    status: "Approved",
  },
];

export function TableDemoyes() {
  return (
    <Table>
      <TableCaption>Your Requests For Investment</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Requested</TableHead>
          <TableHead>InvestmentType</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead className="w-[100px] text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.requested}>
            <TableCell className="font-medium">{invoice.requested}</TableCell>
            <TableCell>{invoice.investmenttype}</TableCell>
            <TableCell>{invoice.totalAmount}</TableCell>
            <TableCell className="text-right">{invoice.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default TableDemoyes;
