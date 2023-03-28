import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import './Layout.css'
import { Avatar, Badge, Button, Switch } from '@mui/material';
import { OneKPlus, PlusOne, ArrowBackIos, ArrowForwardIos, KeyboardArrowDown } from '@mui/icons-material';
import logo from '../assets/logo.png'
import calendarIcon from '../assets/calendar.png'
import notificationIcon from '../assets/notification.png'
import profile2Icon from '../assets/profile-2user.png'
import searchStatusIcon from '../assets/search-status.png'
import shoppingIcon from '../assets/shopping-cart.png'
import speedometerIcon from '../assets/speedometer.png'
import userCircleIcon from '../assets/user-cirlce-add.png'
import helpIcon from '../assets/help.png'
import barSearchIcon from '../assets/search-normal.png'
import barSettingsIcon from '../assets/setting-2.png'
import AvatarImg from '../assets/acd2.png'
import barLogoutIcon from '../assets/logout.png'
import AvatarImg2 from '../assets/AvatarImg2.png'
import sl1 from '../assets/sl1.png'
import sl2 from '../assets/sl2.png'
import sl3 from '../assets/sl3.png'
import mapIcon from '../assets/map.png'
import lineIcon from '../assets/direction-line.png'
import shareIcon from '../assets/share-line.png'
import notIcon from '../assets/note-favorite.png'
import turkeyFlag from '../assets/Turkey.png'
import smsIcon from '../assets/sms.png'
import rightTabIcon from '../assets/rightTabsIcon.png'
import keyIcon from '../assets/key.png'
import { borderRadius } from '@mui/system';
import FullWidthTabs from './Tabs/Tab';
const drawerWidth = 240;

const sideBarData = [
    {
        text: "Dashboard",
        link: "",
        icon: speedometerIcon
    },
    {
        text: "Search Property",
        link: "",
        icon: searchStatusIcon
    },
    {
        text: "Calendar",
        link: "",
        icon: calendarIcon
    },
    {
        text: "My Clients",
        link: "",
        icon: profile2Icon
    },
    {
        text: "MLS Lists",
        link: "",
        icon: shoppingIcon
    },
    {
        text: "Notifications",
        link: "",
        icon: notificationIcon
    },
    {
        text: "Invite & Earn",
        link: "",
        icon: userCircleIcon
    }
]

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function Layout() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} className="appbar" style={{ backgroundColor: "#f5f6fa", boxShadow: 'none' }} >
                <Toolbar>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }} >
                        <div style={{ display: 'flex', alignItems: 'center' }} >
                            <span onClick={() => { setOpen(open === true ? false : true) }} style={{ cursor: 'pointer', backgroundColor: 'white', color: 'black', marginRight: 15, padding: '10px 8px 10px 12px', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >{open ? <ArrowBackIos fontSize='smaller' style={{ textAlign: 'center' }} /> : <ArrowForwardIos fontSize="smaller" style={{ textAlign: 'center' }} />}</span>
                            <Typography variant="h6" color='black' noWrap component="div">
                                Mini variant drawer
                            </Typography>
                        </div>
                        <div style={{ display: 'flex', alignItems: "center", width: '37%', justifyContent: 'space-between' }} >
                            <Badge badgeContent={5} color="primary"><img width={20} height={20} src={notificationIcon} style={{ cursor: 'pointer' }} /></Badge>
                            <img width={20} height={20} src={barSearchIcon} style={{ cursor: 'pointer' }} />
                            <img width={20} height={20} src={barSettingsIcon} style={{ cursor: 'pointer' }} />
                            <img width={20} height={20} src={barLogoutIcon} style={{ cursor: 'pointer' }} />
                            <div style={{ display: 'flex', cursor: 'pointer', alignItems: 'center', color: 'gray', gap: 15 }} >
                                <div style={{ display: 'flex', alignItems: 'center', gap: 5 }} >
                                    <div><Avatar sx={{ width: 40, height: 40 }} src={AvatarImg2} ></Avatar></div>
                                    <div style={{ display: 'flex', flexDirection: 'column' }} >
                                        <div style={{ fontWeight: 'normal', color: 'black', fontSize: 'small' }} >Berkay Erdinc</div>
                                        <div style={{ fontWeight: 'lighter', fontSize: 'smaller' }} >hi@berkeyerdinc.com</div>
                                    </div>
                                </div>
                                <div><KeyboardArrowDown /></div>
                            </div>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open} style={{boxShadow:"none", border:"none", borderWidth:"0px"}} >
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
                    <DrawerHeader style={{ display: "flex", justifyContent: "center", width: "100%" }} >
                        <div style={{ width: "95%", height: "55%" }} ><img style={{ height: "100%" }} src={logo} /></div>
                    </DrawerHeader>
                    <DrawerHeader style={{ display: "flex", justifyContent: "center", width: "100%" }} >
                        <Box style={{ display: "flex", fontSize: "small", color: "white", borderRadius: "10px", cursor: "pointer", height: "75%", alignItems: "center", justifyContent: "center", width: "95%", backgroundColor: "#2e63f6" }} >{open && "Create New Tour"} <PlusOne /></Box>
                    </DrawerHeader>
                    {/* <Divider /> */}
                    <List style={{ width: "95%" }} >
                        {sideBarData?.map((item, index) => (
                            <ListItem key={item} disablePadding sx={{ display: 'block' }}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 52,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 1 : 'auto',
                                            display: "flex",
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <img src={item?.icon} />
                                    </ListItemIcon>
                                    <ListItemText primary={item?.text} primaryTypographyProps={{ fontWeight: "bold", fontSize: "normal", color: "gray" }} sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <div style={{ position: "absolute", display: 'flex', justifyContent: 'center', bottom: 10, width: '100%' }} >
                        <div style={{ width: '75%', fontWeight: 'bolder', color: 'gray', fontSize: 'small' }} >
                            {open && <p>Need Help?</p>}
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: open ? "" : 'center', cursor: 'pointer' }} ><img src={helpIcon} style={{ marginRight: open ? 5 : 0 }} />{open && "Help Desk"}</div>
                        </div>
                    </div>
                </div>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <div style={{ width: '100%', display: 'flex', position: 'relative' }} >
                    <div style={{ width: '33.333%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <img src={sl1} alt="img" style={{ width: '98%', borderRadius: '10px' }} />
                    </div>
                    <div style={{ width: '33.333%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <img src={sl3} alt="img" style={{ width: '98%', borderRadius: '10px' }} />
                    </div>
                    <div style={{ width: '33.333%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <img src={sl3} alt="img" style={{ width: '98%', borderRadius: '10px' }} />
                    </div>
                    <span style={{ position: 'absolute', top: "45%", left: 15, cursor: 'pointer', backgroundColor: 'white', color: 'black', marginRight: 15, padding: '10px 8px 10px 12px', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} ><ArrowBackIos fontSize="smaller" style={{ textAlign: 'center' }} /></span>
                    <span style={{ position: 'absolute', top: "45%", right: 0, cursor: 'pointer', backgroundColor: 'white', color: 'black', marginRight: 15, padding: '10px 8px 10px 12px', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} ><ArrowForwardIos fontSize="smaller" style={{ textAlign: 'center' }} /></span>
                </div>
                <div style={{ width: '100%', padding: '20px 0px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }} >
                        <div style={{ display: 'flex', justifyContent: 'center', width: "22%" }} >
                            <div style={{ padding: '15px 0px', width: "100%", height: "max-content", display: 'flex', justifyContent: 'center', backgroundColor: 'white', borderRadius: '10px' }} >
                                <div style={{ width: "90%" }} >
                                    <div style={{ display: "flex", justifyContent: 'space-between' }} >
                                        <Button style={{ backgroundColor: '#e7f3ec', borderRadius: '10px', textTransform: 'capitalize', width: "55%", color: '#5eb182', fontSize: '12px', fontWeight: 'bold', padding: '10px 0px' }} >For Sale</Button>
                                        <Button variant="contained" style={{ borderRadius: '10px', textTransform: 'capitalize', width: "35%", backgroundColor: '#2e63f6', fontSize: '12px', fontWeight: 'bold', padding: '10px 0px' }} >Add List</Button>
                                    </div>
                                    <div style={{ padding: "5px 0px", fontSize: '', fontWeight: 'bolder' }} >
                                        MLS#:E5579076
                                    </div>
                                    <div style={{ padding: "5px 0px", color: "gray" }}>
                                        Listed for:<span style={{ color: "#2e63f6", fontWeight: 'bolder' }} >$1,549,586</span>
                                    </div>
                                    <div style={{ padding: "5px 0px", fontSize: 'small', fontWeight: 'bold' }}>
                                        2118 Thornridge Cir. Syracuse, Connecticut 35624
                                    </div>
                                    <div style={{ border: '1px solid lightGray', margin: "5px 0px", borderRadius: '10px', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                                        <div style={{ width: '90%', display: 'flex', alignItems: 'center', padding: '10px 0px', gap: 10 }} ><img src={mapIcon} alt="img" style={{ marginLeft: '10px' }} /><span style={{ fontWeight: 'bolder', color: 'GrayText' }} >View on Map</span></div>
                                    </div>
                                    <div style={{ border: '1px solid lightGray', margin: "5px 0px", borderRadius: '10px', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                                        <div style={{ width: '90%', display: 'flex', alignItems: 'center', padding: '10px 0px', gap: 10 }} ><img src={lineIcon} alt="img" style={{ marginLeft: '10px' }} /><span style={{ fontWeight: 'bolder', color: 'GrayText' }} >Get Directions</span></div>
                                    </div>
                                    <div style={{ border: '1px solid lightGray', margin: "5px 0px", borderRadius: '10px', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                                        <div style={{ width: '90%', display: 'flex', alignItems: 'center', padding: '10px 0px', gap: 10 }} ><img src={shareIcon} alt="img" style={{ marginLeft: '10px' }} /><span style={{ fontWeight: 'bolder', color: 'GrayText' }} >Share</span></div>
                                    </div>
                                    <div style={{ border: '1px solid lightGray', margin: "5px 0px", borderRadius: '10px', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                                        <div style={{ width: '90%', display: 'flex', alignItems: 'center', padding: '10px 0px', gap: 10 }} ><img src={notIcon} alt="img" style={{ marginLeft: '10px' }} /><span style={{ fontWeight: 'bolder', color: 'GrayText' }} >My Notes</span></div>
                                    </div>
                                    <div style={{ backgroundColor: '#f5f6fa', margin: "5px 0px", borderRadius: '10px', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                                        <div style={{ width: '90%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px 0px', gap: 10 }} >
                                            <div style={{ width: "95%" }} >
                                                <div style={{ fontSize: '12px', color: "gray" }} >Listing Agent</div>
                                                <div style={{ display: "flex", padding: "5px 0px", justifyContent: "space-between", alignItems: "center" }} >
                                                    <div>
                                                        <div style={{ fontSize: 'small', fontWeight: 'bold' }} >Country Henry</div>
                                                        <div style={{ display: "flex", color: "gray", gap: 10, alignItems: "center", fontSize: "small", fontWeight: "bolder" }} ><img src={turkeyFlag} alt="img" /> +90 552 889 8277</div>
                                                    </div>
                                                    <div>
                                                        <img src={smsIcon} alt="img" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ width: "52%", display: 'flex', flexDirection: 'column', gap: 15 }} >
                            <div style={{ display: 'flex', padding: '5px 0px', backgroundColor: "white", borderRadius: '10px' }} >
                                <div style={{ width: '22%', fontSize: "smaller", fontWeight: "bolder", display: "flex", justifyContent: 'center', alignItems: "center" }} >Property Details</div>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "13%", padding: "5px 0px" }} >
                                    <div style={{ width: "100%", display: "flex", gap: 5, alignItems: "center", justifyContent: "center", flexDirection: "column" }} >
                                        <img src={lineIcon} alt="img" />
                                        <div style={{ fontSize: "10px", color: "gray" }} >Apartment</div>
                                    </div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "13%", padding: "5px 0px" }} >
                                    <div style={{ width: "100%", display: "flex", gap: 5, alignItems: "center", justifyContent: "center", flexDirection: "column" }} >
                                        <img src={lineIcon} alt="img" />
                                        <div style={{ fontSize: "10px", color: "gray" }} >3 Bedrooms</div>
                                    </div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "13%", padding: "5px 0px" }} >
                                    <div style={{ width: "100%", display: "flex", gap: 5, alignItems: "center", justifyContent: "center", flexDirection: "column" }} >
                                        <img src={lineIcon} alt="img" />
                                        <div style={{ fontSize: "10px", color: "gray" }} >2 Bathrooms</div>
                                    </div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "13%", padding: "5px 0px" }} >
                                    <div style={{ width: "100%", display: "flex", gap: 5, alignItems: "center", justifyContent: "center", flexDirection: "column" }} >
                                        <img src={lineIcon} alt="img" />
                                        <div style={{ fontSize: "10px", color: "gray" }} >2 Garage</div>
                                    </div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "13%", padding: "5px 0px" }} >
                                    <div style={{ width: "100%", display: "flex", gap: 5, alignItems: "center", justifyContent: "center", flexDirection: "column" }} >
                                        <img src={lineIcon} alt="img" />
                                        <div style={{ fontSize: "10px", color: "gray" }} >1,963 sq. ft.</div>
                                    </div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "13%", padding: "5px 0px" }} >
                                    <div style={{ width: "100%", display: "flex", gap: 5, alignItems: "center", justifyContent: "center", flexDirection: "column" }} >
                                        <img src={lineIcon} alt="img" />
                                        <div style={{ fontSize: "10px", color: "gray" }} >1,1 sq. ft.</div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ backgroundColor: "white", width: "100%", borderRadius: "10px" }} >
                                <FullWidthTabs />
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', width: "22%" }} >
                            <div style={{ width: "100%", height: "max-content", display: 'flex', justifyContent: 'center', backgroundColor: 'white', borderRadius: '10px' }} >
                                <div style={{ width: "90%", padding: '10px 0px' }} >
                                    <div style={{ display: "flex", justifyContent: 'space-between', alignItems: "center" }} >
                                        <div style={{ fontWeight: "bold" }}>Shortcuts</div>
                                        <div><img src={rightTabIcon} alt="img" /></div>
                                    </div>
                                    <div style={{ color: "white", backgroundColor: "#f5f6fa", margin: "5px 0px", borderRadius: '10px', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                                        <div style={{ width: '85%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0px', gap: 10 }} ><span style={{ fontWeight: 'bold', fontSize: 'small', color: 'black' }} >Notify similar properties</span><Switch size="small" /></div>
                                    </div>
                                    <div style={{ color: "white", backgroundColor: "#2e63f6", margin: "5px 0px", borderRadius: '10px', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                                        <div style={{ width: '90%', display: 'flex', alignItems: 'center', padding: '10px 0px', gap: 10 }} ><img src={keyIcon} alt="img" style={{ marginLeft: '10px' }} /><span style={{ fontWeight: 'bold', color: 'white' }} >View on Map</span></div>
                                    </div>
                                    <div style={{ border: '1px solid lightGray', margin: "5px 0px", borderRadius: '10px', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                                        <div style={{ width: '90%', display: 'flex', alignItems: 'center', padding: '10px 0px', gap: 10 }} ><img src={lineIcon} alt="img" style={{ marginLeft: '10px' }} /><span style={{ fontWeight: 'bolder', color: 'GrayText' }} >Get Directions</span></div>
                                    </div>
                                    <div style={{ border: '1px solid lightGray', margin: "5px 0px", borderRadius: '10px', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                                        <div style={{ width: '90%', display: 'flex', alignItems: 'center', padding: '10px 0px', gap: 10 }} ><img src={shareIcon} alt="img" style={{ marginLeft: '10px' }} /><span style={{ fontWeight: 'bolder', color: 'GrayText' }} >Share</span></div>
                                    </div>
                                    <div style={{ border: '1px solid lightGray', margin: "5px 0px", borderRadius: '10px', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                                        <div style={{ width: '90%', display: 'flex', alignItems: 'center', padding: '10px 0px', gap: 10 }} ><img src={notIcon} alt="img" style={{ marginLeft: '10px' }} /><span style={{ fontWeight: 'bolder', color: 'GrayText' }} >My Notes</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
        </Box>
    );
}