import React from "react";
import TopMenu from "./TopMenu";
import Logo from "./Logo";
import MainContent from "./MainContent";
import MenuLinks from "./MenuLinks";
import Search from "./Search";
import SideMenu from "./SideMenu";
import AlbumCard from "./AlbumCard";
import AlbumList from "./AlbumList";
import GenrePicker from "./GenrePicker";

function App() {
  return (
    <div className="app-container">
      <TopMenu/>
      <SideMenu/>
      <MainContent/>
    </div>
  );
}

export default App;
