export const footerBox = {
  width: "100%",
  backgroundColor: "transparent",
  height: "15%",
  color: "#ffffff",
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-evenly",
  borderTop: "1px solid #ba68c8",
  backgroundColor: "aliceblue",
};


export const QuastionBox = {
  borderRadius: "50%",
  minWidth: 0,
  padding: "6px",
  height: "fit-content",
  position: "relative",
  backgroundColor: "aliceblue",
};

export const speak = (txt) => {
  let sp = new SpeechSynthesisUtterance(txt);
  speechSynthesis.speak(sp);
};

export const footerBtn={
    borderRadius: "50%",
    minWidth: 0,
    padding: "6px",
    height: "fit-content",
}

export const dropDawn={
    borderRadius: "50%",
            minWidth: 0,
            padding: "6px",
            height: "fit-content",
            backgroundColor: "transparent",
            "&:hover": {
              border: "1px solid red",
              backgroundColor: "transparent",
            },
          }
