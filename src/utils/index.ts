export const FormatTitle = (title: string) => {
  return title
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const CompleteProject = () => {
  const c = GetCompletedProjectCount();
  localStorage.setItem('completed_project_count', '' + (c + 1));
}

export const GetCompletedProjectCount = () => {
  return Number(localStorage.getItem('completed_project_count')) || 0;
}

export const Init = () => {
  localStorage.setItem('completed_project_count', '0');
}

// utils/generateSessionId.ts
export const generateSessionId = () => {
  return Date.now().toString(); // Using current timestamp in milliseconds as session ID
};


export const saveSessionId = (): string => {
  const sessionId = generateSessionId();
  localStorage.setItem('currentSessionId', sessionId);
  return sessionId || '';
}

export const loadSessionId = (): string => {
  return localStorage.getItem('currentSessionId') || '';
}