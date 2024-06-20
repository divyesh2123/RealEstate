import React, { useState } from "react";
import LeadGrid from "./LeadGrid";
import LeadForm from "./LeadForm";
import { Button, Drawer } from "@mui/material";

export default function Lead() {
  const [open, setOpen] = useState(false);
  const [id,setids] = useState([]);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const opendr = ()=>{
    setOpen(true);
  }
  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Add Lead</Button>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        <LeadForm id={id} setids={setids} />
      </Drawer>

      <LeadGrid id={id} setids={setids}  opendr={opendr}/>
    </div>
  );
}
