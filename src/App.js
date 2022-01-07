
import Stripe1 from "./components/Stripe1"
// import Name from "./components/Name" 
import Stripe2 from "./components/Stripe2";
import Stripe3 from "./components/Stripe3";
import Stripe4 from "./components/Stripe4";
import "./App.css";


function App() {
  return (
    <div className="App">
      <h1> Hello there!</h1>
      {/* <Name/> */}
      <Stripe1/>
      <Stripe2/>
      <Stripe3/>
      <Stripe4/>

    

      {/* <Wrapper>
        <Card>
          <Picture></Picture>

          <Background></Background>

          <PersonalDetails>
            <Name>Scotland Yannello</Name>
            <Place>Simi Valley, CA</Place>
            </PersonalDetails>
            <Stats>
              <Contact> Image of phone</Contact>
              <Github>Github image link</Github>
              <SocialMedia> Link to page with all social medias</SocialMedia>
            </Stats>
         
        </Card>
      </Wrapper> */}
    </div>
  );
}

export default App;
