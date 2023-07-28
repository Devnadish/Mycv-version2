import { useQuery } from "@apollo/client";
import { Box } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { GET_ALLQUATIONS } from "./Graphql/Query/Quastion";
 
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { FAQHeader } from "./FAQHeader";
import { QCard } from "./QCard";
dayjs.extend(relativeTime);


function FAQ() {
  const Person = useParams();
  const { loading, error, data } = useQuery(GET_ALLQUATIONS);

  if (loading) <>loading.....</>;
  if (error) <>something went wrong.....</>;
 
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          gap: "1rem",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <FAQHeader rowCount={data?.quastions?.data?.length} Link={Link} />
        <Box
          sx={{
            width: "95%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 1,
            mb: 5,
          }}
        >
          {data?.quastions?.data?.map((el) => (
            <React.Fragment key={el.id}>
              <QCard
                elId={el.id}
                el={el.attributes}
                answerData={el.attributes.answers}
              />
            </React.Fragment>
          ))}
        </Box>
      </Box>
    </>
  );
}
export default FAQ;


