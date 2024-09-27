export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  const formatter = new Intl.DateTimeFormat("id-ID", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "Asia/Jakarta",
  });
  return formatter.format(date);
};
