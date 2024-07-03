"use client";
import Loader from "@/components/ui/Loader";
import MeetingRoom from "@/components/ui/MeetingRoom";
import MeetingSetup from "@/components/ui/MeetingSetup";
import { useGetCallById } from "@/hooks/useGetCall byId";
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
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (
            <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
          ) : (
            <MeetingRoom />
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default Meeting;
