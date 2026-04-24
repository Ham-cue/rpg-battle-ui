import { useState } from "react"

function ActionButtons(){
    const [clicked, setClicked] = useState('')
    const handleClick = (menu) => {
        setClicked(menu)
    }
    const run = () => {
        setClicked('')
    }

return (
  <div style={{  display: 'flex',
  alignItems: 'flex-end',
   backgroundImage: clicked === '' ? "url('${import.meta.env.BASE_URL}/Title.png')" : "url('${import.meta.env.BASE_URL}/Bg.png')",backgroundSize: 'cover', 
  backgroundPosition: 'center',
  width: '100vw',
  height: '100vh',
  position: 'relative'}}>
    {clicked === '' ? (
      <button onClick={handleClick}>Battle</button>
    ) : clicked === 'Attack' ? (
      <div>
            <button>Poison Dagger</button>
            <button>Holy Smite</button>
            <button>Shadow Strike</button>
            <button>Dragon Breath</button>
            <button>Shield Bash</button>
            <button>Whirlwind</button>
            <button>Fireball</button>
            <button>Ice Lance</button>
            <button className="Back" onClick={handleClick}>Back</button>
      </div>
    ) : clicked === 'Party' ? (
      <div>
            <button>Sir Aldric the Knight</button>
            <button>Lyra the Archer</button>
            <button>Thorne the Barbarian</button>
            <button>Elowen the Mage</button>
            <button>Brother Cedric the Healer</button>
            <button>Kael the Rogue</button>
            <button className="Back" onClick={handleClick}>Back</button>
      </div>
    ) : clicked === 'Items' ? (
      <div>
            <button>Health Potion</button>
            <button>Mana Elixir</button>
            <button>Antidote</button>
            <button>Smoke Bomb</button>
            <button>Throwing Knife</button>
            <button>Torch</button>
            <button>Bread Ration</button>
            <button>Revival Tonic</button>
            <button>Shield Tonic</button>
            <button>Stamina Draught</button>
            <button className="Back" onClick={handleClick}>Back</button>
      </div>
    ) : (
      <div>
        <button onClick={() => handleClick('Attack')}>Attack</button>
        <button onClick={() => handleClick('Party')}>Party</button>
        <button onClick={() => handleClick('Items')}>Items</button>
        <button className="Back" onClick={run}>Run</button>
      </div>
    )}
  </div>
)
}
export default ActionButtons
