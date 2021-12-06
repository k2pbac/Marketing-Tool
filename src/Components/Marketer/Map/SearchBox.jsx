import { ChangeEvent, useContext, useRef } from "react";
import usePlacesAutocomplete from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";

import "@reach/combobox/styles.css";
import "./SearchBox.scss";

import LocationContext from "../../../store/location-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import InputGroup from "react-bootstrap/InputGroup";
export default function SearchBox() {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
  } = usePlacesAutocomplete();

  const inputValue = useRef("");

  const { location, setLocation, updateLocation, setUpdateLocation } =
    useContext(LocationContext);

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = (val) => {
    setValue(val, false);
    setLocation(val);
  };

  const renderSuggestions = () => {
    const suggestions = data.map(({ place_id, description }) => (
      <ComboboxOption key={place_id} value={description} />
    ));

    return (
      <div style={{ left: "200px" }}>
        {suggestions}
        <li className="logo">
          <img
            src="https://developers.google.com/maps/documentation/images/powered_by_google_on_white.png"
            alt="Powered by Google"
          />
        </li>
      </div>
    );
  };

  return (
    <div className="SearchBox">
      <Combobox onSelect={handleSelect} aria-labelledby="demo">
        <InputGroup className="mb-3">
          <ComboboxInput
            style={{ width: 300, maxWidth: "90%" }}
            value={value}
            onChange={handleInput}
            disabled={!ready}
            ref={inputValue}
          />
          <ComboboxPopover style={{ marginRight: "10px" }}>
            <ComboboxList>
              {status === "OK" && renderSuggestions()}
            </ComboboxList>
          </ComboboxPopover>
          <InputGroup.Text
            className="search-icon"
            style={{ position: "absolute", right: "-10px" }}
            onClick={() => {
              setLocation(inputValue.current.value);
              setUpdateLocation((prev) => !prev);
            }}
          >
            <FontAwesomeIcon icon={faSearch} />
          </InputGroup.Text>
        </InputGroup>
      </Combobox>
    </div>
  );
}
