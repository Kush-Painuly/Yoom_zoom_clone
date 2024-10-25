import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";

export const useGetCallById = (id: string | string[]) => {
  const [call, setcall] = useState<Call>();
  const [isCallLoaded, setIsCallLoaded] = useState(true);

  const client = useStreamVideoClient();

  useEffect(() => {
    if (!client) return;

    const loadCall = async () => {
      const { calls } = await client.queryCalls({
        filter_conditions: {
          id,
        },
      });
      if (calls.length > 0) setcall(calls[0]);
      setIsCallLoaded(false);
    };

    loadCall();
  }, [client, id]);

  return {call, isCallLoaded};
};