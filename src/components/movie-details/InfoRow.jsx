export const InfoRow = ({ label, value, children  }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 py-3">
      <span className="label">
        {label}
      </span>
      <span className={`flex-1  ${label === "Overview" ? "text-white" : "text-light-50  font-semibold "} `}>
        {children || value}
      </span>
    </div>
  );
};
