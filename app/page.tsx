import { redirect } from "next/navigation";

export default function IndexPage() {
  redirect("/home");
  return null;
}
