import "../Stylesheets/content.css";
import {
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Radio,
  Button,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import Joke from "./Joke";

export default function Content() {
  const [selRadio, setRadio] = useState("Any");
  const [joke, setJoke] = useState({});
  const [language, setLanguage] = useState("en");


  console.log(joke)

  function handledRadio(e) {
    setRadio(e.target.value);
  }

  function handleLanguage(e) {
    setLanguage(e.target.value);
  }

  const getData = () => {
    fetch(`https://v2.jokeapi.dev/joke/${selRadio}?lang=${language}`)
      .then((res) => res.json())
      .then((r) => setJoke(r));
  };

  return (
    <div className="content-container">
      <div className="picker">
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            <strong>Choose a category</strong>
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Any"
            name="radio-buttons-group"
            onChange={handledRadio}
          >
            <FormControlLabel value="Any" control={<Radio />} label="Any" />
            <FormControlLabel
              value="Programming"
              control={<Radio />}
              label="Programming"
            />
            <FormControlLabel
              value="Miscellaneous"
              control={<Radio />}
              label="Misc"
            />
            <FormControlLabel value="Dark" control={<Radio />} label="Dark" />
            <FormControlLabel
              value="Spooky"
              control={<Radio />}
              label="Spooky"
            />
            <FormControlLabel value="Pun" control={<Radio />} label="Pun" />
            <FormControlLabel
              value="Christmas"
              control={<Radio />}
              label="Christmas"
            />
          </RadioGroup>
          <div className="language-joke">
            <FormControl>
            <InputLabel id="demo-simple-select-label">Language</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={language}
            label="Language"
            onChange={handleLanguage}
          >
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="es">Español</MenuItem>
          </Select>

            </FormControl>
          

          </div>
          
          <Button
          variant="contained"
          color="success"
          className="mybutton"
          onClick={getData}
        >
          Fun
        </Button>

        </FormControl>
        
        
      </div>

      {Object.entries(joke).length !== 0 && (
        <div className="joker-container">
          <Joke
          error={joke.error}
            category={joke.category}
            setup={joke.setup}
            delivery={joke.delivery}
            type={joke.type}
            joke={joke.joke}
          />
        </div>
      )}
    </div>
  );
}
