"use client";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession({ required: false });
  console.log(session);
  return <main>You are now authenticated!</main>;
}