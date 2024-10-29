import './App.css';
import ClanOverview from './components/ClanOverview';
import EventManagement from './components/EventManagement';
import MemberList from './components/MemberList';
import WarLogs from './components/WarLogs';
import Notifications from './components/Notifications';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>COC Dashboard</h1>
      </header>
      <ClanOverview />
      <EventManagement />
      <MemberList />
      <WarLogs />
      <Notifications />
    </div>
  );
}

export default App;
