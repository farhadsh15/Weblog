import React from "react";
import { useQuery } from "@apollo/client";
import { GET_POST_COMMENTS } from "../../graphQL/queries";
import { Typography, Grid, Box, Avatar } from "@mui/material";

function Comments({ slug }) {
  const { loading, data } = useQuery(GET_POST_COMMENTS, {
    variables: { slug },
  });
  if (loading) return null;
  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 8,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          کامنت ها
        </Typography>
        {data.comments.length > 0 ? (
          data.comments.map((comment) => (
            <Grid
              item
              xs={12}
              key={comment.id}
              m={2}
              p={2}
              border="1px silver solid"
              borderRadius={1}
            >
              <Box component="div" display="flex" alignItems="center" mb={3}>
                <Avatar>{comment.name[0]}</Avatar>
                <Typography
                  component="span"
                  variant="p"
                  fontWeight={700}
                  mr={1}
                >
                  {comment.name}
                </Typography>
              </Box>
              <Typography component="p" variant="p">
                {comment.text}
              </Typography>
            </Grid>
          ))
        ) : (
          <Grid item xs={12} my={2} mr={1}>
            <Typography component="span" variant="p">
              کامنتی برای این پست وجود ندارد
            </Typography>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}

export default Comments;
