"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@radix-ui/react-label";

export default function SignupLogin() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <Card className="w-full max-w-md p-6 shadow-lg">
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          {/* Login Form */}
          <TabsContent value="login">
            <LoginForm />
          </TabsContent>

          {/* Sign-Up Form */}
          <TabsContent value="signup">
            <SignupForm />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}

function LoginForm() {
  return (
    <form className="space-y-4">
      <div>
        <Label className="block text-sm font-medium">Email</Label>
        <Input type="email" placeholder="Enter your email" required />
      </div>
      <div>
        <Label className="block text-sm font-medium">Password</Label>
        <Input type="password" placeholder="Enter your password" required />
      </div>
      <Button className="w-full mt-4">Login</Button>
    </form>
  );
}

function SignupForm() {
  return (
    <form className="space-y-4">
      <div>
        <Label className="block text-sm font-medium">Full Name</Label>
        <Input type="text" placeholder="Enter your name" required />
      </div>
      <div>
        <Label className="block text-sm font-medium">Email</Label>
        <Input type="email" placeholder="Enter your email" required />
      </div>
      <div>
        <Label className="block text-sm font-medium">Password</Label>
        <Input type="password" placeholder="Create a password" required />
      </div>
      <Button className="w-full mt-4">Sign Up</Button>
    </form>
  );
}
