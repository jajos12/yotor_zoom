"use client";
import Image from "next/image";
import React, { useState } from "react";
import HomeCard from "./HomeCard";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useUser } from "@clerk/nextjs";
import { useToast } from "./ui/use-toast";

const MeetingListType = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();
  const [values, setvalues] = useState({
    dateTime: new Date(),
    description: "",
    link: "",
  });
  const [callDetails, setCallDetails] = useState<Call>();
  const { toast } = useToast();
  const user = useUser();
  const client = useStreamVideoClient();
  const createMeeting = async () => {
    if (!client || !user) {
      alert("something");
      return;
    }

    try {
      const id = crypto.randomUUID();
      const StartsAt =
        values.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const call = client.call("default", id);
      const description = values.description || "Instant meeting";

      console.log(call);
      if (!call) return "Failed to create a call!";

      call.getOrCreate({
        data: {
          starts_at: StartsAt,
          custom: { description },
        },
      });
      setCallDetails(call);

      if (!values.description) {
        router.push(`/meeting/${call.id}`);
        console.log(`/meeting/${call.id}`);
      }
      toast({ title: "Meeting Created" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        bg_color="bg-orange-1"
        iconUrl="/icons/add-meeting.svg"
        leadingText="New Meeting"
        paragraph="Start an instant meeting"
        handleClick={() => {
          setMeetingState("isInstantMeeting");
        }}
      />
      <HomeCard
        bg_color="bg-purple-1"
        iconUrl="/icons/schedule.svg"
        leadingText="Schedule Meeting"
        paragraph="Plan your meeting"
        handleClick={() => {
          setMeetingState("isScheduleMeeting");
        }}
      />
      <HomeCard
        bg_color="bg-blue-1"
        iconUrl="/icons/join-meeting.svg"
        leadingText="Join Meeting"
        paragraph="via invitation link"
        handleClick={() => {
          setMeetingState("isJoiningMeeting");
        }}
      />
      <HomeCard
        bg_color="bg-yellow-1"
        iconUrl="/icons/recordings.svg"
        leadingText="View recordings"
        paragraph="Meeting Recordings"
        handleClick={() => {
          router.push("/recordings");
        }}
      />

      <MeetingModal
        isOpen={meetingState == "isInstantMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Start an Instant Meeting"
        className="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />
    </section>
  );
};

export default MeetingListType;
