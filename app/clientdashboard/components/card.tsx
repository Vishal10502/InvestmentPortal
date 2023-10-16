import { BellRing, Check, Link } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

type CardProps = React.ComponentProps<typeof Card>;

export function CardDemo01({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-full shadow-sm", className)} {...props}>
      <CardHeader>
        <CardTitle>Add Investment</CardTitle>
        <CardDescription>Add your next win here.</CardDescription>
      </CardHeader>
    </Card>
  );
}

export default CardDemo01;
