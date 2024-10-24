import EventsList from "@/components/EventsList";
import SkeletonEventList from "@/components/skeleton/SkeletonEventList";
import { Suspense } from "react";

export default function EventPage() {
  return (
    <section className="relative flex flex-1 flex-col justify-center m-auto text-grayscale-100 pt-10">
      <Suspense fallback={<SkeletonEventList />}>
        <EventsList />
      </Suspense>
    </section>
  );
}
