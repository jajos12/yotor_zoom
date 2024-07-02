import { PaginatedGridLayout, SpeakerLayout } from "@stream-io/video-react-sdk";
import React, { useState } from "react";

type Layout = "grid" | "speaker-right" | "speker-left";

const MeetingRoom = () => {
  const [speakerLayout, setSpeakerLayout] = useState<Layout>();
  const CallLayout = () => {
    switch (speakerLayout) {
      case "grid":
        return <PaginatedGridLayout />;
      case "speaker-right":
        return <SpeakerLayout participantsBarPosition="left" />;
      default:
        return <SpeakerLayout participantsBarPosition="right" />;
    }
  };

  return (
    <section className="relative text-white overflow-hidden h-screen w-full pt-4">
      <div className="relative flex-center size-full">
        <div className="flex items-center size-full max-w-[1000px]">
          Hello participants!
          <CallLayout />
        </div>
      </div>
    </section>
  );
};

export default MeetingRoom;