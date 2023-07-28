export const mainHeroStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: { xs: "column", md: "row" },
  gap: 1,
  border: "1px solid",
  pb: 2,
  borderRadius: 2,
  borderColor: "borderColor.main",
};
export const heroImageStyle = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
export const texareaStyle = {
  display: "flex",
  justifyContent: "center",
  flexDirection: { xs: "column", md: "column" },
  alignItems: "center",
  width: "100%",
  gap: 1,
};
export const sectionStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  // gap: ".1rem",
  backgroundColor: "boxColor.main",
  width: "fit-content",
  flexWrap: "wrap",
  width: "100%",
  border: "1px solid",
  borderColor: "borderColor.main",
  backgroundColor: "boxColor.main",
  borderRadius: 2,
  py:1,
  "&:hover": {
    border: "1px solid",
    borderColor: "success.main",
  },
  // p: 1,
};
