"use client";
import {
  DeviceSettings,
  useCall,
  VideoPreview,
} from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

const MeetingSetup = ({
  setisSetupComplete,
}: {
  setisSetupComplete: (value: boolean) => void;
}) => {
  const [isCamMicOpen, setisCamMicOpen] = useState(false);
  const call = useCall();

  if (!call) {
    throw new Error("usecall must be used within StreamCall component");
  }

  useEffect(() => {
    if (isCamMicOpen) {
      call?.camera.disable();
      call?.microphone.disable();
    } else {
      call?.camera.enable();
      call?.microphone.enable();
    }
  }, [isCamMicOpen, call?.camera, call?.microphone]);
  return (
    <div className="flex h-screen w-full items-center justify-center flex-col gap-3 text-white">
      <h1 className="text-2xl font-bold">Setup</h1>
      <VideoPreview />
      <div className="flex h-16 items-center justify-center gap-3">
        <label
          htmlFor="input"
          className="flex items-center justify-center gap-2 font-medium"
        >
          <input
            type="checkbox"
            checked={isCamMicOpen}
            onChange={(e) => setisCamMicOpen(e.target.checked)}
          />
          Join with Mic and Camera Off
        </label>
        <DeviceSettings />
      </div>
      <Button
        className="rounded-md px-4 py-2.5 bg-green-500"
        onClick={() => {
          call.join();
          setisSetupComplete(true);
        }}
      >
        Join Meeting
      </Button>
    </div>
  );
};

export default MeetingSetup;
