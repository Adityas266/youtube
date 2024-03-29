/*import { BrowserRouter,Routes,Route } from "react-router-dom";
import {Box} from '@mui/material';
import { Navbar, ChannelDetail, Feed, SearchFeed, VideoDetail } from "./components";

//import { Navbar , Feed , VideoDetail, ChannelDetail, SearchFeed} from './components';

const App = () => {
    <BrowserRouter>
        <Box sx = {{ backgroundColor: '#000' }}>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Feed />} />
                <Route path = "/video/:id" element={<VideoDetail />} />
                <Route path = "/channel/:id" element={<ChannelDetail />} />
                <Route path = "/search/:searchterm" element={<SearchFeed />} />
            </Routes>
        </Box>
    </BrowserRouter>
}

export default App*/

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';

import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components';

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route exact path='/youtube' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
