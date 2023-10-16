// pages/advisor-dashboard.js
import Sidebar from "./components/sidebar";
import AccordionDemo from "./components/accordian";
import CardDemo from "./components/notification";
import TableDemo from "./components/clints";
import CardDemo01 from "./components/card";
import TableDemoyes from "./components/NewClient";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SeparatorHorizontal, SeparatorHorizontalIcon } from "lucide-react";

const AdvisorDashboard = () => {
  return (
    <div className="dashboard-container absolute top-20 grid grid-cols-8 gap-2">
      <div className="">
        <Sidebar />
        <div className="flow-root">
          <div className="float-left absolute top-0 right-96">
            <TableDemoyes />
            <br />
            <CardDemo01 />
            <Link href="/createinvestment">
              <Button className="w-full" type="submit">
                Add Investment
              </Button>
            </Link>
          </div>
          <div className="float-left absolute top-0 left-60">
            <TableDemo />
          </div>
        </div>
        <div className="absolute top-0 right-5">
          <CardDemo />
        </div>
        <main className="dashboard-content">
          {/* Your advisor dashboard content goes here */}
        </main>
      </div>
    </div>
  );
};

export default AdvisorDashboard;
