export const InfoRow = ({ label, value }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 py-3">
      <span className="text-accent text-sm min-w-25 md:min-w-40">{label}</span>
      <span className="text-foreground text-sm flex-1">{value}</span>
    </div>
  );
};
