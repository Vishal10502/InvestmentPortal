import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Icons } from "@/components/ui/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function register() {
  return (
    <div className="absolute left-20 right-20 top-20 bottom-0">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Register - IncedoInvest</CardTitle>
          <CardDescription>Fill in the details to register</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-8 gap-6">
            <Link href="/registergithub" className="flex justify-center">
              <Button variant="outline" className="px-10">
                <Icons.gitHub className="mr-2 h-4 w-4" />
                Github
              </Button>
            </Link>
            <Link href="/registergoogle" className="flex justify-center">
              <Button variant="outline" className="px-10">
                <Icons.google className="mr-2 h-4 w-4" />
                Google
              </Button>
            </Link>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="grid gap-2">
              <Label htmlFor="firstname">First name</Label>
              <Input id="firstname" type="text" placeholder="first name" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="lastname">Last name</Label>
              <Input id="lastname" type="text" placeholder="last name" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Set your password</Label>
              <Input
                id="password"
                type="password"
                placeholder="enter your password"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Confirm your password</Label>
              <Input
                id="confirm_password"
                type="password"
                placeholder="re-enter your password"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="grid gap-2">
              <Label htmlFor="Company">Company</Label>
              <Input
                id="company"
                type="text"
                placeholder="enter your comapny name"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="Address">Address</Label>
              <Input
                id="address"
                type="text"
                placeholder="enter address here"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="grid gap-2">
              <Label htmlFor="City">City</Label>
              <Input id="city" type="text" placeholder="city" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="State">State</Label>
              <Input id="state" type="text" placeholder="state" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="Phone">Phone no.</Label>
              <Input id="phone" type="tel" placeholder="enter your phone no." />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <div>
            <Link href="\login">
              <Button className="w-full hover:scale-125 transition duration-500 cursor-pointer">
                Register now
              </Button>
            </Link>
          </div>
        </CardFooter>
        <div className="absolute top-3 right-2">
          <Link href="/login">
            <Button className="absolute right-14 top-1 hover:scale-125 transition duration-500 cursor-pointer">
              Login
            </Button>
          </Link>
          <div className="absolute top-2 right-60">
            <Tabs
              defaultValue="advisor"
              className="w-[400px]"
            >
              <TabsList>
                <TabsTrigger value="advisor">Advisor</TabsTrigger>
                <TabsTrigger value="client">Client</TabsTrigger>
              </TabsList>
              <TabsContent value="advisor">Register as an Advisor.</TabsContent>
              <TabsContent value="client">Register as a Client.</TabsContent>
            </Tabs>
          </div>
        </div>
        <div className="absolute top-6 right-40">
          <p className="flex justify-center text-b">
            or log-in if already registered \
          </p>
        </div>
      </Card>
    </div>
  );
}
