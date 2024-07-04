"use client";
import { cn } from "@/lib/utils";
import {
  CallControls,
  CallParticipantsList,
  PaginatedGridLayout,
  SpeakerLayout,
  VideoPreview,
} from "@stream-io/video-react-sdk";
import React, { useState } from "react";

type Layout = "grid" | "speaker-right" | "speker-left";

const MeetingRoom = () => {
  const [speakerLayout, setSpeakerLayout] = useState<Layout>();
  const [showParticipant, setShowParticipant] = useState(true);
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
          <VideoPreview />
          <CallLayout />
        </div>
        <div
          className={cn("h-[calc(100vh-86px)] ml-2", {
            "show-block": showParticipant,
          })}
        >
          <CallParticipantsList onClose={() => setShowParticipant(false)} />
        </div>
      </div>

      <div className="fixed flex-center bottom-0 w-full gap-5">
        <CallControls />
      </div>
    </section>
  );
};

export default MeetingRoom;
