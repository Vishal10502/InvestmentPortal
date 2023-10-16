"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import React from "react";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import Link from "next/link";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Icons } from "@/components/ui/icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import * as z from "zod";
const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const config = {
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
    };

    axios
      .post("https://localhost:7011/api/User/Login", values, config)
      .then((response) => {
        console.log("Response:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    console.log(values);
  }
  return (
    <div>
      <div className="flex justify-center basis-1/5 h-screen items-center">
        <Image
          className="relative absolute left-16 bottom-1"
          src="/hello.png"
          alt="Graphs"
          width={800}
          height={100}
          priority
        />
        <div className="z-10 max-w-5xl w-full justify-center text-sm lg:flex">
          <Card className="hover:scale-110 transition duration-500 cursor-pointer">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Log-In To Your Account</CardTitle>
              <CardDescription>
                Enter your email & password below to log-in
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid grid-cols-2 gap-2">
                <Link href="/register" className="flex justify-center">
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
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <div className="grid gap-2">
                            {/* <Label htmlFor="email">Email</Label> */}
                            <Input
                              id="email"
                              type="email"
                              placeholder="m@example.com"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <div className="grid gap-2">
                            {/* <Label htmlFor="password">Password</Label> */}
                            <Input id="password" type="password" {...field} />
                          </div>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  {/* <Button type="submit">Submit</Button> */}
                  <CardFooter>
                    <div className="w-full">
                      <Link href="/dashboard">
                        <Button className="w-full" type="submit">
                          Login
                        </Button>
                      </Link>
                    </div>
                  </CardFooter>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
