import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";

const LayerList = ({ object, icons }) => {
  const [expanded, setExpanded] = useState(false);
  const [checkedStates, setCheckedStates] = useState(
    object.layers.items.map(() => false)
  );

  const handleChange = () => {
    setExpanded(!expanded);
  };

  const handleVisible = (index, layer) => (event) => {
    const newCheckedStates = [...checkedStates];
    newCheckedStates[index] = event.target.checked;
    setCheckedStates(newCheckedStates);

    layer.visible = event.target.checked;
  };

  return (
    <Accordion
      expanded={expanded}
      onChange={handleChange}
      sx={{ bgcolor: "lightblue" }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-label="Expand">
        {/* Use the icons array to find the corresponding img src */}
        {icons.find((icon) => icon.title === object.title)?.src && (
          <img
            src={icons.find((icon) => icon.title === object.title).src}
            alt={object.title}
            style={{ width: "24px", height: "24px" }}
          />
        )}
        <Typography variant="button">{object.title}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ bgcolor: "lightgray" }}>
        <FormGroup>
          {object.layers.items.map((layer, index) => (
            <FormControlLabel
              key={index}
              control={<Switch checked={checkedStates[index]} />}
              label={layer.title}
              onChange={handleVisible(index, layer)}
            />
          ))}
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
};

export default LayerList;
