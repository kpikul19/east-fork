import React, { useState } from "react";
import Select, { components } from "react-select";

// ---------------------------------------------------------------------------
// Pre-import all glaze images so webpack can resolve them at build time.
// Dynamic require() with a variable path fails because the bundler can't
// statically analyze which files to include.
// ---------------------------------------------------------------------------
import imgAmaro from "../assets/Amaro.avif";
import imgBigSky from "../assets/Big-Sky.avif";
import imgBlackMountain from "../assets/Black-Mountain.avif";
import imgBlueRidge from "../assets/Blue-Ridge.avif";
import imgButter from "../assets/Butter.avif";
import imgCelery from "../assets/Celery.avif";
import imgChar from "../assets/Char.avif";
import imgDaylily from "../assets/Daylily.avif";
import imgEggshell from "../assets/Eggshell.avif";
import imgEmber from "../assets/Ember.avif";
import imgFiddlehead from "../assets/Fiddlehead.avif";
import imgHarvestMoon from "../assets/Harvest-Moon.avif";
import imgHenrisRed from "../assets/Henris-Red.avif";
import imgInThePines from "../assets/In-the-Pines.avif";
import imgLambsEar from "../assets/Lambs-Ear.avif";
import imgLapis from "../assets/Lapis.avif";
import imgMalibu from "../assets/Malibu.avif";
import imgMalt from "../assets/Malt.avif";
import imgMolasses from "../assets/Molasses.avif";
import imgMorel from "../assets/Morel.avif";
import imgNeptune from "../assets/Neptune.avif";
import imgNightSwim from "../assets/Night-Swim.avif";
import imgOrchard from "../assets/Orchard.avif";
import imgPannaCotta from "../assets/Panna-Cotta.avif";
import imgPeachyKeen from "../assets/Peachy-Keen.avif";
import imgPiglet from "../assets/Piglet.avif";
import imgPinto from "../assets/Pinto.avif";
import imgPoinsettia from "../assets/Poinsettia.avif";
import imgPollen from "../assets/Pollen.avif";
import imgPrune from "../assets/Prune.avif";
import imgRococo from "../assets/Rococo.avif";
import imgSecretBeach from "../assets/Secret-Beach.avif";
import imgSoapstone from "../assets/Soapstone.avif";
import imgTaro from "../assets/Taro.avif";
import imgTequilaSunrise from "../assets/Tequila-Sunrise.avif";
import imgThistle from "../assets/Thistle.avif";
import imgUtah from "../assets/Utah.avif";
import imgWineDarkSea from "../assets/Wine-Dark-Sea.avif";
import imgYuzu from "../assets/Yuzu.avif";

const GLAZE_IMAGES = {
  "Amaro": imgAmaro,
  "Big-Sky": imgBigSky,
  "Black-Mountain": imgBlackMountain,
  "Blue-Ridge": imgBlueRidge,
  "Butter": imgButter,
  "Celery": imgCelery,
  "Char": imgChar,
  "Daylily": imgDaylily,
  "Eggshell": imgEggshell,
  "Ember": imgEmber,
  "Fiddlehead": imgFiddlehead,
  "Harvest-Moon": imgHarvestMoon,
  "Henris-Red": imgHenrisRed,
  "In-the-Pines": imgInThePines,
  "Lambs-Ear": imgLambsEar,
  "Lapis": imgLapis,
  "Malibu": imgMalibu,
  "Malt": imgMalt,
  "Molasses": imgMolasses,
  "Morel": imgMorel,
  "Neptune": imgNeptune,
  "Night-Swim": imgNightSwim,
  "Orchard": imgOrchard,
  "Panna-Cotta": imgPannaCotta,
  "Peachy-Keen": imgPeachyKeen,
  "Piglet": imgPiglet,
  "Pinto": imgPinto,
  "Poinsettia": imgPoinsettia,
  "Pollen": imgPollen,
  "Prune": imgPrune,
  "Rococo": imgRococo,
  "Secret-Beach": imgSecretBeach,
  "Soapstone": imgSoapstone,
  "Taro": imgTaro,
  "Tequila-Sunrise": imgTequilaSunrise,
  "Thistle": imgThistle,
  "Utah": imgUtah,
  "Wine-Dark-Sea": imgWineDarkSea,
  "Yuzu": imgYuzu,
};

// ---------------------------------------------------------------------------
// Glaze data extracted from component so it isn't recreated on every render
// ---------------------------------------------------------------------------
const GLAZE_OPTIONS = [
  { label: "Amaro", value: "Amaro" },
  { label: "Big Sky", value: "Big-Sky" },
  { label: "Black Mountain", value: "Black-Mountain" },
  { label: "Blue Ridge", value: "Blue-Ridge" },
  { label: "Butter", value: "Butter" },
  { label: "Celery", value: "Celery" },
  { label: "Char", value: "Char" },
  { label: "Daylily", value: "Daylily" },
  { label: "Eggshell", value: "Eggshell" },
  { label: "Ember", value: "Ember" },
  { label: "Fiddlehead", value: "Fiddlehead" },
  { label: "Harvest Moon", value: "Harvest-Moon" },
  { label: "Henri's Red", value: "Henris-Red" },
  { label: "In the Pines", value: "In-the-Pines" },
  { label: "Lamb's Ear", value: "Lambs-Ear" },
  { label: "Lapis", value: "Lapis" },
  { label: "Malibu", value: "Malibu" },
  { label: "Malt", value: "Malt" },
  { label: "Molasses", value: "Molasses" },
  { label: "Morel", value: "Morel" },
  { label: "Neptune", value: "Neptune" },
  { label: "Night Swim", value: "Night-Swim" },
  { label: "Orchard", value: "Orchard" },
  { label: "Panna Cotta", value: "Panna-Cotta" },
  { label: "Peachy Keen", value: "Peachy-Keen" },
  { label: "Piglet", value: "Piglet" },
  { label: "Pinto", value: "Pinto" },
  { label: "Poinsettia", value: "Poinsettia" },
  { label: "Pollen", value: "Pollen" },
  { label: "Prune", value: "Prune" },
  { label: "Rococo", value: "Rococo" },
  { label: "Secret Beach", value: "Secret-Beach" },
  { label: "Soapstone", value: "Soapstone" },
  { label: "Taro", value: "Taro" },
  { label: "Tequila Sunrise", value: "Tequila-Sunrise" },
  { label: "Thistle", value: "Thistle" },
  { label: "Utah", value: "Utah" },
  { label: "Wine Dark Sea", value: "Wine-Dark-Sea" },
  { label: "Yuzu", value: "Yuzu" },
];

// Plate config: label, aria-label, and default glaze for each position
const PLATE_CONFIG = [
  {
    id: "bottom",
    label: "Bottom Plate",
    ariaLabel: "Bottom plate glaze selector",
    defaultValue: "Amaro",
    imageAlt: "Largest ceramic plate on the bottom of the stack.",
    className: "plate-image-bottom",
  },
  {
    id: "middle",
    label: "Middle Plate",
    ariaLabel: "Middle plate glaze selector",
    defaultValue: "Morel",
    imageAlt: "Middle ceramic plate stacked on top of the bottom plate.",
    className: "plate-image-middle",
  },
  {
    id: "top",
    label: "Top Plate",
    ariaLabel: "Top plate glaze selector",
    defaultValue: "Eggshell",
    imageAlt: "Smallest ceramic plate on top of the stack.",
    className: "plate-image-top",
  },
];

// ---------------------------------------------------------------------------
// Custom dropdown arrow indicator
// ---------------------------------------------------------------------------
const DropdownIndicator = (props) => (
  <components.DropdownIndicator {...props}>
    <img
      className="dropdown-arrow"
      src={require("../assets/small-arrow.png")}
      alt=""
      aria-hidden="true"
    />
  </components.DropdownIndicator>
);

// ---------------------------------------------------------------------------
// react-select styles (unchanged from original)
// ---------------------------------------------------------------------------
const customStyles = {
  control: (provided) => ({
    ...provided,
    border: "none",
    boxShadow: "none",
    paddingLeft: "10px",
    borderRadius: "50px",
    backgroundColor: "rgb(244, 243, 237)",
    "&:hover": {},
    "&:focus": { border: "none" },
    "&:active": { border: "none", boxShadow: "none" },
  }),
  option: (provided) => ({
    ...provided,
    color: "black",
    backgroundColor: "white",
    "&:hover": { backgroundColor: "rgb(244, 243, 237)" },
  }),
};

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------
const DropdownPage = () => {
  // Single array replaces three separate state variables and three handlers
  const [selections, setSelections] = useState(
    PLATE_CONFIG.map((plate) => plate.defaultValue)
  );

  const handleSelect = (index, selectedOption) => {
    setSelections((prev) =>
      prev.map((val, i) => (i === index ? selectedOption.value : val))
    );
  };

  return (
    <div className="glaze-chooser-container">
      {/* Dropdowns */}
      <div className="inner-select-container">
        {PLATE_CONFIG.map((plate, index) => (
          <div
            key={plate.id}
            className={`inner-individual-select-container-${plate.id}-plate`}
          >
            <span className="select-label">{plate.label}</span>
            <Select
              name={`select-${plate.id}`}
              aria-label={plate.ariaLabel}
              styles={customStyles}
              options={GLAZE_OPTIONS}
              isSearchable={false}
              components={{ IndicatorSeparator: () => null, DropdownIndicator }}
              value={GLAZE_OPTIONS.find((opt) => opt.value === selections[index])}
              onChange={(option) => handleSelect(index, option)}
              menuPortalTarget={document.body}
              menuPosition="fixed"
            />
          </div>
        ))}
      </div>

      {/* Plate images */}
      <div className="plate-image-container-wrapper">
        <div className="plate-image-container">
          {PLATE_CONFIG.map((plate, index) => (
            <img
              key={plate.id}
              src={GLAZE_IMAGES[selections[index]]}
              alt={plate.imageAlt}
              className={`${plate.className} glaze-fade`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropdownPage;