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

