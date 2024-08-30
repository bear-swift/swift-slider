import { loadSessionId, saveSessionId } from "@/utils";

// services/apiService.ts
export const startSession = async (
  projectName: string,
) => {
  const sessionId = saveSessionId();
  const timestamp = new Date().toISOString();
  
  const response = await fetch(
    "/api/v1/api/beta/sessions/start",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        started_at: timestamp,
        sessionID: sessionId,
        projectName: projectName,
      }),
    }
  );
  return response;
};

export const endSession = async () => {
  const sessionId = loadSessionId();
  const timestamp = new Date().toISOString();

  const response = await fetch(
    `/api/v1/api/beta/sessions/end/${sessionId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ended_at: timestamp,
      }),
    }
  );
  return response;
};
