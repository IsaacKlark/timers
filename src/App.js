import React, { useState } from 'react';
import './App.css';
import playImage from '../src/images/play_circle_outline-24px.svg';
import pauseImage from '../src/images/pause_circle_outline-24px.svg';


function App() {
  const [track, setTrack] = useState([]);
  let [id, setId] = useState(0);
  let [enteredText, setEnteredText] = useState("");
  
  const createTrack = (code) => {
    if (code === 13) {
      const date = new Date;
      const emptyEnter = `${date.getDate()} ${date.getMonth()} 
        ${date.getFullYear()} 
        ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
      setTrack([...track, {
        name: enteredText === "" ? emptyEnter : enteredText,
        hours: 0,
        minutes: 0,
        seconds: 0,
        start: true,
        id: id
      }]);
      setId(id + 1);
      document.querySelector('.input-text').value = "";
      setEnteredText("");
    }
  }

  for (var i = 1; i < 1000; i++) {
    clearTimeout(i);
  }

  setTimeout(() => {
    if (track[0]) {
      const newTrack = track.map(time => {
        let hours = time.hours;
        let minutes = time.minutes;
        let seconds = time.seconds;

        if (time.start === true) {
          if (time.seconds < 59) {
            seconds = time.seconds + 1;
          } else if (time.minutes < 59) {
            minutes = time.minutes + 1;
            seconds = 0;
          } else {
            hours = time.hours++;
            minutes = 0;
            seconds = 0;
          }
        }
        return ({
          name: time.name,
          hours,
          minutes,
          seconds,
          start: time.start,
          id: time.id
        })
      });

      setTrack(newTrack);
    }
  }, 1000);

  const cleartrack = (id) => {
    const filteredTracks = track.filter(newTrack => newTrack.id !== id);
    setTrack(filteredTracks);
  }

  const playPause = (id, e) => {
    const newTrack = track.map(changedTrack => {
      if (changedTrack.id !== id) {
        return changedTrack;
      } else {
        if (changedTrack.start) {
          e.target.style.background = `url(${playImage})`;
        } else {
          e.target.style.background = `url(${pauseImage})`;
        }

        return ({ ...changedTrack, start: !changedTrack.start })
      }
    });
    setTrack(newTrack);
  }
    

  return (
    <>
      <h1 className="tracker">tracker</h1>
      <span className="enterFild">
        <input
          type="text"
          name="text"
          placeholder="Enter tracker name"
          className="input-text"
          onKeyDown={(e) => createTrack(e.keyCode)}
          onChange={(e) => {
            setEnteredText(e.target.value);
          }}
        />
        <button
          type="button"
          className="input-button"
          onClick={() => createTrack(13)}
        >
        </button>
      </span>
      {track.map(newTrack => {
        return (
          <div 
            className="createdTrack" 
            key={newTrack.id}
          >
            {newTrack.name}
            <div className="rightBlock">
              <div className="time">
                <span>
                  {
                    newTrack.hours < 10 ? `0${newTrack.hours}: ` : `${newTrack.hours}: `
                  }
                </span>
                <span>
                  {
                    newTrack.minutes < 10 ? `0${newTrack.minutes}: ` : `${newTrack.minutes}: `
                  }
                </span>
                <span>
                  {
                    newTrack.seconds < 10 ? `0${newTrack.seconds}` : `${newTrack.seconds}`
                  }
                </span>
              </div>
              <button
                type="button"
                className="playPause"
                onClick={(e) => playPause(newTrack.id, e)}
              >
              </button>
              <button
                type="button"
                className="delete"
                onClick={() => cleartrack(newTrack.id)}
              >
              </button>
            </div>
          </div>
        )
      })}
    </>
  );
}

export default App;
