"use client";

import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React from "react";
import * as z from "zod";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Icons } from "@/components/ui/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Toast } from "@/components/ui/toast";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";

const items = [
  {
    id: "stocks",
    label: "Stocks",
  },
  {
    id: "commodity",
    label: "Commodity",
  },
  {
    id: "property",
    label: "Property",
  },
  {
    id: "multiple",
    label: "Multiple",
  },
] as const;

const strategies = [
  {
    id: "growthinvesting",
    label: "Growth investing",
  },
  {
    id: "valueinvesting",
    label: "Value investing",
  },
  {
    id: "qualityinvesting",
    label: "Quality investing",
  },
  {
    id: "buyandholdinvesting",
    label: "Buy and hold investing",
  },
] as const;

const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

export default function Deployinvestment() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: ["recents", "home"],
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  return (
    <div className="absolute left-20 right-20 top-40">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">
            Create Investment For Your Client
          </CardTitle>
          <CardDescription>Create Investment for your Client.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-6">
            <div className="grid gap-2">
              <Label htmlFor="firstname">Client Name</Label>
              <Input id="firstname" type="text" placeholder="Client's Name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="lastname">Investment Amount</Label>
              <Input
                id="lastname"
                type="number"
                placeholder="Investment Amount"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="grid gap-2">
              <Label htmlFor="firstname">Company Name</Label>
              <Input id="companyname" type="text" placeholder="Company Name" />
            </div>
            <div className="grid gap-2">
              <Tabs defaultValue="premium" className="w-full">
                <TabsList>
                  <TabsTrigger value="premium">Premium Club</TabsTrigger>
                  <TabsTrigger value="gold">Gold Club</TabsTrigger>
                </TabsList>
                <TabsContent value="premium">
                  Client belongs to Premium Club.
                </TabsContent>
                <TabsContent value="gold">
                  Client belongs to Gold Club.
                </TabsContent>
              </Tabs>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="items"
                  render={() => (
                    <FormItem>
                      <div className="mb-4">
                        <FormLabel className="text-base">
                          Investment Types
                        </FormLabel>
                        <FormDescription>
                          Select the investment type for the client.
                        </FormDescription>
                      </div>
                      {items.map((item) => (
                        <FormField
                          key={item.id}
                          control={form.control}
                          name="items"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={item.id}
                                className="flex flex-row items-start space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(item.id)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([
                                            ...field.value,
                                            item.id,
                                          ])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== item.id
                                            )
                                          );
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  {item.label}
                                </FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                      ))}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* <Button type="submit">Submit</Button> */}
              </form>
            </Form>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="items"
                  render={() => (
                    <FormItem>
                      <div className="mb-4">
                        <FormLabel className="text-base">
                          Client Investment Strategy
                        </FormLabel>
                        <FormDescription>
                          Select your clients investment strategy.
                        </FormDescription>
                      </div>
                      {strategies.map((strategies) => (
                        <FormField
                          key={strategies.id}
                          control={form.control}
                          name="items"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={strategies.id}
                                className="flex flex-row items-start space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(
                                      strategies.id
                                    )}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([
                                            ...field.value,
                                            strategies.id,
                                          ])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== strategies.id
                                            )
                                          );
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  {strategies.label}
                                </FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                      ))}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* <Button type="submit">Submit</Button> */}
              </form>
            </Form>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <div>
            <Link href="\dashboard">
              <Button className="w-full hover:scale-125 transition duration-500 cursor-pointer">
                Create Investment For Client
              </Button>
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
