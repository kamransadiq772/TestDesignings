import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <AppBar position="static" style={{ backgroundColor: "transparent", boxShadow: "none", borderBottom: "1px solid lightGray" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Key Facts" {...a11yProps(0)} style={{ color: "black", textTransform: 'capitalize', fontWeight: "bolder", fontSize: "small" }} />
          <Tab label="Details" {...a11yProps(1)} style={{ color: "black", textTransform: 'capitalize', fontWeight: "bolder", fontSize: "small" }} />
          <Tab label="Rooms" {...a11yProps(2)} style={{ color: "black", textTransform: 'capitalize', fontWeight: "bolder", fontSize: "small" }} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div style={{ fontSize: 'small', color: "gray" }} >
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo risus a mattis semper. Integer placerat volutpat odio, at pulvinar tortor laoreet mattis. Proin aliquet semper tempus.</div>
            <div style={{ width: "100%", padding: "10px 0px" }} >
              <div style={{ width: "100%", padding: "10px 0px", display: 'flex', justifyContent: "space-between", borderBottom: "1px solid lightGray" }} >
                <div style={{ fontSize: 'small', fontWeight: "bold" }}>Tax</div>
                <div style={{ color: "black", fontSize: 'small', fontWeight: "bold" }} >$1,340 / 2022</div>
              </div>
              <div style={{ width: "100%", padding: "10px 0px", display: 'flex', justifyContent: "space-between", borderBottom: "1px solid lightGray" }} >
                <div style={{ fontSize: 'small', fontWeight: "bold" }}>Type</div>
                <div style={{ color: "black", fontSize: 'small', fontWeight: "bold" }} >Single-Family</div>
              </div>
              <div style={{ width: "100%", padding: "10px 0px", display: 'flex', justifyContent: "space-between", borderBottom: "1px solid lightGray" }} >
                <div style={{ fontSize: 'small', fontWeight: "bold" }}>Building Age</div>
                <div style={{ color: "black", fontSize: 'small', fontWeight: "bold" }} >5 Years</div>
              </div>
              <div style={{ width: "100%", padding: "10px 0px", display: 'flex', justifyContent: "space-between", borderBottom: "1px solid lightGray" }} >
                <div style={{ fontSize: 'small', fontWeight: "bold" }}>Size</div>
                <div style={{ color: "black", fontSize: 'small', fontWeight: "bold" }} >1500 - 2000 feet2</div>
              </div>
              <div style={{ width: "100%", padding: "10px 0px", display: 'flex', justifyContent: "space-between", borderBottom: "1px solid lightGray" }} >
                <div style={{ fontSize: 'small', fontWeight: "bold" }}>Parking</div>
                <div style={{ color: "black", fontSize: 'small', fontWeight: "bold" }} >Detached 2 Garage, 6 Parking</div>
              </div>
              <div style={{ width: "100%", padding: "10px 0px", display: 'flex', justifyContent: "space-between", borderBottom: "1px solid lightGray" }} >
                <div style={{ fontSize: 'small', fontWeight: "bold" }}>Basement</div>
                <div style={{ color: "black", fontSize: 'small', fontWeight: "bold" }} >Unfinished</div>
              </div>
              <div style={{ width: "100%", padding: "10px 0px", display: 'flex', justifyContent: "space-between", borderBottom: "1px solid lightGray" }} >
                <div style={{ fontSize: 'small', fontWeight: "bold" }}>MLS#</div>
                <div style={{ color: "black", fontSize: 'small', fontWeight: "bold" }} >E5579076</div>
              </div>
              <div style={{ width: "100%", padding: "10px 0px", display: 'flex', justifyContent: "space-between", borderBottom: "1px solid lightGray" }} >
                <div style={{ fontSize: 'small', fontWeight: "bold" }}>Possesion</div>
                <div style={{ color: "black", fontSize: 'small', fontWeight: "bold" }} >5 Days</div>
              </div>
            </div>
            <div style={{ padding: "10px 0px", width: "100%" }} >
              <div style={{ color: "black" }} >Description</div>
              <div style={{fontWeight:"200", fontSize:"smaller", color:"gray", padding:"5px 0px"}} >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo risus a mattis semper. Integer placerat volutpat odio, at pulvinar tortor laoreet mattis. Proin aliquet semper tempus. Etiam auctor lacus leo <a href='www.google.com' style={{textDecoration:"none"}} >read more</a>..
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}