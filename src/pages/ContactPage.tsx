import portrait from '../assets/me.vector.png'
import linkedIn from '../assets/in.png'
import insta from '../assets/ig.png'

const ContactPage = () =>
{
  return (
    <div style={{ 
      padding: '20px', 
      marginTop: '210px', 
      backgroundColor: 'rgba(83, 83, 83, 0.34)',
      borderBottom: '5px solid rgba(142, 197, 252, 0.8)',
      borderRadius: '8px', 
      maxWidth: '400px', 
      margin: 'auto', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      textAlign: 'center'
    }}>
      <img src={portrait} style={{
        width: '200px', 
        marginTop: '20px',
      }}/>
      <a href="mailto:alex.tarverdi@outlook.com" style={{
        textDecoration: 'none', 
        color: 'white',
        fontSize: '1rem', 
        fontFamily: 'BebasFont',
        marginTop: '10px',
      }}><h1 style={{
        margin: '0'
      }}>reach out</h1></a>
      <div style={{
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center',
        gap: '10px',
      }}>
      <a href="https://www.linkedin.com/in/alex-tarverdi/" target="_blank"><img src={linkedIn} alt="LinkedIn" style={{
        width: '30px', 
        height: '30px', 
        marginTop: '5px',
      }}/></a>
      <a href="https://www.instagram.com/pistolpet3y/" target="_blank"><img src={insta} alt="Instagram" style={{
        width: '30px', 
        height: '30px', 
        marginTop: '5px',
      }}/></a>
      </div>
    </div>
  );
}

export default ContactPage;