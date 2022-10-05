import './App.css';
import './hero.png';
import Typewriter from 'typewriter-effect';
 
  
  const App = () => {
    return (
      <div className='animated__text'>
      <Typewriter
      onInit={(typewriter) => {
        
        typewriter.typeString('Hello')
          .callFunction(() => {
            // console.log('String typed out!');
          })
          .pauseFor(2500)
          .deleteAll()
          .callFunction(() => {
            console.log('All strings were deleted');
          })
          .start();

          typewriter.typeString("I'm Luke Olawale")
          .callFunction(() => {
            // console.log('String typed out!');
          })
          .pauseFor(2500)
          .deleteAll()
          .callFunction(() => {
            console.log('All strings were deleted');
          })
          .start();
          
          typewriter.typeString("A Full-Stack Developer")
          .callFunction(() => {
            // console.log('String typed out!');
          })
          .pauseFor(2500)
          .deleteAll()
          .callFunction(() => {
            console.log('All strings were deleted');
          })
          .start();

       
      }}
    />
    </div>
    )}
    
export default App

