import { useEffect, useState } from "react";
import "./App.css";
import CustomInput from "./components/customInput"

function App() {
  const [passwordOption, setPasswordOption] = useState({
    upperCharacter: false,
    lowerCharacter: false,
    number: false,
    symbols: false,
  });
  const [range, setRange] = useState(10);
  const [copied, setcopied] = useState(false);
  const [strength, setStrength] = useState("weak")
  const [password, setpassword] = useState("tick check box");
  const [color, setColor] = useState("yellow")
  
  function generatePassword() {
    let passwordgene = "";
    let characters = "";
    if (passwordOption.upperCharacter) {
      characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (passwordOption.lowerCharacter) {
      characters += "abcdefghijklmnopqrstuvwxyz";
    }
    if (passwordOption.number) {
      characters += "0123456789";
    }
    if (passwordOption.symbols) {
      characters += "!@#$%^&*()_+=-[]{}|;:,.<>/?";
    }
    for (let i = 0; i < range; i++) {
      passwordgene += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setpassword(passwordgene);
  }

  function copyPassword() {
    navigator.clipboard.writeText(password).then(() => {
      setcopied(true);
      setTimeout(() => {
        setcopied(false);
      }, 2000);
    });
  }

  useEffect(() => {
    generatePassword();
    const hasAllOptions = passwordOption.upperCharacter && 
    passwordOption.lowerCharacter && 
    passwordOption.number && 
    passwordOption.symbols;
    if(password!="")
    {

      if (range < 4) {
      setStrength("weak");
      setColor("red")
      
      }else if (range >= 4 && range <= 10) {
      setStrength("medium");
      setColor("yellow")
      }
      else if (hasAllOptions && range > 10) {
        setStrength("Good");
        setColor("green");
        
        } 
     
    }

  }, [range, passwordOption]);

  return (
    <>
      <div className="passwordBox">
        <div className="topOne flex">
          <h4>{password != "" ? password : "Tick check boxes to generate"}</h4>
          <button
            style={{
              backgroundColor: copied && password != "" && "lightgreen",
            }}
            onClick={() => copyPassword()}
            disabled={password == ""}
          >
            {copied && password != "" ? "Copied!" : "Copy"}
          </button>
        </div>
        <div className="characterLength mt-10 ">
          <div className="flex">
            <h3>Character Length</h3>
            <span>{range}</span>
          </div>
          <input
            type="range"
            name="charactersize"
            min={0}
            max={20}
            value={range}
            onChange={(e) => setRange(e.target.value)}
          />
        </div>
        {/* password option section */}
        <div className="passwordOption flex flex-wrap mt-50">
        
          <CustomInput
            type={"checkbox"}
            label={"include upper characters"}
            name={"upperCharacter"}
            onChange={() =>
              setPasswordOption({
                ...passwordOption,
                upperCharacter: !passwordOption.upperCharacter,
              })
            }
          />
        
          <CustomInput
            type={"checkbox"}
            label={"include lower characters"}
            name={"lowerCharacter"}
            onChange={() =>
              setPasswordOption({
                ...passwordOption,
                lowerCharacter: !passwordOption.lowerCharacter,
              })
            }
          />
          <CustomInput
            type={"checkbox"}
            label={"include numbers"}
            name={"number"}
            onChange={() =>
              setPasswordOption({
                ...passwordOption,
                number: !passwordOption.number,
              })
            }
          />
         
          <CustomInput
            type={"checkbox"}
            label={"include special symbols"}
            name={"symbols"}
            onChange={() =>
              setPasswordOption({
                ...passwordOption,
                symbols: !passwordOption.symbols,
              })
            }
          />
        </div>
        {/* strength section */}
        <div className="strength flex mt-50">
          <span>Strength</span>
          <span style={{color:color}}>{strength}</span>
        </div>

        
      </div>
    </>
  );
}

export default App;
