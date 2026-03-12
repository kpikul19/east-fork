import React, { useState } from "react";
import Select, { components } from "react-select";

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
              src={require(`../assets/${selections[index]}.avif`)}
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