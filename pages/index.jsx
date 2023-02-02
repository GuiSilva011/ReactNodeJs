import { useState } from 'react'
import Title from '../src/components/title/Title'
import Subtitle, { NewSubtitle } from '../src/components/subtitle/Subtitle'
import Button from '../src/components/button/Button'
 



function HomePage(){
   const [click, setClick] = useState(0)
   const handleClick = () => {
   setClick(click + 1)
   }

 return(
  
    <div>
       <Title>Um titulo       </Title>
       <Subtitle  text="Um sub"/>
       <Title>Mais um titu  </Title>
       <Subtitle text="Outro subtitulo"/>
       <Button onClick={handleClick}
       >Botão teste</Button>
       <p>Cliques:{click} </p>
    </div>
  
 )
   
}
export default HomePage