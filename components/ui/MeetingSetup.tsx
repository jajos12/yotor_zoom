"use client";
import { useCall, VideoPreview } from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";
import { Button } from "./button";

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
  const handleclick = () => {
    setIsSetupComplete(true);
  };
  useEffect(() => {
    if (isMicCamToggledOn) {
      call?.microphone.disable();
    } else {
      call?.microphone.enable();
    }
  }, [isMicCamToggledOn, call?.microphone]);

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
        onClick={handleclick}
      >
        Join meeting
      </Button>
    </div>
  );
};

export default MeetingSetup;
