import 'bulma/css/bulma.css'
import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png';
import SiriImage from './images/siri.png';
import CortanaImage from './images/cortana.png'


function App() {
    return(
        <div>
            <div>Personal Digital Assistants</div>

            <div className='container'>
                <section className="section">
                    <div className='columns'>
                        <div className='column is-4'>
                            <ProfileCard title="Alexa" handle="@alexa94" image={AlexaImage}/>
                        </div>
                        <div className='column is-4'>
                            <ProfileCard title="Cortana" handle="@cortana01" image={CortanaImage}/>
                        </div>
                        <div className='column is-4'>
                            <ProfileCard title="Siri" handle="@siri11" image={SiriImage}/>
                        </div>
                    </div>
                </section>
            </div>
            
            
            
        </div>
    );
}

export default App;