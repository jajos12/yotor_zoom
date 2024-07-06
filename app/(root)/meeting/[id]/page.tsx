"use client";
import Loader from "@/components/ui/Loader";
import MeetingRoom from "@/components/ui/MeetingRoom";
import MeetingSetup from "@/components/ui/MeetingSetup";
import { useGetCallById } from "@/hooks/useGetCallById";
import { useUser } from "@clerk/nextjs";
import {
  CallControls,
  PaginatedGridLayout,
  StreamCall,
  StreamTheme,
} from "@stream-io/video-react-sdk";
import { useState } from "react";

const Meeting = ({ params: { id } }: { params: { id: string } }) => {
  const [isSetupComplete, setIsSetupComplete] = useState<boolean>(false);
  const { user, isLoaded } = useUser();
  const { call, isCallLoading } = useGetCallById(id);
  if (!isLoaded || isCallLoading) {
    return <Loader />;
  }
  return (
    <main className="h-screen w-full">
      <StreamTheme>
        <StreamCall call={call}>
          {!isSetupComplete ? (
            <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
          ) : (
            <MeetingRoom />
          )}
        </StreamCall>
      </StreamTheme>
    </main>
  );
};

export default Meeting;
