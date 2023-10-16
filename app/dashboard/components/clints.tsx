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
    invoice: "Joey Litt",
    paymentStatus: "Invested",
    totalAmount: "$150.00",
    paymentMethod: "Commodity",
  },
  {
    invoice: "Harvey Spectre",
    paymentStatus: "Invested",
    totalAmount: "$350.00",
    paymentMethod: "Property",
  },
  {
    invoice: "Donna Polsion",
    paymentStatus: "Invested",
    totalAmount: "$450.00",
    paymentMethod: "Stocks",
  },
  {
    invoice: "Steve Harvey",
    paymentStatus: "Invested",
    totalAmount: "$550.00",
    paymentMethod: "Stocks",
  },
  {
    invoice: "Andrew Carl",
    paymentStatus: "Invested",
    totalAmount: "$200.00",
    paymentMethod: "Stocks",
  },
  {
    invoice: "Jimmy Bathe",
    paymentStatus: "Invested",
    totalAmount: "$300.00",
    paymentMethod: "Stocks",
  },
];

export function TableDemo() {
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
