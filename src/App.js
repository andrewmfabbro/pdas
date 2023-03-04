import 'bulma/css/bulma.css'
import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png';
import SiriImage from './images/siri.png';
import CortanaImage from './images/cortana.png'


function App() {
    return(
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                    <p className='title'>Personal Digital Assistants</p>
                </div>
            </section>

            <div className='container'>
                <section className="section">
                    <div className='columns'>
                        <div className='column is-4'>
                            <ProfileCard 
                            title="Alexa" 
                            handle="@alexa94" 
                            image={AlexaImage}
                            description="Alexa was created by Amazon and buys you stuff from Jeff. She also plays music, videos, and answers the door."
                            />
                        </div>
                        <div className='column is-4'>
                            <ProfileCard title="Cortana" 
                            handle="@cortana01" 
                            image={CortanaImage}
                            description="Cortana was created by Dr.Halsey (and Microsoft) and is Master Chief's AI assistant."
                            />
                        </div>
                        <div className='column is-4'>
                            <ProfileCard title="Siri" 
                            handle="@siri11" 
                            image={SiriImage}
                            description="Siri was made by Apple she wakes when you don't need her to help you. She also plays music."
                            />
                        </div>
                    </div>
                </section>
            </div>
            
            
            
        </div>
    );
}

export default App;