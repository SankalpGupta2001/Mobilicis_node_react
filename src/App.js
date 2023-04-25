import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeUsers';
import MaleScreen from './screens/Male_users';
import LastNameScreen from './screens/LastNameusers';
import EmailScreen from './screens/EmailUsers';
import TopCitiesScreen from './screens/Topcities';
import { BrowserRouter , Route ,Routes} from 'react-router-dom'

const App = () => {
  return (

    <>
        <Header />
        <BrowserRouter>
                <Routes>
                       <Route path="/" element={<HomeScreen />} />
                       <Route path="/male-users" element={<MaleScreen />} />
                       <Route path="/last-name-users" element={<LastNameScreen />} />
                       <Route path="/email-users" element={<EmailScreen />} />
                       <Route path="/top-cities" element={<TopCitiesScreen />} />

               </Routes>
            </BrowserRouter>
          <Footer />
        
    </>
  )
}

export default App;
