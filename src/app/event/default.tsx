import { EVENT_PATHNAME } from "@/constants/path";
import { redirect } from "next/navigation";

export default function Default() {
  redirect(EVENT_PATHNAME);
}
