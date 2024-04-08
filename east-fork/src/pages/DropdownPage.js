import React, { useState } from "react";
import Select, { components, DropdownIndicatorProps, StylesConfig } from 'react-select';


const DropdownIndicator = (
    props: DropdownIndicatorProps<ColourOption, true>
  ) => {
    return (
      <components.DropdownIndicator {...props}>
        <img className="dropdown-arrow" src={require(`../assets/small-arrow.png`)} alt="dropdown arrow"/>
      </components.DropdownIndicator>
    );
  };


// function getSelect(val) {
//     console.log(val)}

const DropdownPage = () => {
    const options = [
        { label: 'Amaro', value: 'Amaro' },
        { label: 'Big Sky', value: 'Big-Sky' },
        { label: 'Black Mountain', value: 'Black-Mountain' },
        { label: 'Blue Ridge', value: 'Blue-Ridge' },
        { label: 'Butter', value: 'Butter' },
        { label: 'Celery', value: 'Celery' },
        { label: 'Char', value: 'Char' },
        { label: 'Daylily', value: 'Daylily' },
        { label: 'Eggshell', value: 'Eggshell' },
        { label: 'Ember', value: 'Ember' },
        { label: 'Fiddlehead', value: 'Fiddlehead' },
        { label: 'Harvest Moon', value: 'Harvest-Moon' },
        { label: "Henri's Red", value: 'Henris-Red' },
        { label: 'In the Pines', value: 'In-the-Pines' },
        { label: "Lamb's Ear", value: 'Lambs-Ear' },
        { label: 'Lapis', value: 'Lapis' },
        { label: 'Malibu', value: 'Malibu' },
        { label: 'Malt', value: 'Malt' },
        { label: 'Molasses', value: 'Molasses' },
        { label: 'Morel', value: 'Morel' },
        { label: 'Night Swim', value: 'Night-Swim' },
        { label: 'Orchard', value: 'Orchard' },
        { label: 'Panna Cotta', value: 'Panna-Cotta' },
        { label: 'Peachy Keen', value: 'Peachy-Keen' },
        { label: 'Piglet', value: 'Piglet' },
        { label: 'Pinto', value: 'Pinto' },
        { label: 'Poinsettia', value: 'Poinsettia' },
        { label: 'Pollen', value: 'Pollen' },
        { label: 'Prune', value: 'Prune' },
        { label: 'Rococo', value: 'Rococo' },
        { label: 'Secret Beach', value: 'Secret-Beach' },
        { label: 'Soapstone', value: 'Soapstone' },
        { label: 'Taro', value: 'Taro' },
        { label: 'Tequila Sunrise', value: 'Tequila-Sunrise' },
        { label: 'Thistle', value: 'Thistle' },
        { label: 'Utah', value: 'Utah' },
        { label: 'Wine Dark Sea', value: 'Wine-Dark-Sea' }
    ]
    
    // const [plate, setPlate] = useState();
    const [selectedOption, setSelectedOption] = useState("Amaro");
    const handleTypeSelect = e => {
        setSelectedOption(e.value);
      };

      const [selectedOption2, setSelectedOption2] = useState("Morel");
    const handleTypeSelect2 = e => {
        setSelectedOption2(e.value);
      };

      const [selectedOption3, setSelectedOption3] = useState("Eggshell");
      const handleTypeSelect3 = e => {
          setSelectedOption3(e.value);
        };

        const customStyles: StylesConfig = {
            control: (provided: Record<string, unknown>, state: any) => ({
              ...provided,
              "&": {
                border: "none",
                boxShadow: "none",
                paddingLeft: "10px",
                borderRadius: "50px",
                backgroundColor: "rgb(244, 243, 237);",
                
              },
            //   backgroundColor: isFocused ? "red" : "blue",
              "&:hover": {
                // backgroundColor: "red"
              },
              "&:focus": {
                border: "none",
                // backgroundColor: "red"
                // boxShadow: "0px 0px 6px #ff8b67"
              },
              "&:active": {
                border: "none",
                boxShadow: "none"
              }
            }),

            option: (provided, state) => ({
                ...provided,
                color: state.isSelected ? 'black' : 'black',
                backgroundColor: "white",
                "&:hover": {
                    backgroundColor: "rgb(244, 243, 237);"
                },
                
              })
          };

    return (
        <div className="glaze-chooser-container">
            <div className="inner-select-container">
                <div className="inner-individual-select-container-bottom-plate">
                    <span className="select-label">Bottom Plate</span>
                    <Select 
                        name="mySelect1"
                        styles={customStyles}
                        options={options} 
                        components={
                            {
                            IndicatorSeparator: () => null,
                            DropdownIndicator
                        }}
                        value={options.filter(function(option) {
                            return option.value === selectedOption;
                        })}
                        onChange={handleTypeSelect}
                        menuPortalTarget={document.body} 
                        menuPosition={'fixed'}
                    />
                </div>
                <div className="inner-individual-select-container-middle-plate">
                    <span className="select-label">Middle Plate</span>
                    <Select 
                        name="mySelect2"
                        styles={customStyles}
                        options={options} 
                        components={
                            {
                            IndicatorSeparator: () => null,
                            DropdownIndicator
                        }}
                        value={options.filter(function(option) {
                            return option.value === selectedOption2;
                        })}
                        onChange={handleTypeSelect2}
                        menuPortalTarget={document.body}
                        menuPosition={'fixed'}
                    />
                </div>
                <div className="inner-individual-select-container-top-plate">
                    <span className="select-label">Top Plate</span>
                    <Select 
                        name="mySelect3"
                        styles={customStyles}
                        options={options} 
                        components={
                            {
                            IndicatorSeparator: () => null,
                            DropdownIndicator,

                        }}
                        value={options.filter(function(option) {
                            return option.value === selectedOption3;
                        })}
                        onChange={handleTypeSelect3}
                        menuPortalTarget={document.body}
                        menuPosition={'fixed'}
                    />
                </div>
            </div>
            <div className="plate-image-container-wrapper">
                <div className="plate-image-container">
                    <img src={require(`../assets/${selectedOption}.png`)} alt="Largest ceramic plate on the bottom of two plates stacked on top of it." className="plate-image-bottom"/> 
                    <img src={require(`../assets/${selectedOption2}.png`)} alt="Middle ceramic plate stacked on top of the larger plate and beneath the smallest plate " className="plate-image-middle"/>
                    <img src={require(`../assets/${selectedOption3}.png`)} alt="The smallest ceramic plate on the top of the other two plates" className="plate-image-top"/>
                </div>
            </div>
        </div>
    )
}

export default DropdownPage;