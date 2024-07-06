import CallList from "@/components/ui/CallList";
import React from "react";

const Upcoming = () => {
  return (
    <section className="size-full flex flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">Upcoming</h1>

      <CallList type="upcoming" />
    </section>
  );
};

export default Upcoming;
