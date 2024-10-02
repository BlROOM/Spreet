import { EVENT_PATHNAME } from "@/constants/path";
import { redirect } from "next/navigation";
export default function EventPage() {
  redirect(EVENT_PATHNAME);
  return null;
}
