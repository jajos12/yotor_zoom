import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { Result } from "postcss";
import { useEffect, useState } from "react";

export const useGetCallById = (id: string | string[]) => {
  const [call, setCall] = useState<Call>();
  const [isCallLoading, setIsCallLoading] = useState(true);

  const client = useStreamVideoClient();
  useEffect(() => {
    if (!client) return;
    const loadCall = async () => {
      const result = await client.queryCalls({
        filter_conditions: { id },
      });
      alert(result.calls);
      if (result.calls.length > 0) {
        setCall(result.calls[0]);
      }
      setIsCallLoading(false);
    };
    loadCall();
  }, [client, id]);
  return { call, isCallLoading };
};
