export const InfoRow = ({ label, value, children }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 py-3">
      <span className="text-[hsl(256,68%,75%)] text-sm min-w-35 md:min-w-40">{label}</span>
      <span className="text-[hsl(240,20%,91%)] text-sm flex-1">
        {children || value}
      </span>
    </div>
  );
};
