"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import React, { useState, ChangeEvent } from "react";
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

export default function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    roleId: 1,
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
    company: "",
  });

  const handleRegister = async () => {
    try {
      const response = await fetch(
        "https://incedoinvest.azurewebsites.net/api/User/Register?api-version=1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        // Registration successful, you can handle the response accordingly
        console.log("Registration successful");
      } else {
        // Handle registration errors here
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error occurred while registering:", error);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRoleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      roleId: parseInt(value, 10), // Parse the value to an integer
    });
  };

  return (
    <div className="absolute left-20 right-20 top-20 bottom-0">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Register - IncedoInvest</CardTitle>
          <CardDescription>Fill in the details to register</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="user@example.com"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Set your password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="enter your password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="grid gap-2">
              <Label htmlFor="firstName">First name</Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="lastName">Last name</Label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="pincode">Pincode</Label>
              <Input
                id="pincode"
                name="pincode"
                type="text"
                placeholder="Pincode"
                value={formData.pincode}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="grid gap-2">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                name="company"
                type="text"
                placeholder="Company"
                value={formData.company}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                name="address"
                type="text"
                placeholder="Address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="grid gap-2">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                name="city"
                type="text"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="state">State</Label>
              <Input
                id="state"
                name="state"
                type="text"
                placeholder="State"
                value={formData.state}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone no.</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="7385396587"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            {/* Role Selection */}
            <div className="grid gap-2">
              <Label>Role</Label>
              <div className="grid gap-2">
                <label>
                  <input
                    type="radio"
                    name="roleId"
                    value="1"
                    checked={formData.roleId === 1}
                    onChange={handleRoleChange}
                  />
                  Advisor
                </label>
                <label>
                  <input
                    type="radio"
                    name="roleId"
                    value="2"
                    checked={formData.roleId === 2}
                    onChange={handleRoleChange}
                  />
                  Client
                </label>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <div>
            <Button
              className="w-full hover:scale-125 transition duration-500 cursor-pointer"
              onClick={handleRegister}
            >
              Register now
            </Button>
          </div>
        </CardFooter>
        {/* ...Remaining JSX code... */}
      </Card>
    </div>
  );
}
