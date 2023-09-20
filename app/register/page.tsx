import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Icons } from "@/components/ui/icons"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"


export default function register() {
    return (
    <div className="flex justify-center basis-1/5 h-screen items-center">
        <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Log-in to your account</CardTitle>
          <CardDescription>
            Enter your email & Password below to Log-in
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-6">
          <Link href="/registergithub" className="flex justify-center"><Button variant="outline" className="px-10">
              <Icons.gitHub className="mr-2 h-4 w-4" />
              Github
            </Button></Link>
            <Link href="/registergoogle" className="flex justify-center"><Button variant="outline" className="px-10">
              <Icons.google className="mr-2 h-4 w-4" />
              Google
            </Button></Link>
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
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Login</Button>
        </CardFooter>
      </Card>
    </div>
    )
  }



