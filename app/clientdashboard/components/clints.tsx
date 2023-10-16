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
    invoice: "Sam John",
    paymentStatus: "Invested",
    totalAmount: "$250.00",
    paymentMethod: "Stocks",
  },
  {
    invoice: "Sam John",
    paymentStatus: "Invested",
    totalAmount: "$250.00",
    paymentMethod: "Stocks",
  },
  {
    invoice: "Sam John",
    paymentStatus: "Invested",
    totalAmount: "$250.00",
    paymentMethod: "Stocks",
  },
  {
    invoice: "Sam John",
    paymentStatus: "Invested",
    totalAmount: "$250.00",
    paymentMethod: "Stocks",
  },
  {
    invoice: "Sam John",
    paymentStatus: "Invested",
    totalAmount: "$250.00",
    paymentMethod: "Stocks",
  },
  {
    invoice: "Sam John",
    paymentStatus: "Invested",
    totalAmount: "$250.00",
    paymentMethod: "Stocks",
  },
  {
    invoice: "Sam John",
    paymentStatus: "Invested",
    totalAmount: "$250.00",
    paymentMethod: "Stocks",
  },
  {
    invoice: "Sam John",
    paymentStatus: "Invested",
    totalAmount: "$250.00",
    paymentMethod: "Stocks",
  },
  {
    invoice: "Sam John",
    paymentStatus: "Invested",
    totalAmount: "$250.00",
    paymentMethod: "Stocks",
  },
  {
    invoice: "Sam John",
    paymentStatus: "Invested",
    totalAmount: "$250.00",
    paymentMethod: "Stocks",
  },
  {
    invoice: "Sam John",
    paymentStatus: "Invested",
    totalAmount: "$250.00",
    paymentMethod: "Stocks",
  },
  {
    invoice: "Sam John",
    paymentStatus: "Invested",
    totalAmount: "$250.00",
    paymentMethod: "Stocks",
  },
];

export function TableDemo() {
  return (
    <Table>
      <TableCaption>Your investment portfolio.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">AdvisorName</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>InvestmentType</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default TableDemo;
