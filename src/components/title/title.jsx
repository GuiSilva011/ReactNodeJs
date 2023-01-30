import styles from  './Title.module.css'

/*
Exemplo de componentes no React com Children(filhos)
*/

function Title(props){
  return(
    <h1 className={styles.title}> 
     {props.children}
    </h1>
  )
}
export default Title