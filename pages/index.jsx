
import Title from '../src/components/title/Title'
import Subtitle, { NewSubtitle } from '../src/components/subtitle/Subtitle'
 
function HomePage(){
 return(
  
    <div>
       <Title>Um titulo        </Title>
       <Subtitle  text="Um subtitulo"/>
       <Title>Mais um titulo   </Title>
       <Subtitle text="Outro subtitulo"/>
    </div>
  
 )
   
}
export default HomePage