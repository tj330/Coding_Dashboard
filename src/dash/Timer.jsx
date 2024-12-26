import { Button } from 'react-bootstrap';
import { useTimer } from 'react-timer-hook'

export default function Timer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ autoStart: false, expiryTimestamp, onExpire: () => console.warn('onExpire called') });


  return (
  <>
    <div style={{textAlign: 'center'}}>
      <h1>Pomodoro timer</h1>
      <div style={{fontSize: '100px'}}><span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <div>
      <Button variant="light" onClick={start} className='mx-2 mb-3'>Start</Button>
      <Button variant="light" onClick={pause} className='mx-2 mb-3'>Pause</Button>
      <Button variant="light" onClick={resume} className='mx-2 mb-3'>Resume</Button>
      <Button variant="light" onClick={() => {
        const time = new Date();
        time.setSeconds(time.getSeconds() + 25*60);
        restart(time)
      }} className='mx-2 mb-3'>Restart</Button>
      </div>
    </div>
    <div>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/019/153/003/small/3d-minimal-programming-icon-coding-screen-web-development-concept-laptop-with-a-coding-screen-and-a-coding-icon-3d-illustration-png.png" alt="" />
    </div>
    </>
  );
}