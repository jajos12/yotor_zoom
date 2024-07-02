"use client";
import { useCall, VideoPreview } from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";
import { Button } from "./button";
import { useRouter } from "next/navigation";

const MeetingSetup = ({
  setIsSetupComplete,
}: {
  setIsSetupComplete: (value: boolean) => void;
}) => {
  const [isMicCamToggledOn, setIsMicCamToggledOn] = useState(false);
  const call = useCall();

  if (!call) {
    throw new Error("use call must be used with in stream call component");
  }
  useEffect(() => {
    if (isMicCamToggledOn) {
      call?.microphone.disable();
      call?.camera.disable();
    } else {
      call?.microphone.enable();
      call?.camera.enable();
    }
  }, [isMicCamToggledOn, call?.microphone, call?.camera]);

  return (
    <div className="flex-center flex-col w-full h-screen gap-3 text-white">
      <h1 className="text-2xl font-bold">Setup</h1>
      <VideoPreview />
      <div className="flex-center gap-2 h-16">
        <label htmlFor="" className="flex-center gap-2 font-medium">
          <input
            type="checkbox"
            name="toggle"
            id=""
            onChange={(e) => {
              setIsMicCamToggledOn(e.target.checked);
            }}
          />
          Join with Mic and camera turned off
        </label>
      </div>
      <Button
        className="rounded-lg bg-green-500 px-4 py-3.5"
        onClick={() => setIsSetupComplete(true)}
      >
        Join meeting
      </Button>
    </div>
  );
};

export default MeetingSetup;
