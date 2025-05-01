import "./App.css";
// import Button from './components/Button'
import {Button} from "antd";
import { Card } from "./components/Card";
import ComboBox from "./components/Combobox";
import Stack from "@mui/material/Stack";
import MButton from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BasicRating from "./components/BascicRating";
import { LeftCircleOutlined } from "@ant-design/icons";

function App() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <>
    <LeftCircleOutlined />
    <Button>asd</Button>
      <BasicRating />
      <Checkbox
        {...label}
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
      />
      <Stack spacing={2} direction="column">
        <MButton variant="outlined">as</MButton>
        <MButton variant="contained">asd</MButton>
        <MButton variant="outlined">zxc</MButton>
      </Stack>
      <ComboBox></ComboBox>
      <Card primary="false">Test</Card>
      <Card primary="true">Test</Card>
      
    </>
  );
}

export default App;
