/* eslint-disable react/jsx-no-undef */
 
import { AlertClock } from "./AlertClock"
import { MouseClicker } from "./MouseClicker"
// eslint-disable-next-line no-unused-vars
import { MyForm } from "./MyForm"
import { MyUncontrolledForm } from "./MyUncontrolledForm"
import { Welcome } from "./Welcome"

//compongo piu componenti, creo un componente che utilizza jsx 
//per eseguire il rendering di un altro componente 
//creo quindi un albero di componenti
export function App() {
    return (
        <div>
            <h1>My Awesome Application</h1>
            <hr/>
        <Welcome name="Jimmy" age = {40}/>
        <Welcome name="Kate" age = {20}/>

        <Counter initialVAlue = {42}/>

        <AlertClock ></AlertClock>

        <Clock />

        <MouseClicker />
      {/* ho sostitutito MyForm con MyUncotrolledForm */}
        <MyUncontrolledForm />

        </div>
    )
}