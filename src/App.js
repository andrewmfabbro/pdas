import ProfileCard from "./ProfileCard";

function App() {
    return(
        <div>
            <div>Personal Digital Assistants</div>

            <ProfileCard title="Alexa" handle="@alexa94" />
            <ProfileCard title="Cortana" handle="@cortana01"/>
            <ProfileCard title="Siri" handle="@siri11"/>
        </div>
    );
}

export default App;