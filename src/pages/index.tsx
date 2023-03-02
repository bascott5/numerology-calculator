import { useState } from 'react'
import { Inter } from '@next/font/google'
import LifePathNumber from '@/components/life-path-number'
import BirthdayNumber from '@/components/birthday-number'
import InitialImpressionNumber from '@/components/initial-impression-number'
import DestinyNumber from '@/components/destiny-number'
import InnerSoulNumber from '@/components/inner-soul-number'
import CharacterNumber from '@/components/character-number'
import Dropdown from '@/components/dropdown'
import styles from '@/styles/Home.module.css'

export default function Home: React.FC() {
  const handleNameChange = (event: any) => {
    user.name = event.target.value;
  };

  const handleBdayYearChange = (event: any) => {
    user.bday[2] = event.target.value;
  };

  const handleBdayMonthChange = () => {
    return month.map((keys) => (
      <button onClick={() => setUser(user.bday[0].replace(user.bday[0], keys))}>{keys}</button>
    ))
  }

  const handleBdayDayChange = () => {
    return day.map((keys) => (
      <button onClick={() => setUser(user.bday[1].replace(user.bday[1], keys))}>{keys}</button>
    ))
  }

  const [user, setUser] = useState<any>({name: "", bday: ["", "", ""]});
  const [visible, setVisible] = useState(false);

  const day = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
  const month = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

  return (
    <div>
      <h1 className='title'>Pythagorean Numerology Calculator</h1>
      <svg width="100%" height="100%" id="svg" viewBox="0 100 1440 490" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0,500 C 0,500 0,125 0,125 C 108.7751196172249,145.3062200956938 217.5502392344498,165.61244019138758 307,163 C 396.4497607655502,160.38755980861242 466.57416267942574,134.85645933014354 553,135 C 639.4258373205743,135.14354066985646 742.1531100478471,160.9617224880383 843,162 C 943.8468899521529,163.0382775119617 1042.8133971291866,139.29665071770336 1142,129 C 1241.1866028708134,118.70334928229666 1340.5933014354068,121.85167464114832 1440,125 C 1440,125 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="plum" fill-opacity="0.4"></path>
        <path d="M 0,500 C 0,500 0,250 0,250 C 108.32535885167462,228.95693779904306 216.65071770334924,207.91387559808612 327,219 C 437.34928229665076,230.08612440191388 549.7224880382776,273.3014354066986 625,278 C 700.2775119617224,282.6985645933014 738.4593301435405,248.88038277511959 834,247 C 929.5406698564595,245.11961722488041 1082.4401913875597,275.177033492823 1193,281 C 1303.5598086124403,286.822966507177 1371.77990430622,268.4114832535885 1440,250 C 1440,250 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="plum" fill-opacity="0.53"></path>
        <path d="M 0,500 C 0,500 0,375 0,375 C 96.6794258373206,357.1052631578948 193.3588516746412,339.21052631578954 280,350 C 366.6411483253588,360.78947368421046 443.2440191387559,400.26315789473676 532,401 C 620.7559808612441,401.73684210526324 721.665071770335,363.73684210526324 838,351 C 954.334928229665,338.26315789473676 1086.0956937799042,350.7894736842105 1189,359 C 1291.9043062200958,367.2105263157895 1365.952153110048,371.10526315789474 1440,375 C 1440,375 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="plum" fill-opacity="1"></path></svg>
      <div className='main'>
      <p style={{color: "darkmagenta"}}>Full Name</p>
      <input type="text" id="name" name="name" onChange={handleNameChange}/>
      <p style={{color: "darkmagenta"}}>Birthday (mm/dd/yyyy)</p>
      <input type="text" id="bday" name="bday" onChange={handleBdayYearChange}/>
      <Dropdown>
        {handleBdayMonthChange()}
      </Dropdown>
      <Dropdown>
        {handleBdayDayChange()}
      </Dropdown>
      <button className='button' onClick={() => setVisible(visible => true)}>Calculate!</button>
      {visible ?
        <div>
          <LifePathNumber user={user.bday}/>
          <BirthdayNumber user={user.bday}/>
          <InitialImpressionNumber user={user.bday}/>
          <DestinyNumber user={user.name}/>
          <InnerSoulNumber user={user.name}/>
          <CharacterNumber user={user.name}/>
        </div>
        :
        null
      }
      </div>
    </div>
  )
}
