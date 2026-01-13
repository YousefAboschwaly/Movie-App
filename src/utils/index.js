function formatMoney(amount) {
  if (!amount) return "N/A";

  if (amount >= 1_000_000_000) return `$${(amount / 1_000_000_000).toFixed(1)} Billion`;
  if (amount >= 1_000_000) return `$${(amount / 1_000_000).toFixed(1)} Million`;
  if (amount >= 1_000) return `$${(amount / 1_000).toFixed(1)}K`;
  return `$${amount}`;
}

function formatReleaseDate(dateString) {
  if (!dateString) return "N/A";

  const date = new Date(dateString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options)+" (Worldwide)";
}
export { formatMoney, formatReleaseDate };