export const ensuresArray = (value) => {
  if (Array.isArray(value)) {
    return value;
  }
  return [];
};

export const ensuresObjec = (value) => {
  if (typeof value === "object" && value !== null) {
    return value;
  }
  return {};
};

export const ensuresString = (value) => {
  if (typeof value === "string") {
    return value;
  }
  return "";
};

export const CheckStatusWithType = (status) => {
  switch (status) {
    case "PENDING":
      return "bg-yellow-300 text-yellow-500";
    case "APPROVED":
      return "bg-green-300 text-green-500";

    case "REJECTED":
      return "bg-red-300 text-red-500";

    default:
      return "bg-gray-300 text-gray-500";
  }
};
