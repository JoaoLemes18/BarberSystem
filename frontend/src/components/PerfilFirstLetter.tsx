import '../styles/PerfilFirstLetter.scss'

const PerfilFirstLetter = ({word}: {word: string}) => {
  return (
    <div className="perfilFirstLetter">
       <p>{word.charAt(0).toUpperCase()}</p> 
    </div>
  )
}

export default PerfilFirstLetter
