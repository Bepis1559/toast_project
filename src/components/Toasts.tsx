import { styled } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNotificationCenter } from "react-toastify/addons/use-notification-center";
import { type ReactElement, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import DeleteIcon from "@mui/icons-material/Delete";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { toast } from "react-toastify";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export function Toasts(): ReactElement {
  const { notifications, remove } = useNotificationCenter();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}>
        <Box id="expand-more-label">Show toasts</Box>
        <ExpandMore
          sx={{ color: "white", marginInlineStart: "2em" }}
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          aria-labelledby="expand-more-label">
          <ExpandMoreIcon />
        </ExpandMore>
      </Box>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <List
          disablePadding
          sx={{
            textAlign: "start",
            overflowY: "auto",
            maxHeight: "5em",
          }}>
          {notifications.map(({ content, id }) => (
            <ListItem key={id} sx={{ paddingInlineStart: "0" }}>
              {content?.toString()}
              <Button
                variant="outlined"
                sx={{
                  cursor: "pointer",
                  marginInlineStart: "1em",
                  padding: "0",
                  minWidth: "0",
                }}
                onClick={() => {
                  toast.dismiss();
                  remove(id);
                }}>
                <DeleteIcon sx={{ margin: "0", padding: "0" }} />
              </Button>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
}
