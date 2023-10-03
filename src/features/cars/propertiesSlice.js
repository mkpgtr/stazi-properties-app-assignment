import { createSlice } from "@reduxjs/toolkit";
import properties from '../../data/properties.json'
const initialFiltersState = {
    search: '',
    activeTabIndex : 'Paris',
    endIndex : 6,
    tabOptions : ['London','Paris','New York','Mumbai','View All']
  };
  
  const initialState = {
    isLoading: false,
    properties: properties,
    totalProperties: properties.length,
    numOfPages: 1,
    page: 1,
    carsPerPage : 6,
    ...initialFiltersState,
  };

  const carsSlice = createSlice(
    {
       name: 'carsSlice',
        initialState,
        reducers :{
          
              handleChange: (state, { payload: { name, value } }) => {
               
              },
              handlePageButtonClick :(state,{payload})=>{
                state.page = payload
              },
              handleTabChange: (state,{payload})=>{
                state.activeTabIndex = payload
              },
              populateInitialProperties:(state)=>{
                if(state.activeTabIndex!=='View All'){
                  let tempProperties = [...state.properties]
                tempProperties = tempProperties.filter(property=>property.propertyLocation.toLowerCase()=== state.activeTabIndex.toLowerCase())
                state.filtered_properties = tempProperties
                }
                else{
                  state.filtered_properties = state.properties
                }

              },
              handleShowMore : (state)=>{
                state.endIndex = state.endIndex + 3
              },
              changeEndIndex :(state,{payload})=>{
                state.endIndex = payload
              }


        }
    }
  )

  export const {
 
    handleChange,
    handlePageButtonClick,
    handleTabChange,
    populateInitialProperties,
    handleShowMore,
    changeEndIndex
   
  } = carsSlice.actions;
  
  export default carsSlice.reducer;