export const getPerformances = async () => {
  const res = await fetch("/api/performances");
  if (!res.ok) throw new Error("Failed to fetch performances");
  return res.json();
};

export const getPerformanceById = async (id: string) => {
  const res = await fetch(`/api/performances/${id}`);
  if (!res.ok) throw new Error("Failed to fetch performance");
  return res.json();
};
