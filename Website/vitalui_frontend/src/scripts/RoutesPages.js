import {BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import NoPage from '../pages/NoPage';

// Website Components Links
import NavigationsPage from '../pages/components-pages/NavigationsPage';
import AlertsPage from '../pages/components-pages/AlertsPage';
import CTAsPage from '../pages/components-pages/CTAsPage';
import FAQsPage from '../pages/components-pages/FAQsPage';
import BannersPage from '../pages/components-pages/BannersPage';
import FootersPage from '../pages/components-pages/FootersPage';
import ButtonsPage from '../pages/components-pages/ButtonsPage';
import SectionsPage from '../pages/components-pages/SectionsPage';
import CardsPage from '../pages/components-pages/CardsPage';
import TabsPage from '../pages/components-pages/TabsPage';
import AnnouncementsPage from '../pages/components-pages/AnnoucementsPage';
import TestimonialsPage from '../pages/components-pages/TestimonialsPage';
import FormsPage from '../pages/components-pages/FormsPage';
import PopupsPage from '../pages/components-pages/PopupsPage';
import MenusPage from '../pages/components-pages/MenusPage';
import StatsPage from '../pages/components-pages/StatsPage';

// Web Application Ui's Links
import DropdownsPage from '../pages/webappui-pages/DropdownsPage';
import ButtonTabsPage from '../pages/webappui-pages/ButtonTabsPage';
import PaginationsPage from '../pages/webappui-pages/PaginationsPage';
import SideMenusPage from '../pages/webappui-pages/SideMenusPage';
import HeadersPage from '../pages/webappui-pages/HeadersPage';
import StatesPage from '../pages/webappui-pages/StatesPage';
import TablesPage from '../pages/webappui-pages/TablesPage';
import InputsPage from '../pages/webappui-pages/InputsPage';

const RoutesPages = () => {
    return(
    <BrowserRouter>
      <Routes>

          {/** Main Home Screen */}
          <Route index element={<Home/>}/>

          {/** Sign Up / Login Screen */}
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>

          {/** Website Components Links*/}
          <Route path="/navigations" element={<NavigationsPage/>}/>
          <Route path="/alerts" element={<AlertsPage/>}/>
          <Route path="/ctas" element={<CTAsPage/>}/>
          <Route path="/faqs" element={<FAQsPage/>}/>
          <Route path="/banners" element={<BannersPage/>}/>
          <Route path="/footers" element={<FootersPage/>}/>
          <Route path="/buttons" element={<ButtonsPage/>}/>
          <Route path="/sections" element={<SectionsPage/>}/>
          <Route path="/cards" element={<CardsPage/>}/>
          <Route path="/tabs" element={<TabsPage/>}/>
          <Route path="/announcements" element={<AnnouncementsPage/>}/>
          <Route path="/testimonials" element={<TestimonialsPage/>}/>
          <Route path="/forms" element={<FormsPage/>}/>
          <Route path="/popups" element={<PopupsPage/>}/>
          <Route path="/menus" element={<MenusPage/>}/>
          <Route path="/element" element={<StatsPage/>}/>

          {/** Web Application UI's Links*/}
          <Route path="/dropdowns" element={<DropdownsPage/>}/>
          <Route path="/buttonstabs" element={<ButtonTabsPage/>}/>
          <Route path="/paginations" element={<PaginationsPage/>}/>
          <Route path="/sidemenus" element={<SideMenusPage/>}/>
          <Route path="/headers" element={<HeadersPage/>}/>
          <Route path="/states" element={<StatesPage/>}/>
          <Route path="/tables" element={<TablesPage/>}/>
          <Route path="/inputs" element={<InputsPage/>}/>

          {/** 404 Page */}
          <Route path="*" element={<NoPage/>}/>
      </Routes>
    </BrowserRouter>);
}

export default RoutesPages;